import { createContext, useState } from 'react';
/* import { useState } from 'react'; */

import Display from './Display/Display';
import ButtonPlus from './ButtonPlus/ButtonPlus';
import ButtonMinus from './ButtonMinus/ButtonMinus';

const INITIAL_STATE = 0
export const CountContext = createContext<number>(INITIAL_STATE);
export SetCountContext = createContext<React.Dispatch<React.SetStateAction<number>> | null>(null);

export const Counter = () => {
    const [count, setCount] = useState(INITIAL_STATE);

    return (
        <>
            <SetCountContext.Provider value={setCount}>  
            <ButtonPlus setCount={setCount} />
            <Display/>
            <ButtonMinus setCount={setCount} />
            </SetCountContext.Provider>
        </>
    );
}

export default Counter;
