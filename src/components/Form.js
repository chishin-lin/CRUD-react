import InPut from "./InPut";

const Form = ({ onAdd }) => {
  return (
    <div className="topForm">
      <h1>新增人員</h1>
      <InPut onAdd={onAdd} />
    </div>
  );
};

export default Form;
