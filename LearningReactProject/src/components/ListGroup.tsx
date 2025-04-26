import { Fragment, useState } from "react";


function ListGroup() {

  let items =[
    'New York',
    'San Fan',
    'Toykyo',
    'London',
    'Paris'
  ];

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);


//This takes the list of 'items' and converts that into a <li> element.
// The items {} renders items dynamticlly, including the error message if nothing is found.

    return(
        <Fragment>
          <h1>Testing H1</h1>
          {items.length === 0 && <p>No items</p>}
          <ul className="list-group">
            {items.map((item, index) => ( // Look here! We're getting the index
              <li
                className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                key={item}
                onClick={() => {setSelectedIndex(index)}}
              >
                {item}
              </li>
            ))}
          </ul>
        </Fragment>
      );
}

export default ListGroup;
