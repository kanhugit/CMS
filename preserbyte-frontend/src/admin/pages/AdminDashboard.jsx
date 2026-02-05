// import Hero from "../../components/Hero";
// import Industries from "../../components/Industries";
// import Sidebar from "../layout/Sidebar";
// import HeroManager from "./HeroManager";

// export default function AdminDashboard() {
//   return (
//     <div className="flex min-h-screen">
//       <AdminSidebar />
//       <main className="flex-1 p-8 bg-gray-100">
//         <HeroManager />
//         <Industries />
//       </main>
//     </div>
//   );
// }

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome Admin</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Hero Slides" />
        <Card title="Industries" />
        <Card title="Expertise" />
      </div>
    </div>
  );
}

function Card({ title }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm">Manage content</p>
    </div>
  );
}
