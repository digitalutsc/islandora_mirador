<?php

namespace Drupal\islandora_mirador\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * A controller for the Service Worker.
 */
class ServiceWorkerController extends ControllerBase {

  /**
   * Adds headers to the HTTP response.
   */
  public function serve(Request $request) {
    $file_str = \Drupal::service('extension.path.resolver')->getPath('module', 'islandora_mirador') . '/js/service_worker.js';
    if (file_exists($file_str)) {
      $response = new BinaryFileResponse($file_str, 200);
      $response->headers->set('Content-Type', 'application/javascript');
      // Allow same origin service worker.
      $response->headers->set('Service-Worker-Allowed', '/');
      return $response;
    }
    throw new NotFoundHttpException();
  }

}
