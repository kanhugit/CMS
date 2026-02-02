import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Hero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    api.get("/content/hero").then(res => setHero(res.data));
  }, []);

  if (!hero) return null;

  return (
    <section className="h-screen relative text-white text-center">
      {hero.image && (
        <img
          src={`http://localhost:5000/uploads/${hero.image}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="relative z-10 pt-40">
        <h1 className="text-5xl font-bold">{hero.title}</h1>
        <p className="mt-4">{hero.subtitle}</p>
      </div>
    </section>
  );
}
