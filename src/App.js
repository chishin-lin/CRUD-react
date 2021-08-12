import React from "react";
import Form from "./components/Form";
import TableList from "./components/TableLists";
import { useState } from "react";
import "./styles/style.css";

const App = () => {
  const [list, setList] = useState([]);
  const [num, setNum] = useState(1);
  const [edit, setEdit] = useState(false);

  const onAdd = (data) => {
    const newData = { num, ...data };
    setList([...list, newData]);
    setNum(num + 1); //no.製作
  };

  //delete
  const deleteList = (num) => {
    setList(list.filter((list) => list.num !== num));
  };

  //edit
  // const editData = (num) => {
  //   if (list.num === num) {
  //     setEdit(!edit);
  //   }
  // };

  return (
    <div className="border">
      <Form onAdd={onAdd} />
      <TableList
        list={list}
        onDelete={deleteList}
        // editHeandler={editData}
        // edit={edit}
        setList={setList}
      />
    </div>
  );
};

export default App;
