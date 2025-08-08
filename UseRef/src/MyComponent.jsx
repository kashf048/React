// useState() = Re-renders the component when the state value changes.

import { useRef } from "react";
import { useEffect } from "react"
import { useState } from "react"

// useRef()   = "use Reference" Does not cause re-renders when its value changes.
//              When you want a component to "remember" some information,
//              but you don't want that information to trigger new renders.

//              1. Accessing/Interacting with DOM elements
//              2. Handling Focus, Animations, and Transitions
//              3. Managing Timers and Intervals

function MyComponent() {

    // let [number, setNumber] = useState(0)

    // const ref = useRef("pizza")
    // const inputRef = useRef(null)
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    const [input1Focus, setInput1Focus] = useState(false)
    const [input2Focus, setInput2Focus] = useState(false)
    const [input3Focus, setInput3Focus] = useState(false)

    function handleButtonClick(inputNumber) {
        setInput1Focus(inputNumber == 1)
        setInput2Focus(inputNumber == 2)
        setInput3Focus(inputNumber == 3)
    }

    useEffect(() => {
        console.log("COMPONENT RENDERED")
        // console.log(inputRef)
    });

    function handleClick1() {
        // setNumber(n => n + 1)
        // ref.current++;
        // console.log(ref.current)
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2() {
        inputRef2.current.focus()
        inputRef2.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3() {
        inputRef3.current.focus()
        inputRef3.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return(
        <div>
            {/* <button onClick={handleClick1}> */}
            <button onClick={() => handleButtonClick(1)}>
                Click me 1!
            </button>
            <input ref={inputRef1}/>

            <button  onClick={() => handleButtonClick(2)}>
                Click me 2!
            </button>
            <input ref={inputRef2}/>

            <button  onClick={() => handleButtonClick(3)}>
                Click me 3!
            </button>
            <input ref={inputRef3}/>
        </div>
    )
}

export default MyComponent