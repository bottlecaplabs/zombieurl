----
/*
 * jQuery Lightbox Plugin (balupton edition) - Lightboxes for jQuery
 * Copyright (C) 2008 Benjamin Arthur Lupton
 *
 * Permission is granted to copy, distribute and/or modify this document
 * under the terms of the GNU Free Documentation License, Version 1.2
 * or any later version published by the Free Software Foundation;
 * with no Invariant Sections, no Front-Cover Texts, and no Back-Cover
 * Texts.  A copy of the license is included in the section entitled "GNU
 * Free Documentation License".
 *
 * @name jquery_lightbox: readme.txt
 * @package jQuery Lightbox Plugin (balupton edition)
 * @version 1.0.1-final
 * @date January 09, 2007
 * @category jQuery plugin
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2008 Benjamin Arthur Lupton {@link http://www.balupton.com}
 * @license GNU Free Documentation License - {@link http://www.gnu.org/licenses/fdl.html}
 * @example Visit {@link http://jquery.com/plugins/project/jquerylightbox_bal} for more information.
 */
----

Usage:
Refer to (index.htm) or (http://www.balupton.com/sandbox/jquerylightbox/) if (index.htm) does not exist.

----

Changelog:

v1.0.1-final
* Includes an improvement to the baseurl calculation for the auto-include of required files
- Now works under special circumstances for when an appendix is included to the js file, such as wordpress installations.
- Credits to Predro "ei99070" Lamas for the fix: http://plugins.jquery.com/node/1199

v1.0.0-final
* Improved Lightbox Positioning, now animates to the center of the screen
* Updated prev next images to include notation for keyboard shortcuts
* Added preloading of lightbox required images
* Added keyboard navigation notation to prev and next images
* Fixed an overlay problem with IE
* Fixed an overlay problem with Safari
* Improved padding detection
* - If the padding setting is set, then it is not auto-detected
* - Moved padding detection to later on, fixes a display issue with Konqueror 3.5. (Credits to Blueyed).
* Added some "help" text
* Cleaned file structure
* Refined licencing
* - Now uses the GNU Affero General Public License and the GNU Free Documentation License
* Added a linkback as required by the GNU Affero General Public License

v0.2.3-final
* improved packing
* - original:  35.71KB total, 25.4KB js, 4.77KB css, 5.54KB images
* - packed:    15.12KB total, 7.67KB js, 1.91KB css, 5.54KB images
* htm: fix: changed src to href in common examples
* js: fixed issue when using the same images in a lightbox group
* js/css: added lightbox-enabled css class for elements that are lightbox enabled
* sample images: reduced the amount of them, as they used up all my bandwidth!

v0.2.2-beta
* added packed files
* - original:  35.71KB total, 25.4KB js, 4.77KB css, 5.54KB images
* - packed:    20.15KB total, 12.7KB js, 1.91KB css, 5.54KB images
* js: jsLint compliance
* htm: added info for packed form

v0.2.1-beta
* index.htm: Fixed demonstration code for example "Manually create grouped lightboxes.".

v0.2.0-beta
* Greedy elements are now properly hidden
* New / Optimized Lightbox Design
* Added support for descriptions
* All new example and documentation page

v0.1.0-dev
* Initial Release

----

Special Thanks / Based upon / Inspired by / Credits to:
- Warren Krewenki's jQuery Lightbox Plugin v0.5 {@link http://jquery-lightbox.googlecode.com/}
- Leandro Vieira Pinho's jQuery Lightbox Plugin v0.4 {@link http://leandrovieira.com/projects/jquery/lightbox/}
- Lokesh Dhakar's Lightbox 2 {@link http://www.huddletogether.com/projects/lightbox2/}

----