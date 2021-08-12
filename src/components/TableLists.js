import { useState } from "react";
import Tdata from "./Tdata";

const TableList = ({ onDelete, list, setList }) => {
  const [number, setNumber] = useState("");
  const dataList = list.map((obj) => (
    <Tdata
      key={Math.floor(Math.random() * 10000 + 1)}
      list={obj}
      onDelete={onDelete}
      // editHeandler={editHeandler}
      // edit={edit}
      number={number}
      setNumber={setNumber}
      setList={setList}
    />
  ));

  return (
    <div>
      <div class="list">
        <table>
          <thead>
            <tr>
              <th>NO.</th>
              <th>Name</th>
              <th>Phone</th>
              <th>E-mail</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {dataList}
        </table>
      </div>
    </div>
  );
};

export default TableList;
