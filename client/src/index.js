// const react = require('react');
import React from 'react';
import App from './app';

const reactDom = require('react-dom');

reactDom.render (
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.getElementById("root")
);