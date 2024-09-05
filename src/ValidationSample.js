import React, { Component } from 'react';
import './ValidationSample.css';

/* 클래스형 컴포넌트 */
class ValidationSample extends Component {
    state = {
        password : '',
        clicked : false,
        validated : false
    }

    handleChange = (e) => {
        this.setState({
            password : e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked : true,
            validated : this.state.password === '0000'
        });
        // 5.2.3.2 버튼 onClick 이벤트 코드 수정
        this.input.focus();     // 버튼을 클릭해도 포커스는 input에
    }

    render() {
        return (
            <div>
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                    // 5.2.3.1 input에 ref 달기
                    ref={(ref) => this.input=ref}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}

export default ValidationSample;