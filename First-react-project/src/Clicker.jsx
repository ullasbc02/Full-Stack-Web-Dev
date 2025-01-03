import React, { useState } from 'react';

export function Clicker() {
    const [count, setCount] = useState(0);
    function clicked() {
        setCount(count + 1);
    }

    return (
        <>
        <p>You clicked {count} times</p>
        <button onClick={clicked}>Click me!</button>
        </>
        
        
    );
}
export default Clicker;