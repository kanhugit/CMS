import Hero from "../../components/Hero";
import Industries from "../../components/Industries";
import Sidebar from "../layout/Sidebar";
import HeroManager from "./HeroManager";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8 bg-gray-100">
        <HeroManager />
        <Industries />
      </main>
    </div>
  );
}
