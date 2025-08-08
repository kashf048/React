import { useState } from "react"
import ComponentB from "./ComponentB.jsx"
import { createContext } from "react"

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Kashf Abbas")

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user} />
            </UserContext.Provider> 
            {/* And remove all props and props.user in ComponentB, C, D */}
        </div>
    )
}
export default ComponentA