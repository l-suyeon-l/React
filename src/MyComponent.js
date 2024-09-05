/* 함수 컴포넌트 */ 
// import PropTypes from 'prop-types';

// const MyComponent = ({ name, favoriteNumber, children }) => {
//     return (
//         <div>
//             안녕하세요, 제 이름은 {name}입니다. <br />
//             children 값은 {children}
//             입니다.        
//             <br />
//             제가 좋아하는 숫자는 {favoriteNumber}입니다.
//         </div>
//     );
// };

// MyComponent.defaultProps = {
//     name: '기본 이름'
// };

// MyComponent.propTypes = {
//     name : PropTypes.string,                        // name의 값은 문자열 형태로 전달해야 함
//     favoriteNumber : PropTypes.number.isRequired    // favoriteNumber은 숫자 형태로 필수 props임
// };


/* 클래스형 컴포넌트 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        const { name, favoriteNumber, children } = this.props;  // 비구조화 할당
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br />
                children 값은 {children}
                입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name : '기본 이름'
};

MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};


/* 클래스형 컴포넌트에서 defaultProps와 propTypes를 class 내부에서 지정 */
// class MyComponent extends Component {
//     static defaultPropts = {
//         name : '기본 이름'
//     };
//     static propTypes = {
//         name : PropTypes.string,
//         favoriteNumber : PropTypes.number.isRequired
//     };
//     render() {
//         const { name, favoriteNumber, children } = this.props;  // 비구조화 할당
//         return (
//             <div>
//                 안녕하세요, 제 이름은 {name}입니다. <br />
//                 children 값은 {children}
//                 입니다.
//                 <br />
//                 제가 좋아하는 숫자는 {favoriteNumber}입니다.
//             </div>
//         )
//     }
// }

export default MyComponent;