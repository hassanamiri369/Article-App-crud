import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ArticleProvider from "./context/context"


ReactDOM.render(
 
    <ArticleProvider>
      <App />
    </ArticleProvider>
  
    
  ,
  document.getElementById('root')
);

