// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";

// export default function AdminLayout() {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Topbar />
//         <main className="p-6 overflow-y-auto">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }

import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Clear admin session
    localStorage.removeItem("adminLoggedIn");

    // 2. Redirect to home
    navigate("/");
  };
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* SIDEBAR */}
      <aside className="bg-dark text-white p-4" style={{ width: 240 }}>
        <h4 className="mb-4">Admin Panel</h4>

        <NavLink className="d-block mb-3 text-info" to="/admin-dashboard">
          Dashboard
        </NavLink>

        <NavLink className="d-block mb-3 text-info" to="/admin-dashboard/hero">
          Hero Section
        </NavLink>

        <NavLink
          className="d-block mb-3 text-info"
          to="/admin-dashboard/industries"
        >
          Industries
        </NavLink>

        <NavLink
          className="d-block mb-3 text-info"
          to="/admin-dashboard/expertise"
        >
          Expertise
        </NavLink>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-grow-1 bg-light">
        <header className="bg-white shadow p-3 d-flex justify-content-between">
          <h4>Admin Dashboard</h4>
          <button className="btn btn-danger btn-sm" onClick={handleLogout}>
            Logout
          </button>
        </header>

        {/* 🔥 THIS IS WHERE PAGES RENDER */}
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
