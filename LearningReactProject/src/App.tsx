/*
import ListGroup from "./components/ListGroup";
//import Message from './Message'

function App() {
  let items =[
    'New York',
    'San Fan',
    'Toykyo',
    'London',
    'Paris'
  ];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItem}></ListGroup>
    </div>
  );
}

export default App;
*/

import Alert from "./components/Alert";

function App(){
  return(
    <div>
      <Alert text="Hello World"></Alert>
    </div>
  )
};


export default App;