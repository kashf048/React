// React hook = Speacial function that allows functinal components
//              to use React features without writing class components (React, v18.3)
//              (useState, useEffect, useContext, useReducer, useCallback, and more...)

// useState() = A React hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the Virtual DOM.
//              [name, setName]

import Counter from "./Counter"
import MyComponent from "./MyComponent"

function App() {

  return (
    <>
      <Counter />
      <MyComponent /> 
    </> 
  )
}

export default App
