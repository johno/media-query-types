import test from 'ava'
import mediaQueryTypes from './'

test('returns the correct array', t => {
  t.plan(1)

  t.same(
    mediaQueryTypes(),
    [
      'all', 'braille', 'embossed', 'handheld', 'print', 'projection', 'screen',
      'speech', 'tty', 'tv', 'pointer', 'hover', 'block-overflow'
    ]
  )
})

test('includes css4 types when css4: true is specified', t => {
  t.plan(1)

  t.same(
    mediaQueryTypes({ skipCssnext: true }),
    [
      'all', 'braille', 'embossed', 'handheld', 'print', 'projection', 'screen',
      'speech', 'tty', 'tv'
    ]
  )
})
