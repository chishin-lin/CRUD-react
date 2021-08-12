import { useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsCheckBox } from "react-icons/bs";

const Tdata = ({
  list,
  onDelete,

  number,
  setNumber,
  setList,
}) => {
  const [name, setName] = useState(list.name);
  const [phone, setPhone] = useState(list.phone);
  const [email, setEmail] = useState(list.email);
  console.log(list.num === number);
  return (
    <>
      {list.num === number ? (
        <tr>
          <td>{list.num}</td>
          <td>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </td>
          <td>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </td>
          <td>
            <input
              id="name"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </td>
          <td>
            <BsCheckBox
              style={{ color: "green", cursor: "pointer" }}
              onClick={() => {
                setNumber(null);
                setList((pred) =>
                  pred.map((item) => {
                    if (item.num === number) {
                      return {
                        ...item,
                        name,
                        phone,
                        email,
                      };
                    }
                    return item;
                  })
                );
                setName("");
                setPhone("");
                setEmail("");
              }}
            />
          </td>
          <td>
            <BsTrashFill
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(list.num)}
            />
          </td>
        </tr>
      ) : (
        <tr>
          <td>{list.num}</td>
          <td>{list.name}</td>
          <td>{list.phone}</td>
          <td>{list.email}</td>
          <td>
            <BsPencilSquare
              onClick={() => setNumber(list.num)}
              style={{ color: "orange", cursor: "pointer" }}
            />
          </td>
          <td>
            <BsTrashFill
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(list.num)}
            />
          </td>
        </tr>
      )}
    </>
  );
};

export default Tdata;
