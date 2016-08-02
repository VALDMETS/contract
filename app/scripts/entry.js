import React from 'react';
import ReactDOM from 'react-dom';
import router from './components/router';

location.hash = '/main';
ReactDOM.render(router, document.getElementById('container'));
