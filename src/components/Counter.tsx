import React from 'react';

type CounterProps = {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onIncreaseBy: (diff: number) => void;
};

function Counter({
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy
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

export default Counter;

// 프리젠테이셔널/컨테이너 구조
// 해당 코드는 프리젠테이셔널 컴포넌트이다.
// https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0