// export default function Hero() {
//   return (
//     <section className="min-h-screen pt-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900">
//       <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
//         {/* Left Content */}
//         <div className="text-center md:text-left">
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
//             Innovation <span className="text-cyan-400">Protected</span>.<br />
//             Rights <span className="text-pink-400">Enforced</span>.
//           </h1>

//           <p className="mt-4 text-base md:text-lg text-gray-200">
//             Next-generation platform to protect and empower innovation globally.
//           </p>

//           <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <button className="bg-cyan-500 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600">
//               Get Consultation
//             </button>
//             <button className="border border-white px-6 py-3 rounded-lg hover:bg-white/10">
//               Contact Us
//             </button>
//           </div>
//         </div>

//         {/* Right Card */}
//         <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-xl border border-white/20 hidden md:block">
//           <h3 className="text-xl font-bold">Why Preserbyte?</h3>
//           <ul className="mt-4 space-y-2 text-gray-200">
//             <li>✔ Patent Protection</li>
//             <li>✔ Global IP Strategy</li>
//             <li>✔ Legal Enforcement</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }



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
