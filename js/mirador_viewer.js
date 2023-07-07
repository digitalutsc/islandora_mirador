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

            var configs = {
                "id": base,
                "manifests": {
                    [settings.iiif_manifest_url]: {provider: "Islandora"}
                },
                "windows": [
                    {
                        "manifestId": settings.iiif_manifest_url,
                        "thumbnailNavigationPosition": settings.default_thumbnail
                    }
                ],
            };
            
            /* If there is a JWT token was passed through, ineject it to the Mirador Viewer config */
            if (settings.token !== undefined) {
                configs = {
                    "id": base,
                    "manifests": {
                        [settings.iiif_manifest_url]: {provider: "Islandora"}
                    },
                    "windows": [
                        {
                            "manifestId": settings.iiif_manifest_url,
                            "thumbnailNavigationPosition": settings.default_thumbnail
                        }
                    ],
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

                if ('serviceWorker' in navigator) {
                    // The Mirador viewer uses img tags for thumbnails so thumbnail image requests
                    // do not have authorization or token headers. Attach them using a service worker.
                    window.addEventListener('load', () => {
                        navigator.serviceWorker
                            .register('/islandora_mirador_service_worker?token=' + settings.token, { scope: '/' })
                            .then(registration => {
                                console.log('ServiceWorker registration successful with scope: ', registration.scope);
                            })
                            .catch(err => {
                                console.log('ServiceWorker registration failed: ', err);
                            });
                    });
                }
            }
           
            
            var miradorInstance = Mirador.viewer(configs);
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
        },
        detach: function () {
        }
    };

})(jQuery, Drupal);
