function Button() {

    const handleClick = () => console.log("OUCH!");

    const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    let count = 0;
    const handleClick3 = (name) => {
        if(count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        } else {
            console.log(`${name} stop clicking me!`);
        }
    };

    const handleClick4 = (e) => console.log(e);

    const handleClick5 = (e) => e.target.textContent = "OUCH! 🥵";

    return(
        <>
            {/* <button onClick={handleClick}>Click me 😅</button>    // CTRL + SHIFT + P select emoji */}
            {/* <button onClick={() => handleClick2("Kashf")}>Click me 😅</button> */}
            {/* <button onClick={() => handleClick3("Kashf")}>Click me 😅</button> */}
            <button onDoubleClick={(e) => handleClick5(e)}>Click me 😅</button>
        </>
        
    );
}

export default Button