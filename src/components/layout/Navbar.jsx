function Navbar() {
  return (
    <header className="w-full px-8 py-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/80 px-6 py-4 shadow-sm backdrop-blur">
        <div className="text-2xl font-bold text-slate-900">
          Nordic<span className="text-blue-600">Bridge</span>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#">Challenges</a>
          <a href="#">Organizations</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm">
            EN
          </button>

          <button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white">
            Login
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar