// import logo from "./logo.svg";
// import { Fragment } from "react";
import "./App.css";                             // App.css

import MyComponent from "./MyComponent";        // MyComponent.js
import Counter from './Counter';                // Counter.js
import Say from './Say';                        // Say.js
import EventPractice from './EventPractice';    // EventPractice.js
import React, { Component } from 'react';
import ValidationSample from './ValidationSample';  // ValidationSample.js
import ScrollBox from './ScrollBox';                // ScrollBox.js
import IterationSample from './IterationSample'     // IterationSample.js

// class App extends Component {
//     render() {
//         return (
//             <IterationSample />
//         );
//     }
// }


/* 1강, 2강 */
// [1] 함수 컴포넌트 App 생성
// function App() {
//   const name = "리액트";
//   // 인라인 스타일링
//   // const style = {
//   //   // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성
//   //   backgroundColor : 'black',
//   //   color : 'aqua',
//   //   fontSize : '48px',
//   //   fontWeight : 'bold',
//   //   padding : 16
//   // };
//   return (
//     <>
//       {/*주석은 이렇게 작성합니다 */}
//       <div className="react">{name}</div>
//       <input />
//     </>
//   );
// }

/* 3강 */
// [2] 클래스형 컴포넌트 App 생성
// 장점 : state기능, 라이프사이클 기능 사용 가능, 임의 메서드 정의 가능
// import React, { Component } from 'react';

// class App extends Component {
//     render() {
//       const name = 'REACT';
//       return <div className="react">{name} </div>;
//     }
// }

// [3] props
// const App = () => {
//   return <MyComponent name="REACT" favoriteNumber={10}>리액트</MyComponent>;
// };

// [4] state
// const App = () => {
//     return <Counter />;
// };

// [5] useState
// const App = () => {
//     return <Say />;
// };


/* 4강 */
// [6] Event
const App = () => {
    return <EventPractice />;
};


/* 5강 */
// [7] DOM에 ref 사용 : 컴포넌트 파일에 ref 사용되어 있음
// class App extends Component {
//     render() {
//         return (
//             <ValidationSample />
//         );
//     }
// }

// [8] 컴포넌트에 ref 사용 : 현재 파일에 ref 사용되어 있음
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <ScrollBox ref={(ref) => this.scrollBox=ref}/>
//                 <button onClick={() => this.scrollBox.scrollToBottom()}>
//                     맨 밑으로
//                 </button>
//             </div>
//         );
//     }
// }

export default App;