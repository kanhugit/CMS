import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/register", {
      email,
      password,
    });
    alert("Account created. Please login.");
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <h2 className="text-xl font-bold text-center">Create Admin Account</h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 rounded"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="w-full bg-black text-white py-2 rounded">
        Register
      </button>
    </form>
  );
}
