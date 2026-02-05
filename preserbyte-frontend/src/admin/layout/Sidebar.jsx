// import { logout } from "../../services/authService";
// import { useNavigate } from "react-router-dom";

// export default function Sidebar() {
//   const navigate = useNavigate();

//   return (
//     <div className="w-64 bg-black text-white min-h-screen p-5">
//       <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

//       <ul className="space-y-4">
//         <li className="cursor-pointer">Hero Section</li>
//         <li className="cursor-pointer">Industries</li>
//         <li className="cursor-pointer">Media</li>
//       </ul>

//       <button
//         className="mt-10 bg-red-600 px-4 py-2 w-full"
//         onClick={() => {
//           logout();
//           navigate("/");
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

import { NavLink } from "react-router-dom";

const menu = [
  { path: "/admin", label: "Dashboard" },
  { path: "/admin/hero", label: "Hero Section" },
  { path: "/admin/industries", label: "Industries" },
  { path: "/admin/expertise", label: "Expertise" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white">
      <h1 className="text-2xl font-bold p-6">Admin Panel</h1>

      <nav className="space-y-2 px-4">
        {menu.map((m) => (
          <NavLink
            key={m.path}
            to={m.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? "bg-cyan-500" : "hover:bg-gray-800"
              }`
            }
          >
            {m.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
