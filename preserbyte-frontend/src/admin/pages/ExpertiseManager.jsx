import { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function ExpertiseManager() {
  const [expertise, setExpertise] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Load expertise list
  const loadExpertise = async () => {
    const res = await api.get("/content/expertise");
    setExpertise(res.data);
  };

  useEffect(() => {
    loadExpertise();
  }, []);

  // Add expertise
  const addExpertise = async () => {
    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    await api.post("/content/expertise", { title, description });
    setTitle("");
    setDescription("");
    loadExpertise();
  };

  // Delete expertise
  const deleteExpertise = async (id) => {
    await api.delete(`/content/expertise/${id}`);
    loadExpertise();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Expertise Manager</h1>

      {/* ADD FORM */}
      <div className="bg-white p-4 rounded shadow mb-6 max-w-lg">
        <input
          className="border p-2 w-full mb-3"
          placeholder="Expertise Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border p-2 w-full mb-3"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={addExpertise}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add Expertise
        </button>
      </div>

      {/* LIST */}
      <div className="grid md:grid-cols-3 gap-4">
        {expertise.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>

            <button
              onClick={() => deleteExpertise(item.id)}
              className="text-red-500 mt-3 text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
