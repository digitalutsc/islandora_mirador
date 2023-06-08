## Introduction
A Drupal 9 field formatter and block that can display an image or paged content
using an IIIF image server and the Mirador viewer.

More information on the Mirador viewer can be found on the [Project Mirador](https://projectmirador.org/) page.

## Requirements
- Drupal Token
- Islandora IIIF (use the drupal_view branch from [this repository](https://github.com/digitalutsc/iiif_view_manifest/tree/drupal_view). The drupal_view branch does not require islandora or islandora_core_feature)
- A IIIF image server (such as Cantaloupe)

## Installation
As a Drupal module, this module can be installed using Composer, Drush, or file upload. More in depth instructions can be found on [Drupal's docs](https://www.drupal.org/docs/extending-drupal/installing-modules).

## Configuration
Remember to first set up the configuration for the Islandora IIIF module and
the IIIF image server.

This module's configuration can be found under Configuration > Media >
Mirador Settings (`admin/config/media/mirador`). This is where the IIIF
Manifest URL for single media should be configured, and this should link
to the path of the Media IIIF Manifest view. Configuration of the IIIF Manifest
URL for content with multiple pages is done separately when placing a block.

## Usage
### Field Formatter (single images)
The field formatter can be used to display content with a single image. This
works on content that contains a field with an entity reference to a media
item of the image type.

To use the field formatter, change the display format to Mirador under
Structure > Media types > Image > Edit > Manage display
(`admin/structure/media/manage/image/display`).

### Block (paged content)
The block can be used to display paged content. This can work with a couple
different node structures, but all require the manual set-up of a IIIF Manifest
view.

#### Setting up a IIIF Manifest view
To create a new IIIF Manifest view go to Structure > Views > Add view
(`admin/structure/views/add`), check "Provide a REST export", and provide
a path (such as `node/%node/book-manifest`).

1. Under Advanced > Relationships, add a relationship to the field used for
images.
2. Under Format, change the Show from "Entity" to "Fields".
3. Add a field "Image" from category "Media", and ensure that the relationship
is the one set up in the earlier step.
4. Under Format, change the Format from "Serializer" to "IIIF Manifest", and
make sure the Media is selected under Tile source field(s).
5. Under Advanced > Contextual Filters, add a contextual filter based on the
structure of your content.

Below are some examples of content structures and ways to set up the contextual
filter for the manifest view:

- Recommended: For a content type where each node only has 1 image and each
node has a field that specifies if the node is a "part of" another node, the
contextual filter can be set as the name of that field "part of".
- For a content type where each node can have more than 1 image, the filter
can be set as the content ID.

The filter and sorting criteria in the view can be modified as wanted.

#### Placing the block
Once the manifest is set up, the block can be placed by going to Structure >
Block layout (`admin/structure/block`) and placing the Mirador block under
Content. When prompted for a IIIF Manifest URL, enter the URL to the manifest
created earlier. The block's visibility can be set, just like any other Drupal
block.
