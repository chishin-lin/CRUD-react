import React from "react";
import Form from "./components/Form";
import TableList from "./components/TableLists";
import { useState } from "react";
import "./styles/style.css";

const App = () => {
  const [list, setList] = useState([]);
  const [num, setNum] = useState(1);
  const onAdd = (data) => {
    const newData = { num, ...data };
    setList([...list, newData]);
    setNum(num + 1);
  };

  //delete區
  const deleteList = (e) => {
    console.log(e);
  };
  return (
    <div className="border">
      <Form onAdd={onAdd} />
      <TableList num={num} list={list} onDelete={deleteList} />
    </div>
  );
};

export default App;
