import { useState } from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./admin/pages/AdminDashboard.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
export default function App() {
  return (
    <>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Admin Dashboard */}
        {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}

        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
