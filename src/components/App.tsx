import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

export interface AppProps {
  compiler: string;
  framework: string;
}

export const App = (props: AppProps) => (
  <h1>
    App from {props.compiler} and {props.framework}!
  </h1>
);

const renderedContent = ReactDOMServer.renderToString(
  <App compiler="typescript" framework="react" />
);

console.log(renderedContent);
