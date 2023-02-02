const { JSDOM } = require('jsdom')


function normalizeURL(string) {
    if (string.slice(-1) === '/') {
        string = string.slice(0, -1)
    }
    const urlObject = new URL(string);
    let normalizedPathName = urlObject.pathname.toLowerCase();
    return urlObject.host.toLowerCase() + normalizedPathName
}

function getURLsFromHTML(htmlBody, baseURL) {
    let dom = new JSDOM(htmlBody)
    let a_selector = dom.window.document.querySelectorAll('a')
    let parsed_links = []
    for (let a of a_selector) {
        console.log(a.href)
        parsed_links.push(a.href)
    }
    return parsed_links

}

module.exports = {
    normalizeURL,
    getURLsFromHTML
  }