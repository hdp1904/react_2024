import React, { useState } from "react";

export default function SelectAll() {
  const [items, setItems] = useState([
    { id: 1, selected: true, name: "Kosher" },
    { id: 2, selected: false, name: "No Celery (inc celeric)" },
    { id: 3, selected: false, name: "No Egg" },
  ]);

  const isAllSelected = items.every((item) => item.selected);

  const handleCheck = (id) => {
    const newItems = items.map((item) => {
      return item.id === id
        ? {
            ...item,
            selected: !item.selected,
          }
        : item;
    });
    setItems(newItems);
  };

  const handleCheckAll = () => {
    setItems((prev) =>
      prev.map((item) => {
        return { ...item, selected: !isAllSelected };
      })
    );

    // if (isAllSelected) {
    //   setItems((prev) =>
    //     prev.map((item) => {
    //       return { ...item, selected: false };
    //     })
    //   );
    // } else {
    //   setItems((prev) =>
    //     prev.map((item) => {
    //       return { ...item, selected: true };
    //     })
    //   );
    // }
  };

  return (
    <div>
      <h2>Select All Project</h2>
      <div>
        Select values:
        {items
          .filter((item) => item.selected)
          .map((item) => (
            <span key={item.id}>{item.name}</span>
          ))}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isAllSelected}
            onChange={handleCheckAll}
          />
          <span>Select All</span>
        </label>
        {items.map((item) => {
          const { id, selected, name } = item;
          return (
            <div key={id}>
              <label>
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => handleCheck(id)}
                />
                <span>{name}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
