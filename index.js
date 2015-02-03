'use strict';

module.exports = function mediaQueryTypes(options) {
  options = options || {};

  var mediaQueryTypes = [
    'all', 'braille', 'embossed', 'handheld', 'print', 'projection', 'screen',
    'speech', 'tty', 'tv'
  ];

  var css4MediaQueryTypes = ['pointer', 'hover', 'block-overflow'];

  return options.css4 ?
    mediaQueryTypes.concat(css4MediaQueryTypes) :
    mediaQueryTypes;
}
