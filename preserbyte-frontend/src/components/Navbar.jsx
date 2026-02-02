// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 w-full bg-black text-white z-50 shadow-lg">
//       <div className="container mx-auto px-12 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-xl font-bold">Preserbyte</h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 font-medium">
//           <li>
//             <a href="#about" className="hover:text-cyan-400">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#industries" className="hover:text-cyan-400">
//               Industries
//             </a>
//           </li>
//           <li>
//             <a href="#expertise" className="hover:text-cyan-400">
//               Expertise
//             </a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:text-cyan-400">
//               Contact
//             </a>
//           </li>
//         </ul>

//         {/* Mobile Hamburger Button */}
//         <button
//           className="md:hidden text-3xl focus:outline-none"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? "✖" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-black transition-all duration-300 ${
//           open ? "block" : "hidden"
//         }`}
//       >
//         <ul className="flex flex-col px-6 py-4 space-y-4 border-t border-gray-700">
//           <li>
//             <a
//               onClick={() => setOpen(false)}
//               href="#about"
//               className="block hover:text-cyan-400"
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               onClick={() => setOpen(false)}
//               href="#industries"
//               className="block hover:text-cyan-400"
//             >
//               Industries
//             </a>
//           </li>
//           <li>
//             <a
//               onClick={() => setOpen(false)}
//               href="#expertise"
//               className="block hover:text-cyan-400"
//             >
//               Expertise
//             </a>
//           </li>
//           <li>
//             <a
//               onClick={() => setOpen(false)}
//               href="#contact"
//               className="block hover:text-cyan-400"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import AuthModal from "./auth/AuthModal";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authType, setAuthType] = useState("login");

  return (
    <>
      <nav className="fixed top-0 w-full bg-black text-white z-40">
        <div className="container mx-auto px-12 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Preserbyte</h1>

          <ul className="hidden md:flex gap-8">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#industries">Industries</a>
            </li>
            <li>
              <a href="#expertise">Expertise</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>

            {/* PROFILE ICON */}
            <li>
              <FaUserCircle
                size={26}
                className="cursor-pointer hover:text-cyan-400"
                onClick={() => {
                  setAuthType("login");
                  setShowAuth(true);
                }}
              />
            </li>
          </ul>
        </div>
      </nav>

      {/* AUTH MODAL */}
      <AuthModal
        open={showAuth}
        onClose={() => setShowAuth(false)}
        type={authType}
        setType={setAuthType}
      />
    </>
  );
}
