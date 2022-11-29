/*jslint browser: true*/
/*global Mirador, Drupal*/
/**
 * @file
 * Displays Mirador viewer.
 */
(function ($, Drupal) {
    'use strict';

    /**
     * If initialized.
     * @type {boolean}
     */
    var initialized;
    /**
     * Unique HTML id.
     * @type {string}
     */
    var base;

    function init(context,settings){
        if (!initialized){
            initialized = true;
            //const endpointUrl = "http://localhost:8888/annotation";
            const endpointUrl = settings.annotation_endpoint;
            //get the plugin
            let plugins = [];
            if (window.miradorPlugins && window.miradorPlugins.length) {
                for (let { name, plugin } of window.miradorPlugins) {
                plugins = [...plugins, ...plugin];
                }
            }
            var configs = {
              "annotation": {
                adapter: (canvasId) =>
                  window.miradorAnnotationServerAdapter(canvasId, endpointUrl),
              },
                "id": base,
                "manifests": {
                    [settings.iiif_manifest_url]: {provider: "Islandora"}
                },
                "windows": [
                    {
                        "manifestId": settings.iiif_manifest_url,
                        "thumbnailNavigationPosition": 'far-bottom'
                    }
                ],
                "window": {
                    "allowClose": false,
                    "allowMaximize": false,
                    "allowFullscreen": true, // Configure to show a "fullscreen" button in the WindowTopBar
                    "defaultSideBarPanel": "search",
                    "sideBarOpenByDefault": true,
                    "annotationLayer": true,
                    "panels": {
                      // Configure which panels are visible in WindowSideBarButtons
                      "info": true,
                      "attribution": true,
                      "canvas": true,
                      'annotations': true,
                      "search": true,
                    },
                },
            };
            
            /* If there is a JWT token was passed through, ineject it to the Mirador Viewer config */
            if (settings.token !== undefined) {
                configs = {
                  "annotation": {
                    adapter: (canvasId) =>
                      window.miradorAnnotationServerAdapter(canvasId, endpointUrl),
                  },
                    "id": base,
                    "manifests": {
                        [settings.iiif_manifest_url]: {provider: "Islandora"}
                    },
                    "windows": [
                        {
                            "manifestId": settings.iiif_manifest_url,
                            "thumbnailNavigationPosition": 'far-bottom'
                        }
                    ],
                    "window": {
                        "allowClose": false,
                        "allowMaximize": false,
                        "allowFullscreen": true, // Configure to show a "fullscreen" button in the WindowTopBar
                        "defaultSideBarPanel": "search",
                        "sideBarOpenByDefault": true,
                        "annotationLayer": true,
                        "panels": {
                          // Configure which panels are visible in WindowSideBarButtons
                          "info": true,
                          "attribution": true,
                          "canvas": true,
                          'annotations': true,
                          "search": true,
                        },
                    },
                    "resourceHeaders": {
                        'Authorization': 'Bearer '+ settings.token,
                        'token': settings.token
                    },
                    "requestPipeline": [
                        (url, options) => ({  ...options, headers: {
                                "Accept": 'application/ld+json;profile="http://iiif.io/api/presentation/3/context.json"',
                                'Authorization': 'Bearer '+ settings.token,
                                'token': settings.token
                            }})
                    ],
                    "osdConfig": {
                        "loadTilesWithAjax": true,
                        "ajaxHeaders": {
                            'Authorization': 'Bearer '+ settings.token,
                            'token': settings.token
                        }
                    },
                    requests: {
                        preprocessors: [ // Functions that receive HTTP requests and manipulate them (e.g. to add headers)
                            // rewrite all info.json requests to add the text/json request header
                            (url, options) => (url.match('info.json') && { ...options, headers: {
                                'Authorization': 'Bearer '+ settings.token,
                                'token': settings.token
                            }})
                        ],
                    },
                };
            }
            if (endpointUrl != null && endpointUrl.length) {
                var miradorInstance = Mirador.viewer(configs, plugins);
            } else {
                var miradorInstance = Mirador.viewer(configs);
            }
        }
    }
    Drupal.Mirador = Drupal.Mirador || {};

    /**
     * Initialize the Mirador Viewer.
     */
    Drupal.behaviors.Mirador = {
        attach: function (context, settings) {
            base = settings.mirador_view_id;
            init(context,settings);

            var watcher = setInterval(function(){
                if (jQuery("#searchSubmitButton").length > 0) {
                    const queryString = window.location.search;
                    const urlParams = new URLSearchParams(queryString);
                    var search_key = "";
                    if (urlParams.get('q') !== null) {
                        search_key = urlParams.get('q');
                        jQuery("#searchSubmitButton").trigger( "click" );
                        clearInterval(watcher);
                    }
                }
            },1000);



        },
        detach: function () {
        }
    };

})(jQuery, Drupal);
