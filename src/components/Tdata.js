import { BsTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsCheckBox } from "react-icons/bs";

const Tdata = ({ list, onDelete, num }) => {
  return (
    <tr>
      <td>{list.num}</td>
      <td>{list.name}</td>
      <td>{list.phone}</td>
      <td>{list.email}</td>
      <td>
        <BsPencilSquare style={{ color: "orange", cursor: "pointer" }} />:
        <BsCheckBox style={{ color: "green", cursor: "pointer" }} />
      </td>
      <td>
        <BsTrashFill
          style={{ color: "red", cursor: "pointer" }}
          onClick={onDelete}
        />
      </td>
    </tr>
  );
};

export default Tdata;
