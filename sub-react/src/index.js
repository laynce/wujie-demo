import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



if (window.__POWERED_BY_WUJIE__) {
  let root = null
  window.__WUJIE_MOUNT = () => {
      console.log(89888)
    root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
  };
  window.__WUJIE_UNMOUNT = () => {
    root.unmount()
    console.log(root, 9999)
  };
} else {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );  
}