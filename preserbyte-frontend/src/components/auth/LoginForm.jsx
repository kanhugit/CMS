// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { login } from "../../services/authService";

// export default function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const res = await axios.post("http://localhost:5000/api/auth/login", {
//       email,
//       password,
//     });

//     if (res.data.role === "admin") {
//       localStorage.setItem("token", res.data.token);
//       navigate("/admin-dashboard");
//       window.location.reload();
//     }
//   };

//   return (
//     <form onSubmit={handleLogin} className="space-y-4">
//       <h2 className="text-xl font-bold text-center">Admin Login</h2>

//       <input
//         type="email"
//         placeholder="Email"
//         className="w-full border p-2 rounded"
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         className="w-full border p-2 rounded"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button className="w-full bg-black text-white py-2 rounded">Login</button>
//     </form>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const success = login(email, password);
    if (success) navigate("/admin-dashboard");
    else alert("Invalid credentials");
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="border p-2 w-full mb-3"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="bg-black text-white px-4 py-2 w-full"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
