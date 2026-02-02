import { logout } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-black text-white min-h-screen p-5">
      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

      <ul className="space-y-4">
        <li className="cursor-pointer">Hero Section</li>
        <li className="cursor-pointer">Industries</li>
        <li className="cursor-pointer">Media</li>
      </ul>

      <button
        className="mt-10 bg-red-600 px-4 py-2 w-full"
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}
