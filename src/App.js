import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login/Login";
import ChangePassword from "./screens/changePassword/changePassword";
import Instruction from "./screens/Instruction/Instruction";
import { UpdatedInstruction } from "./screens/UpdatedInstruction/UpdatedInstrution";
import { Dashboard } from "./screens/Dashboard/Dashboard";
import { UpdatedDashboard } from "./screens/UpdatedDashboard/UpdatedDashboard";
import { Profile } from "./screens/Profile/Profile";
import { Kpi } from "./screens/Kpi/Kpi";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/updated-instruction" element={<UpdatedInstruction />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/updated-dashboard" element={<UpdatedDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/kpi" element={<Kpi />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
