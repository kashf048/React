import List from "./List"

function App() {

  const fruits = [{id: 1, name: "apple", calories: "apple"},
                  {id: 2, name: "mango", calories: 60},
                  {id: 3, name: "banana", calories: 105},
                  {id: 4, name: "pineapple", calories: 50},
                  {id: 5, name: "coconut", calories: 354}];

    const vegetables = [{id: 6, name: "potatoes", calories: 120},
                        {id: 7, name: "spanish", calories: 23},
                        {id: 8, name: "tomato", calories: 22},
                        {id: 9, name: "onion", calories: 40},
                        {id: 10, name: "cucumber", calories: 16}];

  return (
    <>
    {/* <List /> */}
    {/* {fruits.length > 0 && <List items={fruits} category="Fruits"/>} */}
    {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
    {fruits.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
  )
}

export default App
