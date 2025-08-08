// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />

import Student from "./Student";

function App() {

  return (
   <>
    <Student name="Kashf Abbas" age={22} isStudent={false}/>
    <Student name="Mansoor" age={23} isStudent={true}/>
    <Student name="Ali" age={24} isStudent={false}/>
    <Student name="Ahmad" age={25} isStudent={true}/>
    <Student age={19} />
   </>
  );
}

export default App
