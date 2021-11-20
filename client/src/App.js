import { Route, Routes } from "react-router-dom";
import "./App.css";
import Employee from "./pages/Employee/Employee";
import Home from "./pages/Home/Home";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employee/create" element={<CreateEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
