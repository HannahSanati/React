import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Button from "./components/btn";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [alert, nonAlert] = useState(false);

  return (
    <div>
      {alert && <Alert onClose={() => nonAlert(false)}>my alert</Alert>}
      <Button color="secondary" onClick={() => nonAlert(true)}>
        this is children
      </Button>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
