
// updater function = A function passed as an argument to setState() usually
//                    ex. setYear (year + 1)
//                    Allow for safe updates based on the previous state
//                    Used with muultiple state updates and asynchronous functions
//                    Good practice to use updater functions

import { useState } from "react";

function MyComponent() {

    const [count, setCount] = useState(0);

    // Uses the CURRENT state to calculate the NEXT state.
    // set functions do not trigger an update.
    // React batches together state updates for performance reasons.
    // NEXT state becomes the CURRENT state after an update.
    // function increment() {
    //     setCount(count + 1)
    //     setCount(count + 1)
    //     setCount(count + 1)
    // }

    // Takes the PENDING state to calculate NEXT state.
    // React puts your updater function in a queue (waiting in line)
    // During the next render, it will call them in the same order.
    function increment() {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0)
    }

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </>
    );
}
export default MyComponent