import React, { useState } from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username : '',
        message : ''
    });
    const { username, message } = form;
    const onChange = e => {
        const nextForm = {

            [e.target.name] : e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username : '',
            message : ''
        });
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onclick}>확인</button>
        </div>
    )
}


export default EventPractice;


/* 클래스형 컴포넌트 */
// import React, { Component } from 'react';

// class EventPractice extends Component {
//     state = {
//         username : '',
//         message : ''
//     }

    
//     // constructor(props) {
//     //     super(props);
//     //     this.handleChange = this.handleChange.bind(this);
//     //     this.handleClick = this.handleClick.bind(this);
//     // }

//     handleChange = (e) => {           // input의 onChange에 전달될 함수
//         this.setState({
//             // message : e.target.value
//             [e.target.name] : e.target.value
//         });
//     }

//     handleClick = () => {             // button의 onClick에 전달될 함수
//         alert(this.state.username + ': ' + this.state.message);
//         this.setState({
//             username : '',
//             message : ''
//         });
//     }

//     handleKeyPress = (e) => {
//         if(e.key === 'Enter') {
//             this.handleClick();
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="사용자명"
//                     value={this.state.username}
//                     // onChange={
//                     //     (e) => {                            // 값을 입력받으면(e)
//                     //         this.setState({
//                     //             message: e.target.value     // message에 e값을 set
//                     //         })
//                     //     }
//                     // }
//                     onChange={this.handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요."
//                     value={this.state.message}
//                     // onChange={
//                     //     (e) => {                            // 값을 입력받으면(e)
//                     //         this.setState({
//                     //             message: e.target.value     // message에 e값을 set
//                     //         })
//                     //     }
//                     // }
//                     onChange={this.handleChange}
//                     onKeyPress={this.handleKeyPress}
//                 />
//                 <button 
//                     // onClick={
//                     //     () => {
//                     //         alert(this.state.message);      // onChange에서 입력받은 message 값을 alert창에
//                     //         this.setState({
//                     //             message:''                  // alert 후 message값 초기화
//                     //         });
//                     //     }
//                     // }
//                     onClick={this.handleClick}
//                 >확인</button>
//             </div>
//         );
//     }
// }


// /* 함수 컴포넌트 */
// const EventPractice = () => {
//     const [username, setUsername] = useState('');
//     const [message, setMessage] = useState('');
//     const onChangeUsername = e => setUsername(e.target.value);
//     const onChangeMessage = e => setMessage(e.target.value);
//     const onClick = () => {
//         alert(username + ': ' + message);
//         setUsername('');
//         setMessage('');
//     };
//     const onKeyPress = e => {
//         if (e.key === 'Enter') {
//             onClick();
//         }
//     };
//     return (
//         <div>
//             <h1>이벤트 연습</h1>
//             <input
//                 type="text"
//                 name="username"
//                 placeholder="사용자명"
//                 value={username}
//                 onChange={onChangeUsername}
//             />
//             <input
//                 type="text"
//                 name="message"
//                 placeholder="아무거나 입력해 보세요"
//                 value={message}
//                 onChange={onChangeMessage}
//                 onKeyPress={onKeyPress}
//             />
//             <button onClick={onClick}>확인</button>
//         </div>
//     );
// }