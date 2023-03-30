import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function ListItem({ item, index, setItems }) {
  const [visible, setVisible] = useState(true);
  let itemList = [];

  function handleDelete(event) {
    itemList = JSON.parse(localStorage.getItem("Items"));
    itemList.splice(index, 1);
    localStorage.setItem("Items", JSON.stringify(itemList));
    setItems(itemList);
  }

  return (
    <>
      {visible && (
        <div className="d-flex">
          <li className="d-flex text-nowrap">{item}</li>
          <Button
            as="input"
            type="submit"
            value="Delete"
            onClick={handleDelete}
            className="ms-3"
          />
        </div>
      )}
    </>
  );
}

export default ListItem;
