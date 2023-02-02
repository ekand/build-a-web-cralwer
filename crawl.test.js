const { normalizeURL, getURLsFromHTML } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

test('normalize url', () => {
  expect(normalizeURL('https://wagslane.dev/path/')).toBe('wagslane.dev/path');
  expect(normalizeURL('https://wagsLane.Dev/path')).toBe('wagslane.dev/path');
  expect(normalizeURL('https://wagsLane.Dev/path')).toBe('wagslane.dev/path');
  expect(normalizeURL('http://wagslane.dev/path')).toBe('wagslane.dev/path');
  expect(normalizeURL('http://wagsLANE.DEV/PatH')).toBe('wagslane.dev/path');

});

const html1 = 
`<html>
<body>
    <a href="https://blog.boot.dev"><span>Go to Boot.dev</span></a>
</body>
</html>
`
test ('pull urls', () => {
    expect(getURLsFromHTML(html1)).toStrictEqual(['https://blog.boot.dev/'])
});