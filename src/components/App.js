import React from 'react';
import { domParser } from './ComponentCompiler';

const App = (props) => {
  console.log(props);
  const content = domParser(`<div><Button label="Confirm"/></div>`);
  console.log(content);
  return (
    <>
      <h1>
        App from {props.compiler} and {props.framework}!
      </h1>
      {content}
    </>
  );
};

export default App;
// const renderedContent = ReactDOMServer.renderToString(
//   <App compiler="typescript" framework="react" />
// );

// console.log(renderedContent);
