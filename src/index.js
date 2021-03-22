import {App} from './App';      //not a default export
import ReactDOM from 'react-dom';
import React from 'react';
ReactDOM.render(    //render function from react-dom
  <App/>,           //calling App()
  document.getElementById('root')   //App is at root level
)