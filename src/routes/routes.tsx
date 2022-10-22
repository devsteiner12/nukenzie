import { Route, Routes } from "react-router-dom";
import { LandPage } from "../pages/LandPage";
import { Dashboard } from "../pages/Dashboard";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
