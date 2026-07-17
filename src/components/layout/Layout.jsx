import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#2f5d4a]">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="min-h-screen lg:ml-64">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="px-4 py-5 sm:px-6 md:px-8 lg:px-10 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;