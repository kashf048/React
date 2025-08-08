import ComponentD from "./ComponentD"
import React, { useContext } from "react"
import { UserContext } from "./ComponentA"

// function ComponentC(props) {
function ComponentC() {

    const user = useContext(UserContext)
    
    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Hello again ${user}`}</h2>
            {/* <ComponentD user={props.user} /> */}
            <ComponentD />
        </div>
    )
}
export default ComponentC