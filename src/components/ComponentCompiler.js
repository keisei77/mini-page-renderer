const domParser = (doc) => {
  const parser = new DOMParser();
  return parser.parseFromString(doc, 'text/xml');
};

export { domParser };
