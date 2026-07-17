import { Link, NavLink } from "react-router-dom";
import {
  Home,
  Flag,
  Users,
  ShieldCheck,
  BarChart3,
  FileText,
  Settings,
  Globe,
  X,
} from "lucide-react";

import dashImage from "../../assets/images/dash.png";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: Home },
  { name: "Challenges", path: "/challenges", icon: Flag },
  { name: "Matchmaking", path: "/matchmaking", icon: Users },
  { name: "Credentials", path: "/credentials", icon: ShieldCheck },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
  { name: "Agreements", path: "/agreements", icon: FileText },
  { name: "Settings", path: "/settings", icon: Settings },
];

function Sidebar({ open = false, onClose = () => {} }) {
  return (
    <>
      {open && (
        <button
          type="button"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          aria-label="Close navigation menu"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-[#eeeae2] bg-[#fbfaf7] transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex shrink-0 items-center justify-between px-6 py-7">
          <Link
            to="/"
            onClick={onClose}
            className="flex min-w-0 items-center gap-3"
          >
            <div className="h-8 w-10 shrink-0 rounded-t-full border-l-4 border-t-4 border-[#2f5d4a]" />

            <span className="truncate text-xl font-semibold text-[#2f5d4a]">
              Nordic Bridge
            </span>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="ml-2 rounded-lg p-2 text-[#2f5d4a] transition hover:bg-[#f1eee7] lg:hidden"
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav className="min-h-0 flex-1 overflow-y-auto px-6 pb-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-[#f0eee7] font-medium text-[#2f5d4a]"
                        : "text-[#6f7f76] hover:bg-[#f4f1ea] hover:text-[#2f5d4a]"
                    }`
                  }
                >
                  <Icon size={18} className="shrink-0" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Bottom section */}
        <div className="shrink-0 border-t border-[#eeeae2] bg-[#fbfaf7] px-6 pb-6 pt-4">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-[#6f7f76] transition hover:bg-[#f4f1ea]"
          >
            <Globe size={17} className="shrink-0" />

            <div>
              <p>Multilingual Support</p>
              <p className="mt-0.5 text-xs font-medium text-[#2f5d4a]">
                English
              </p>
            </div>
          </button>

          <img
            src={dashImage}
            alt="Nordic landscape illustration"
            className="mt-4 max-h-52 w-full object-contain object-bottom opacity-90"
          />
        </div>
      </aside>
    </>
  );
}

export default Sidebar;