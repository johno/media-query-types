var assert = require('assert');
var mediaQueryTypes = require('..');

describe('media-query-types', function() {

  it('should return the correct array', function() {
    assert.deepEqual(
      mediaQueryTypes(),
      [
        'all', 'braille', 'embossed', 'handheld', 'print', 'projection', 'screen',
        'speech', 'tty', 'tv'
      ]
    );
  });

  it('should include css4 types when css4: true is specified', function() {
    assert.deepEqual(
      mediaQueryTypes({ css4: true }),
      [
        'all', 'braille', 'embossed', 'handheld', 'print', 'projection', 'screen',
        'speech', 'tty', 'tv', 'pointer', 'hover', 'block-overflow'
      ]
    );
  });
});
