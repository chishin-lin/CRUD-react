import { BsTrashFill } from "react-icons/bs";
import { BsCheckBox } from "react-icons/bs";

const Tedit = ({ list, onDelete, onEdit }) => {
  return (
    <tr>
      <td>{list.num}</td>
      <td>
        <input id="name" type="text" value={list.name} />
      </td>
      <td>
        <input id="phone" type="text" value={list.phone} />
      </td>
      <td>
        <input id="name" type="email" value={list.email} />
      </td>
      <td>
        <BsCheckBox
          style={{ color: "green", cursor: "pointer" }}
          onEdit={() => onEdit(list.num)}
        />
      </td>
      <td>
        <BsTrashFill
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(list.num)}
        />
      </td>
    </tr>
  );
};

export default Tedit;
