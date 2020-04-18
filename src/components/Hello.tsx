import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);

const renderedContent = ReactDOMServer.renderToString(
  <Hello compiler="typescript" framework="react" />
);

console.log(renderedContent);
