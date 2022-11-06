import React, { useState } from "react";
import Form from "react-bootstrap/Form";
function FormContainer({ addTrasaction }) {
  const [formValue, setFormValue] = useState({
      type: "",
      amount: "",
      desc: ""
  });
  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTrasaction(formValue);
  };
  return (
    <Form onSubmit={submitHandler}>
      <input
        name={"amount"}
        value={formValue.amount}
        type={"number"}
        placeholder={"Amount"}
        onChange={changeHandler}
      />
      <input
        name={"desc"}
        value={formValue.desc}
        onChange={changeHandler}
        type={"text"}
        placeholder={"Description"}
      />
      <input
        type={"radio"}
        checked={formValue.type === "expense"}
        value={"expense"}
        name={"type"}
        onChange={changeHandler}
      />
      <label>Expense</label>
      <input
        type={"radio"}
        checked={formValue.type === "income"}
        value={"income"}
        name={"type"}
        onChange={changeHandler}
      />
      <label>Income</label>
      <button type={"submit"} className={"btn-add"}>
        Add Transaction
      </button>
    </Form>
  );
}

export default FormContainer;
