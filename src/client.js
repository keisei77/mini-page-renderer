import React from 'react';
import App from './components/app';
import { hydrate } from 'react-dom';

// Read the state sent with markup
const state = window.__STATE__;

// delete the state from global window object
delete window.__STATE__;

hydrate(<App {...state} />, document.querySelector('#app'));
