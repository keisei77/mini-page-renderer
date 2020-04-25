import React from 'react';
import JsxParser from 'react-jsx-parser';
import { getAllComponents } from '../helper/componentRegistry';

let isNode = false;
if (typeof process === 'object') {
  if (typeof process.versions === 'object') {
    if (typeof process.versions.node !== 'undefined') {
      isNode = true;
    }
  }
}

const domParser = (doc) => {
  if (isNode) {
  } else {
    return <JsxParser components={getAllComponents()} jsx={doc} />;
  }
};

export { domParser };
