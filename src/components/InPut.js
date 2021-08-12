import { useState } from "react";

const InPut = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("請輸入名字");
      return;
    }

    onAdd({ name, phone, email });

    setName("");
    setPhone("");
    setEmail("");
  };
  return (
    <div className="inputForm">
      <form onSubmit={onSubmit}>
        <label htmlFor="name">姓名:</label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label htmlFor="phone">電話:</label>

        <input
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br></br>
        <label htmlFor="email">信箱:</label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <button id="submit" type="sunmit">
          提交
        </button>
      </form>
    </div>
  );
};

export default InPut;
