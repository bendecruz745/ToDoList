import React from "react";
import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import { Button } from "react-bootstrap";

function Main() {
  const [inputValue, setInputValue] = useState(""); // Text box input value, standard setup for React
  const [items, setItems] = useState(() => {
    if (localStorage.getItem("Items")) {
      return JSON.parse(localStorage.getItem("Items")); // Loading list from Local Storage if it exists, setting it as initial state
    } else {
      return []; // Returning a blank array if none
    }
  });

  const handleSubmit = () => {
    if (inputValue) {
      setItems([...items, inputValue]); // Add new item entered from text box into item array, updating the state
    }
    setInputValue(""); // Clear text box of any value to show placeholder text again
  };

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(items)); // Triggers the saving of list to local storage if the item array updates
  }, [items]);

  return (
    <div className="text-center">
      <h1 className="mb-3">To Do:</h1>
      <ul className="d-flex flex-column">
        {items.length ? (
          items.map((item, index) => (
            <ListItem
              setItems={setItems}
              item={item}
              key={index}
              index={index}
            />
          ))
        ) : (
          <p>No items to display</p>
        )}{" "}
        {/*If items has items, render component for each item in list, else no items to display */}
      </ul>
      <input
        id="ListInput"
        type="text"
        value={inputValue}
        placeholder="Type in something"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSubmit(event);
          }
        }}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        className="mt-3"
      ></input>
      <Button
        as="input"
        type="submit"
        value="Submit"
        onClick={handleSubmit}
        className="ms-3"
      />
    </div>
  );
}

export default Main;
