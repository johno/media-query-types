var assert = require('assert');
var mediaQueryTypes = require('..');

describe('media-query-types', function() {

  it('should do something awesome', function() {
    assert.deepEqual(mediaQueryTypes(), ['all', 'braille', 'embossed', 'handheld', 'print', 'projection', 'screen', 'speech', 'tty', 'tv']);
  });
});
