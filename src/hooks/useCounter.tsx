import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy } from '../modules/counter';
import { useCallback } from 'react';

export default function useCounter(){
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    const onIncreaseBy = useCallback((diff: number) => dispatch(increaseBy(diff)), [dispatch]);

    return {
        count,
        onIncrease,
        onDecrease,
        onIncreaseBy
    };

}

// 프리젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 따로 분리하지 않고 쓰는 코드
// "Hooks let me do the same thing without an arbitrary division". (https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#99d5)
// (번역) Hooks 를 사용하여 (컴포넌트를) 임의적으로 분리하지 않아도 똑같은 작업을 할 수 있다.