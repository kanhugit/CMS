import { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function IndustriesEditor() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ name: "", description: "" });

  useEffect(() => {
    api.get("/content/industries").then((res) => setList(res.data));
  }, []);

  const add = async () => {
    await api.post("/content/industries", form);
    window.location.reload();
  };

  const del = async (id) => {
    await api.delete(`/content/industries/${id}`);
    window.location.reload();
  };

  return (
    <div className="bg-white p-6 mt-6">
      <h2 className="font-bold mb-3">Industries</h2>

      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <button onClick={add}>Add</button>

      {list.map((i) => (
        <div key={i.id}>
          {i.name}
          <button onClick={() => del(i.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}
