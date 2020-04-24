let isNode = false;
if (typeof process === 'object') {
  if (typeof process.versions === 'object') {
    if (typeof process.versions.node !== 'undefined') {
      isNode = true;
    }
  }
}

const domParser = (doc) => {
  // TODO: Node server compatible
  if (isNode) {
    // const jsdom = require('jsdom');
    // const { JSDOM } = jsdom;
    // return new JSDOM(doc, {
    //   contentType: 'text/xml',
    // });
  } else {
    const parser = new DOMParser();
    const content = parser.parseFromString(doc, 'text/xml');
    console.log(content);
    return content;
  }
};

export { domParser };
