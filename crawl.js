function normalizeURL(string) {
    if (string.slice(-1) === '/') {
        string = string.slice(0, -1)
    }
    const urlObject = new URL(string);
    let normalizedPathName = urlObject.pathname.toLowerCase();
    return urlObject.host.toLowerCase() + normalizedPathName
}

module.exports = {
    normalizeURL
  }