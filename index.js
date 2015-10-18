'use strict'

module.exports = function mediaQueryTypes(options) {
  options = options || {}

  var mediaQueryTypes = [
    'all', 'braille', 'embossed', 'handheld', 'print', 'projection', 'screen',
    'speech', 'tty', 'tv'
  ]

  var cssnextMediaQueryTypes = ['pointer', 'hover', 'block-overflow']

  return options.skipCssnext ?
    mediaQueryTypes :
    mediaQueryTypes.concat(cssnextMediaQueryTypes)
}
