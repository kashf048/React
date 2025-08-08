import { useState } from "react";

function MyComponent() {

    const [car, setCar] = useState({year: 2024, 
                                    make: "Ford", 
                                    model: "Mustang"});

    function handleYearChange(e) {
        // setCar({...car, year: e.target.value})
        setCar(c => ({...c, year: e.target.value}))
    }

    function handleMakeChange(e) {
        setCar(c => ({...c, make: e.target.value}))

    }

    function handleModelChange(e) {
        setCar(c => ({...c, model: e.target.value}))        
    }

    return(<>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange} />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <input type="text" value={car.model} onChange={handleModelChange} />
    </>);
}
export default MyComponent