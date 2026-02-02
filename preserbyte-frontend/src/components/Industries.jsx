import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Industries() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/content/industries").then((res) => setList(res.data));
  }, []);

  return (
    <section className="p-10 grid md:grid-cols-3 gap-6">
      {list.map((i) => (
        <div key={i.id} className="p-6 shadow rounded bg-white">
          <h3 className="font-bold">{i.name}</h3>
          <p>{i.description}</p>
        </div>
      ))}
    </section>
  );
}
