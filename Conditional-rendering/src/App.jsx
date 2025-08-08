// conditional rendering = allows you to control what gets renderd
//                         in your application based on certain condition
//                         (show, hide, or change components)

import UserGreeting from "./UserGreeting"

function App() {

  return (
    <>
      <UserGreeting isLoggedIn={false}  />
      <UserGreeting isLoggedIn={true} username="Kashf" />
      <UserGreeting isLoggedIn={false} username="Hassan" />
      <UserGreeting isLoggedIn={true} username="Ali" />
    </>
  )
}

export default App
