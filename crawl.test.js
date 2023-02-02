const { normalizeURL } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

test('normalize url', () => {
  expect(normalizeURL('https://wagslane.dev/path/')).toBe('wagslane.dev/path');
  expect(normalizeURL('https://wagsLane.Dev/path')).toBe('wagslane.dev/path');
  expect(normalizeURL('https://wagsLane.Dev/path')).toBe('wagslane.dev/path');
  expect(normalizeURL('http://wagslane.dev/path')).toBe('wagslane.dev/path');
  expect(normalizeURL('http://wagsLANE.DEV/PatH')).toBe('wagslane.dev/path');

});
