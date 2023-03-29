import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function ListItem({ item, index }) {
  const [visible, setVisible] = useState(true);
  let items = [];

  function handleDelete(event) {
    items = JSON.parse(localStorage.getItem("Items"));
    items.splice(index, 1);
    localStorage.setItem("Items", JSON.stringify(items));
    setVisible(false);
  }

  return (
    <>
      {visible && (
        <div>
          <li>{item}</li>
          <Button
            as="input"
            type="submit"
            value="Delete"
            onClick={handleDelete}
          />
        </div>
      )}
    </>
  );
}

export default ListItem;
