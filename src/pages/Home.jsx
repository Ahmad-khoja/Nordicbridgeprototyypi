import { useState } from "react";
import {
  Globe,
  Plus,
  Send,
  Users,
  Puzzle,
  Languages,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import landscape from "../assets/images/landscape.png";
import heroMap from "../assets/images/hero-map.png";

function Home() {
  const navigate = useNavigate();

  const [languageOpen, setLanguageOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const handleLanguageToggle = () => {
    setLanguageOpen((current) => !current);
    setUserOpen(false);
  };

  const handleUserToggle = () => {
    setUserOpen((current) => !current);
    setLanguageOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbfaf7] text-[#2f5d4a]">
      <header className="relative z-50 flex h-16 items-center justify-between border-b border-[#eeeae2] px-4 sm:h-20 sm:px-6 lg:px-10">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 sm:gap-3"
          aria-label="Go to home page"
        >
          <div className="h-7 w-9 rounded-t-full border-l-[3px] border-t-[3px] border-[#2f5d4a] sm:h-8 sm:w-10 sm:border-l-4 sm:border-t-4" />

          <span className="text-base font-semibold sm:text-xl">
            Nordic Bridge
          </span>
        </button>

        <div className="relative flex items-center gap-1 text-xs text-[#6f7f76] sm:gap-3 sm:text-sm lg:gap-5">
          <div className="relative">
            <button
              type="button"
              onClick={handleLanguageToggle}
              className="flex items-center gap-1 rounded-xl px-2 py-2 transition hover:bg-[#f1eee7] sm:gap-2 sm:px-3"
              aria-expanded={languageOpen}
            >
              <Globe size={16} />

              <span className="hidden sm:inline">{language}</span>

              <ChevronDown
                size={14}
                className={`transition-transform ${
                  languageOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {languageOpen && (
              <div className="absolute right-0 z-50 mt-2 w-36 rounded-xl border border-[#ebe7de] bg-white p-2 shadow-lg">
                {["English", "Finnish", "Swedish", "Norwegian"].map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setLanguage(item);
                        setLanguageOpen(false);
                      }}
                      className="block w-full rounded-lg px-3 py-2 text-left text-xs transition hover:bg-[#f2f4ee]"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={handleUserToggle}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8aa083] text-[11px] text-white transition hover:bg-[#76956d] sm:h-9 sm:w-9 sm:text-xs"
              aria-expanded={userOpen}
            >
              NB
            </button>

            {userOpen && (
              <div className="absolute right-0 z-50 mt-2 w-40 rounded-xl border border-[#ebe7de] bg-white p-2 shadow-lg">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/account");
                    setUserOpen(false);
                  }}
                  className="block w-full rounded-lg px-3 py-2 text-left text-xs transition hover:bg-[#f2f4ee]"
                >
                  My Account
                </button>

                <button
                  type="button"
                  onClick={() => {
                    navigate("/dashboard");
                    setUserOpen(false);
                  }}
                  className="block w-full rounded-lg px-3 py-2 text-left text-xs transition hover:bg-[#f2f4ee]"
                >
                  Dashboard
                </button>

                <button
                  type="button"
                  onClick={() => setUserOpen(false)}
                  className="block w-full rounded-lg px-3 py-2 text-left text-xs transition hover:bg-[#f2f4ee]"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          <span className="hidden lg:inline">Nordic Bridge</span>
        </div>
      </header>

      <main className="grid min-h-[calc(100vh-64px)] grid-cols-1 sm:min-h-[calc(100vh-80px)] lg:grid-cols-[40%_60%] xl:grid-cols-[38%_62%]">
        <section className="relative z-10 flex min-h-[calc(100vh-64px)] flex-col px-5 py-10 sm:min-h-[calc(100vh-80px)] sm:px-10 sm:py-14 lg:px-12 lg:pb-0 lg:pt-16 xl:px-20 xl:pt-20">
          <h1 className="max-w-xl text-4xl font-semibold leading-[1.12] sm:text-5xl lg:max-w-md lg:text-[2.8rem] xl:text-5xl">
            Bridging Nordic expertise for shared regional challenges
          </h1>

          <div className="mt-6 h-[2px] w-16 bg-[#8aa083] sm:mt-8 sm:w-20" />

          <p className="mt-6 max-w-md text-sm leading-6 text-[#7c8a83] sm:mt-8 sm:text-base sm:leading-7 lg:max-w-sm">
            Nordic Bridge connects organizations, researchers and public
            institutions across the Northern Periphery and Arctic region to
            solve real-world challenges together.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4 xl:gap-5">
            <button
              type="button"
              onClick={() => navigate("/challenges")}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#8aa083] px-6 py-3.5 text-sm text-white shadow-sm transition hover:bg-[#76956d] sm:w-auto sm:px-7 sm:py-4"
            >
              <Send size={16} />
              Explore Challenges
            </button>

            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#e3ded5] bg-white px-6 py-3.5 text-sm text-[#5f7469] shadow-sm transition hover:bg-[#f7f7f7] sm:w-auto sm:px-7 sm:py-4"
            >
              <Plus size={16} />
              Post a Challenge
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 text-[#63786d] sm:mt-12 sm:flex sm:gap-8 xl:gap-12">
            <div className="min-w-0">
              <Users size={20} className="sm:h-[22px] sm:w-[22px]" />
              <p className="mt-2 text-lg font-semibold sm:text-xl">278</p>
              <p className="break-words text-[10px] leading-4 sm:text-xs">
                Organizations
              </p>
            </div>

            <div className="min-w-0">
              <Puzzle size={20} className="sm:h-[22px] sm:w-[22px]" />
              <p className="mt-2 text-lg font-semibold sm:text-xl">1,248</p>
              <p className="break-words text-[10px] leading-4 sm:text-xs">
                Active Challenges
              </p>
            </div>

            <div className="min-w-0">
              <Languages size={20} className="sm:h-[22px] sm:w-[22px]" />
              <p className="mt-2 text-lg font-semibold sm:text-xl">6</p>
              <p className="break-words text-[10px] leading-4 sm:text-xs">
                Countries
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-1 items-end sm:mt-12 lg:mt-auto">
            <img
              src={landscape}
              alt="Nordic landscape"
              className="mx-auto w-full max-w-[440px] object-contain sm:max-w-[500px] lg:mx-0"
            />
          </div>
        </section>

        <section className="relative hidden min-h-[640px] overflow-hidden lg:block">
          <img
            src={heroMap}
            alt="Nordic map"
            className="absolute bottom-0 right-[-40px] h-[96%] w-auto max-w-none object-contain xl:right-[-30px] xl:h-[100%]"
          />
        </section>
      </main>
    </div>
  );
}

export default Home;