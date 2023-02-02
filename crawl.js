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

async function crawlPage(baseURL, url, pages) {
    try {
        const response = await fetch(baseURL)
        if (response.status_code > 299) {
            console.log('error: ' + response.status_code);
            return;
        } else if (!response.headers.get('content-type').startsWith('text/html')) {
            console.log('error: ' + response.headers.get('content-type') + ' is not text/html')
        } else {
            text = await response.text()
            console.log(text)
            return
        }
    } catch (err) {
        console.log('err: ' + err)
    }

}

module.exports = {
    normalizeURL,
    getURLsFromHTML,
    crawlPage
  }