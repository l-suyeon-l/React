import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';    // App.js 파일을 import
import reportWebVitals from './reportWebVitals';

// ReactDOM.render : 컴포넌트를 페이지에 렌더링, react-dom 모듈을 불러와 사용할 수 있음
const root = ReactDOM.createRoot(document.getElementById('root'));    // id가 root인 요소 안에 렌더링(index.html)

// .render - 첫번째 파라미터 : 페이지에 렌더링할 내용(JSX), 두번째 파라미터 : 해당 JSX를 렌더링할 document 내부 요소 설정
root.render(                
  <React.StrictMode>
    <App />                 {/* import한 App.js의 컴포넌트 App을 사용 */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
