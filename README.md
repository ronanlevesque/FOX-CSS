# FOX CSS

A light Sass/CSS framework, built with the following things in mind:

* "mobile first" approach
* support for IE9+
* HTML5 ready
* modular template
* light resets
* inconsistency bugs fixes
* efficient grid system

The framework is very modular and can easily be customized according to specific needs. Please note that the whole code is commented in the Sass partials files, just open them with your favorite text editor.

Want to know more? Visit [fox-css.com](http://fox-css.com).

## Changelog

* 7 may 2015: complete revamp of the framework.
* 13 apr 2015: removed IE7 support, removed useless pieces of code.
* 23 jan 2014: switched to gulpjs, added a few fixes and resets.
* 15 oct 2013: updated mixins and included more responsive possibilities, updated global Sass files.
* 11 jun 2013: added new grid layout using `text-align:justify`.
* 01 jun 2013: FOX CSS is now written with Sass.
* 24 sep 2012: added new templates in the responsive section of the framework in order to bring more variety to the possible templates.
* 14 sep 2012: first release.

## How to

Just include the CSS file in the `head` section of your document, like so:

    <link rel="stylesheet" type="text/css" href="path/to/fox.min.css" />

## Sass version

Sass version of FOX CSS is composed of one main SCSS file and several partial files:

* _variables.scss
* _mixins.scss
* _resets.scss
* _normalize.scss
* _utils.scss
* _grid.scss
* _grid-ie9.scss

You can easily edit and remove the partials you don't need, except for `variables` and `mixins`.

## Contact

If you have any question or issue, just contact me on Twitter [@ronanlevesque](https://twitter.com/ronanlevesque).
