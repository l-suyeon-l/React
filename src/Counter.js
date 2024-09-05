import React, { Component } from 'react';

class Counter extends Component {
    // /* 컴포넌트에 state를 설정할 때에는 constructor 메서드를 작성하여 설정 */
    // constructor(props) {            // 컴포넌트 생성자 메서드
    //     super(props);               // constructor을 작성할 때에는 반드시 super(props) 호출
    //     // state의 초깃값 설정하기(객체 형식)
    //     this.state = {
    //         number : 0,
    //         fixedNumber : 0
    //     };
    // }

    /* constructor 메서드를 선언하지 않고도 state 초깃값 설정 */
    state = {
        number : 0,
        fixedNumber : 0
    };

    render() {
        const { number, fixedNumber } = this.state;  // 현재 state를 조회할 때는 this.state로 조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                    // onClick 값을 props로 넣음 - 클릭될 때 호출시킬 함수 설정 가능(이벤트 설정)
                    onClick={() => {
                        /* 1. this.setState : state에 새로운 값 업데이트 */
                        // this.setState({ number : number + 1 });

                        /* 2. this.setState의 인자에 함수 대입 */
                        // this.setState(prevState => {
                        //     return {
                        //         number : prevState.number +1
                        //     };
                        // });
                        
                        /* 3. 함수에서 객체 바로 반환 : const sum = (a, b) => a + b;*/
                        // this.setState(prevState => ({
                        //     number : prevState.number + 1
                        // }));
                        
                        /* number 업데이트 후 특정 작업을 하고 싶을 때는 setState의 두번째 파라미터에 콜백 함수 등록 */
                        this.setState(
                            {
                                number : number + 1
                            },
                            // 콜백 함수(callback)
                            () => {
                                console.log('방금 setState가 호출되었습니다.');
                                console.log(this.state);
                            }
                        );
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;