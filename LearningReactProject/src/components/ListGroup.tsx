import { Fragment } from "react";


function ListGroup() {

  const items =[
    'New York',
    'San Fan',
    'Toykyo',
    'London',
    'Paris'
  ];

  const getMessage = () =>{
    return items.length === 0 ? <p>No Items Found</p> : null;;
  }

//This takes the list of 'items' and converts that into a <li> element.
    return(
      <Fragment>
        <h1>Testing H1</h1>
        {getMessage()}
        <ul className="list-group">
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
      </Fragment>
    );
}

export default ListGroup;
