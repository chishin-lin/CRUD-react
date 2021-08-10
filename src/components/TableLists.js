import Tdata from "./Tdata";

const TableList = ({ onDelete, list, num }) => {
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
          {list.map((list) => (
            <Tdata key={num} list={list} onDelete={onDelete} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default TableList;
