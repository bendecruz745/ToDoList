import React from "react";
import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import { Button } from "react-bootstrap";

function Main() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(() => {
    if (localStorage.getItem("Items")) {
      return JSON.parse(localStorage.getItem("Items"));
    } else {
      return [];
    }
  });
  let item = "";

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue) {
      item = inputValue;
      setItems([...items, item]);
    }
    setInputValue("");
  }

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="p-5 text-center">
      <h1 className="mb-3">To Do:</h1>
      <ul>
        {items.length ? (
          items.map((item, index) => (
            <ListItem item={item} key={index} index={index} />
          ))
        ) : (
          <p>No items to display</p>
        )}
      </ul>
      <input
        id="ListInput"
        type="text"
        value={inputValue}
        placeholder="Type in something"
        onChange={handleInputChange}
      ></input>
      <Button as="input" type="submit" value="Submit" onClick={handleSubmit} />
    </div>
  );
}

export default Main;
