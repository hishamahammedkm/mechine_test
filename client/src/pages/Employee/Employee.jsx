import React, { useEffect, useState } from "react";
import "./employee.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Employee = () => {
  const [employeeData, setEmployeeData] = useState({});

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/find");
        setEmployeeData(res);
      } catch (err) {
        console.log(err);
      }
    };
    getEmployee();
  }, []);

  console.log(employeeData);

  return (
    <div className="employee">
      <div className="data_container">
        <div className="wrapper">
          <div className="title">Employee</div>
          <Link className="create" exact to="/employee/create">
            Create Employee
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Sl no.</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {employeeData?.data?.map((val, index) => {
              return (
                <tr key={val.id}>
                  <td>{index + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.email}</td>
                  <td>{val.designation}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
