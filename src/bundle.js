import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import { registerAll } from './helper/componentRegistry';
registerAll();
render(<App />, document.querySelector('#app'));
