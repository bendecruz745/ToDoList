import React from "react";
import { Button } from "react-bootstrap";

function ListItem({ item, index, setItems }) {
  function handleDelete(event) {
    let itemList = JSON.parse(localStorage.getItem("Items"));
    localStorage.setItem("Items", JSON.stringify(itemList.splice(index, 1))); // Saving over local storage list with new list of items
    setItems(itemList); // set item list state to new list
  }

  return (
    <div className="d-flex">
      <li className="d-flex">{item}</li>
      <Button
        as="input"
        type="submit"
        value="Delete"
        onClick={handleDelete}
        className="ms-3"
      />
    </div>
  );
}

export default ListItem;
