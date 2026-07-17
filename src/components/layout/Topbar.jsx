import { Menu } from "lucide-react";

function Topbar({ onMenuClick }) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-[#ece8df] bg-white px-4 sm:px-6 lg:h-20 lg:px-10">
      <button
        type="button"
        onClick={onMenuClick}
        className="rounded-lg p-2 text-[#2f5d4a] hover:bg-[#f3f1ea] lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      <div className="ml-auto flex items-center gap-3 text-xs text-[#6f7f76] sm:gap-5 sm:text-sm">
        <span className="hidden sm:inline">English</span>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8aa083] text-xs text-white sm:h-9 sm:w-9">
          NB
        </div>

        <span className="hidden md:inline">Nordic Bridge</span>
      </div>
    </header>
  );
}

export default Topbar;