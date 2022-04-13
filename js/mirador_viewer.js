//import annotationPlugins from "mirador-annotations/src";
//import SimpleAnnotationServerV2Adapter from "_dist/mirador-annotations/SimpleAnnotationServerV2Adapter";

/**
 * @file
 * Displays Mirador viewer.
 */
(function ($, Drupal) {
  "use strict";

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

  function init(context, settings) {
    if (!initialized) {
      initialized = true;
      //const endpointUrl = "http://localhost:8888/annotation";
      const config = {
        /*
        annotation: {
          adapter: (canvasId) =>
            new SimpleAnnotationServerV2Adapter(canvasId, endpointUrl),
        },
        */

        id: base,
        manifests: {
          [settings.iiif_manifest_url]: { provider: "Islandora" },
        },
        windows: [
          {
            loadedManifest: settings.iiif_manifest_url,
            thumbnailNavigationPosition: "far-right",
          },
        ],
        window: {
          allowClose: false,
          allowMaximize: false,
          allowFullscreen: true, // Configure to show a "fullscreen" button in the WindowTopBar
          //defaultSideBarPanel: "annotations",
          defaultSideBarPanel: "search",
          sideBarOpenByDefault: true,
          annotationLayer: true,
          panels: {
            // Configure which panels are visible in WindowSideBarButtons
            info: true,
            attribution: true,
            canvas: true,
            annotations: true,
            search: true,
          },
        },
      };
      //var miradorInstance = Mirador.viewer(config, [...annotationPlugins]);
      var miradorInstance = Mirador.viewer(config);
    }
    //});
  }
  Drupal.Mirador = Drupal.Mirador || {};

  /**
   * Initialize the Mirador Viewer.
   */
  Drupal.behaviors.Mirador = {
    attach: function (context, settings) {
      base = settings.mirador_view_id;
      init(context, settings);
    },
    detach: function () {},
  };
})(jQuery, Drupal);
