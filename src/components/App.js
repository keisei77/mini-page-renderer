import React from 'react';
// import ReactDOMServer from 'react-dom/server';

export const App = (props) => {
  console.log(props);
  return (
    <h1>
      App from {props.compiler} and {props.framework}!
    </h1>
  );
};

// const renderedContent = ReactDOMServer.renderToString(
//   <App compiler="typescript" framework="react" />
// );

// console.log(renderedContent);
