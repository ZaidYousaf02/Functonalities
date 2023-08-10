import "./Assets/styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Login from "./view/Login";
import Signup from "./view/Signup";
import DashboardWrapper from "./components/DashboardWrapper";
import Patient from "./components/Patient";
import CreatePatient from "./subComponents/CreatePatient";
import Edit from "./subComponents/Edit";
import ImageUploader from "./subComponents/ImageUploade";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/d/*" element={<DashboardWrapper />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/patient/:id" element={<Patient />} />
          <Route path="/create" element={<CreatePatient />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
