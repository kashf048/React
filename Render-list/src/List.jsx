import PropTypes from 'prop-types'

function List(props) {

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item =>  <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>)

    // const fruits = ["apple", "orange", "mango", "banana", "pineapple", "coconut"];

    // const fruits = [{id: 1, name: "apple", calories: 52},
    //                 {id: 2, name: "mango", calories: 60},
    //                 {id: 3, name: "banana", calories: 105},
    //                 {id: 4, name: "pineapple", calories: 50},
    //                 {id: 5, name: "coconut", calories: 354}];

    // fruits.sort();
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); // NUMERIC
    // fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const HighCalFruits = fruits.filter(fruit => fruit.calories > 100);

    // const listItems = fruits.map(fruit => <li>{fruit}</li> )
    // const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;<b>{fruit.calories}</b></li> )
    // const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp;<b>{lowCalFruit.calories}</b></li> )
    // const listItems = HighCalFruits.map(HighCalFruit => <li key={HighCalFruit.id}>{HighCalFruit.name}: &nbsp;<b>{HighCalFruit.calories}</b></li> )

    // return(<il>{listItems}</il>);
    // return(<ol>{listItems}</ol>);

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    )
};

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number})),
}

List.defaultProps = {
    category: "Category",
    item: [],
}

export default List