import { Fragment } from "react";


function ListGroup() {

  const items =[
    'New York',
    'San Fan',
    'Toykyo',
    'London',
    'Paris'
  ];


//This takes the list of 'items' and converts that into a <li> element.
// The items {} renders items dynamticlly, including the error message if nothing is found.

    return(
      <Fragment>
        <h1>Testing H1</h1>
        {items.length === 0 && <p>No items</p> }
        <ul className="list-group">
            {items.map((item) => <li className="list-group-item" key={item} onClick={(event) => console.log(event)}>{item}</li>)}
        </ul>
      </Fragment>
    );
}

export default ListGroup;
