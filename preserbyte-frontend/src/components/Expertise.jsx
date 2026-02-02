import { useState } from "react";
import { useEffect, useRef } from "react";


// const expertise = [
//   {
//     title: "Patent Drafting & Filing",
//     description:
//       "We draft and file strong patent applications with precise technical and legal coverage, ensuring compliance with domestic and international patent laws."
//   },
//   {
//     title: "Trade Secret Protection",
//     description:
//       "We help organizations protect confidential business information through NDAs, internal controls, and strategic legal frameworks."
//   },
//   {
//     title: "IP Enforcement & Litigation",
//     description:
//       "Our experts handle IP infringement actions, enforcement strategies, dispute resolution, and litigation support across jurisdictions."
//   },
//   {
//     title: "Technology Assessment",
//     description:
//       "We assess technologies for patentability, novelty, freedom-to-operate (FTO), and commercial feasibility."
//   },
//   {
//     title: "Global IP Strategy",
//     description:
//       "We design end-to-end global IP strategies aligned with business goals, covering filing, portfolio management, and monetization."
//   },
// ];

// export default function Expertise() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   return (
//     <section id="expertise" className="py-16 bg-gray-900 text-white">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-center">
//           Our Expertise
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
//           {expertise.map((item, i) => (
//             <div
//               key={i}
//               onClick={() =>
//                 setActiveIndex(activeIndex === i ? null : i)
//               }
//               className={`cursor-pointer p-6 rounded-xl shadow transition-all duration-300
//                 ${
//                   activeIndex === i
//                     ? "bg-indigo-600"
//                     : "bg-gray-800 hover:bg-indigo-500"
//                 }`}
//             >
//               <h3 className="font-semibold text-lg">
//                 {item.title}
//               </h3>

//               {activeIndex === i && (
//                 <p className="mt-3 text-sm text-gray-200 leading-relaxed">
//                   {item.description}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

//Second card design with images
const expertise = [
  {
    title: "Patent Drafting & Filing",
    description:
      "We draft and file strong patent applications with precise technical and legal coverage, ensuring compliance with domestic and international patent laws.",
    image: "/images/patent-drafting-filing.webp", // replace with your image path
  },
  {
    title: "Trade Secret Protection",
    description:
      "We help organizations protect confidential business information through NDAs, internal controls, and strategic legal frameworks.",
    image: "/images/Trade-secret.jpeg",
  },
  {
    title: "IP Enforcement & Litigation",
    description:
      "Our experts handle IP infringement actions, enforcement strategies, dispute resolution, and litigation support across jurisdictions.",
    image: "/images/IP-enforcement-litigation.jpg",
  },
  {
    title: "Technology Assessment",
    description:
      "We assess technologies for patentability, novelty, freedom-to-operate (FTO), and commercial feasibility.",
    image: "/images/Technology-assessment.jpg",
  },
  {
    title: "Global IP Strategy",
    description:
      "We design end-to-end global IP strategies aligned with business goals, covering filing, portfolio management, and monetization.",
    image: "/images/Global_IP_Strategy.jpg",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {expertise.map((item, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden
                         hover:scale-105 hover:bg-indigo-600 transition-all duration-300"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-contain bg-white p-4"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

