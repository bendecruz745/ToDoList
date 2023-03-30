import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function ListItem({ item, index, setItems }) {
  function handleDelete(event) {
    let itemList = JSON.parse(localStorage.getItem("Items"));
    localStorage.setItem("Items", JSON.stringify(itemList.splice(index, 1)));
    setItems(itemList);
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
