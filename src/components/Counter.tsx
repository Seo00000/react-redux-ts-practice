import React from 'react';
import useCounter from '../hooks/useCounter';

/*
// 프리젠테이셔널/컨테이너 구조
// 해당 코드는 프리젠테이셔널 컴포넌트이다.
// https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

type CounterProps = {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onIncreaseBy: (diff: number) => void;
};
onIncreaseBy
function Counter({
    count,
    onIncrease,
    onDecrease,
    
}: CounterProps) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={() => onIncreaseBy(5)}>+5</button>
        </div>
    );
}
*/

function Counter(){
    // 필요한 함수와 값을 props로 받아오는 대신 useCounter Hook을 통해서 받아옴.
    const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={() => onIncreaseBy(5)}>+5</button>
        </div>
    );
}

export default Counter;
