// import { MouseEvent } from "react";

import { useState } from "react";

//interface is definding the shape and interface of an object
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //   items = [];

  // let selectedIndex = 0;
  // we should tell the app that it is going to have data or state that might change over the app
  // HOOK
  const [selectedIndex, setSelctedIndex] = useState(-1);
  // const [name, setName] = useState('');
  //first one variable (selectedIndex)
  //second one updater function

  // Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  //   const message = items.length === 0 ? <p>No item found</p> : null;

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null
  //     //whenever you have many kind of message you should use this method
  //   }
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //       </>
  //     );

  //map mapping or converting each item to an item of a different type
  return (
    <>
      <h1>{heading}</h1>
      {/* { items.length === 0 && <p>No item found</p>} */}
      {items.length === 0 ? <p>No item found</p> : null}
      {/* {getMessage()} or {message} */}
      {/* null = nothing will be render */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            //   onClick={ handleClick }
            onClick={() => {
              setSelctedIndex(index);
              onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
