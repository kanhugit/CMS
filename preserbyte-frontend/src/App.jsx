import { useState } from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdminDashboard from "./admin/pages/AdminDashboard.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import HeroManager from "./admin/pages/HeroManager.jsx";
import Dashboard from "./admin/pages/AdminDashboard.jsx";
import AdminLayout from "./admin/layout/AdminLayout.jsx";
import IndustriesManager from "./admin/pages/IndustriesManager.jsx";
import ExpertiseManager from "./admin/pages/ExpertiseManager.jsx";
// import ExpertiseManager from "./admin/pages/ExpertiseManager.jsx";
export default function App() {
  return (
    <>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />

        {/* ADMIN */}
        <Route path="/admin-dashboard" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          {/* <Route path="/admin-dashboard" element={<Dashboard />} /> */}
          <Route path="hero" element={<HeroManager />} />
          <Route path="industries" element={<IndustriesManager />} />
          <Route path="expertise" element={<ExpertiseManager />} />
        </Route>
      </Routes>
    </>
  );
}
