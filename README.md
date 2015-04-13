# FOX CSS

A light Sass/CSS framework, built with the following things in mind:

* flexible template
* light resets
* HTML5 ready
* "mobile first" approach
* integration of border-box
* basic stylings
* inconsistency bugs fixes
* support for IE8+

The framework is very modular and can easily be customized according to specific needs. Please note that the whole code is commented in the Sass _partials files, just open them with your favorite text editor.

Credits go to [KNACSS (FR)](http://knacss.com/) by Raphaël Goetter/Alsacréations for providing me with the idea and [Normalize](http://necolas.github.io/normalize.css/) by Nicolas Gallagher for the nice fixes.

Want to know more? Visit [fox-css.com](http://fox-css.com).

## Changelog

* 14 sep 2012: first release.
* 24 sep 2012: added new templates in the responsive section of the framework in order to bring more variety to the possible templates.
* 01 jun 2013: FOX CSS is now written with Sass.
* 11 jun 2013: added new grid layout using `text-align:justify`.
* 15 sep 2013: updated mixins and included more responsive possibilities, updated global Sass files.
* 23 jan 2014: switched to gulpjs, added a few fixes and resets.
$ 13 apr 2015: removed IE7 support, removed useless pieces of code.

## How to

Just include the CSS file in the `head` section of your document, like so:

    <link rel="stylesheet" type="text/css" href="path/to/fox.css" />

## Sass version

Sass version of FOX CSS is composed of one main SCSS file and several partial files:

* _variables.scss
* _mixins.scss
* _reset.scss
* _formatting.scss
* _layout.scss
* _responsive-layout.scss
* _ie.scss

You can easily edit and remove the partials you don't need.

## Contact

If you have any question or issue, just contact me on Twitter [@ronanlevesque](https://twitter.com/ronanlevesque).
