## Introduction
A Drupal 9 FieldFormatter and Block that can display an image or paged content using an IIIF image server and the Mirador viewer.

More information on the Mirador viewer can be found on the [Project Mirador](https://projectmirador.org/) page.

## Installation
This module, as a Drupal module, can be installed using Composer, Drush, or file upload.
For installation, instructions can be found on [Drupal's docs](https://www.drupal.org/docs/extending-drupal/installing-modules).

## Configuration
The module's configuration can be found under Configuration > Media > Mirador Settings. This is where the URL for the IIIF manifest should be configured.

## Usage
To use the viewer to display paged content, it can be placed as a block through Structure > Block Layout. The IIIF Manifest URL can be configured separately for the placed block.

To use the viewer to display single images, Mirador should be set as the format for images under Structure > Media Types > Image > Edit > Manage Display.