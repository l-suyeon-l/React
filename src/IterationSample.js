import React, { useState } from 'react';

/* 함수형 컴포넌트 */
const IterationSample = () => {
    const [names, setNames] = useState([            // 데이터 배열
        { id : 1, text : '눈사람' },
        { id : 2, text : '얼음' },
        { id : 3, text : '눈' },
        { id : 4, text : '바람' }
    ]);
    const [inputText, setInputText] = useState(''); // 텍스트를 입력할 수 있는 input
    const [nextId, setNextId] = useState(5);        // 새로운 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id : nextId,        // nextId 값을 id로 설정
            text : inputText
        });
        setNextId(nextId + 1);  // nextId 값에 1 더하기
        setNames(nextNames);    // names 값 업데이트
        setInputText('');       // inputText 비우기
    }

    const namesList = names.map(name => <li key={ name.id }>{name.text}</li>);
    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
    );
}

export default IterationSample;