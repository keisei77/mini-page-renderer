import React from 'react';
import App from './components/app';
import { hydrate } from 'react-dom';
import { registerAll } from './helper/componentRegistry';

// Read the state sent with markup
const state = window.__STATE__;

// delete the state from global window object
delete window.__STATE__;
registerAll();
hydrate(<App {...state} />, document.querySelector('#app'));
