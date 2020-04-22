const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');
import App from './components/App';

const { renderToString } = ReactDOMServer;

module.exports = function render(props) {
  const content = renderToString(<App {...props} />);
  console.log(content);
  return {
    content,
  };
};
