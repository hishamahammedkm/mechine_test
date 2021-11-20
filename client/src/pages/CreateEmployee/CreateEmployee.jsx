import React, { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import "./createEmployee.css";
import axios from "axios";
// import { useHistory } from "react-router-dom";

const CreateEmployee = () => {
  //   const history = useHistory();

  const [values, setValues] = useState({
    name: "",
    age: "",
    email: "",
    designation: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      label: "Name",
      autocomplete: "off",
    },
    {
      id: 2,
      name: "age",
      type: "text",
      placeholder: "Age",
      label: "Age",
      autocomplete: "off",
    },
    {
      id: 3,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
      autocomplete: "off",
    },
    {
      id: 4,
      name: "designation",
      type: "text",
      placeholder: "Designation",
      label: "Designation",
      autocomplete: "off",
    },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      await axios.post("http://localhost:8000/api/employee", values);

      //   history.push("/employee");
    } catch (err) {}
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="employee_container">
      <form onSubmit={handleSubmit}>
        <h1>Add Employee</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateEmployee;
