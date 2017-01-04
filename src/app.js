import React,{ Component } from 'react'
import ReactDOM,{ render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import Counter from './components/Counter.js'
import counter from './redux/reducers.js'
import store from './redux/store.js'
import RootApp from './containers/RootApp.js'
let root=document.getElementById('app');
render(<Provider store={ store }>
    <RootApp />
</Provider> ,root);
