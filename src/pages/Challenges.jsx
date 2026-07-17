import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Map,
  List,
  Grid2X2,
  GraduationCap,
  Briefcase,
  FlaskConical,
  Building2,
  Leaf,
  HeartPulse,
  Compass,
  Snowflake,
  Waves,
  MapPin,
} from "lucide-react";

import ChallengeMap from "../components/map/ChallengeMap";
import Layout from "../components/layout/Layout";

const challenges = [
  {
    id: 1,
    title: "Sustainable Fisheries Data Platform",
    category: "Master Thesis",
    country: "Norway",
    organization: "University of Marine Research",
    icon: Leaf,
  },
  {
    id: 2,
    title: "Rural Healthcare Innovation Lab",
    category: "Internship",
    country: "Norway",
    organization: "Northern Norway Hospital Trust",
    icon: HeartPulse,
  },
  {
    id: 3,
    title: "Circular Tourism Planning",
    category: "Bachelor Thesis",
    country: "Finland",
    organization: "Visit Finland",
    icon: Compass,
  },
  {
    id: 4,
    title: "Arctic Climate Adaptation Strategies",
    category: "PhD Topic",
    country: "Sweden",
    organization: "Stockholm Environment Institute",
    icon: Snowflake,
  },
  {
    id: 5,
    title: "Blue Economy Analytics",
    category: "Research Frontier Call",
    country: "Denmark",
    organization: "Nordic Innovation",
    icon: Waves,
  },
];


function Challenges() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
const [selectedCategory, setSelectedCategory] = useState("");

const filteredChallenges = challenges.filter((challenge) => {
  const searchText = search.toLowerCase();

  const matchesSearch =
    challenge.title.toLowerCase().includes(searchText) ||
    challenge.organization.toLowerCase().includes(searchText) ||
    challenge.country.toLowerCase().includes(searchText) ||
    challenge.category.toLowerCase().includes(searchText);

  const matchesCategory =
    selectedCategory === "" || challenge.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
          <div>
            <h1 className="text-3xl font-semibold text-[#2f5d4a] sm:text-4xl">
              Challenges
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#7b8b83]">
              Browse thesis topics, research calls, internships, and regional
              collaboration opportunities.
            </p>
          </div>

          <div className="flex gap-2">
            <ViewButton label="List view">
              <List size={18} />
            </ViewButton>

            <ViewButton label="Grid view">
              <Grid2X2 size={18} />
            </ViewButton>

            <button
              type="button"
              aria-label="Map view"
              className="rounded-lg bg-[#8aa083] p-2 text-white transition hover:bg-[#76956d]"
            >
              <Map size={18} />
            </button>
          </div>
        </div>

        <section className="rounded-2xl border border-[#ebe7de] bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3 rounded-xl border border-[#ebe7de] px-4 py-3">
            <Search size={17} className="shrink-0 text-[#8a978f]" />

         <input
                 type="text"
                value={search}
                 onChange={(event) => setSearch(event.target.value)}
                 placeholder="Search challenges by title, keyword, or organization"
                 className="w-full bg-transparent text-sm text-[#2f5d4a] outline-none placeholder:text-[#9aa49f]"
                />
          </div>

<div className="mt-4 flex flex-wrap gap-2">
  <FilterButton
    icon={<GraduationCap size={15} />}
    label="Bachelor Thesis"
    active={selectedCategory === "Bachelor Thesis"}
    onClick={() =>
      setSelectedCategory(
        selectedCategory === "Bachelor Thesis" ? "" : "Bachelor Thesis"
      )
    }
  />

  <FilterButton
    icon={<GraduationCap size={15} />}
    label="Master Thesis"
    active={selectedCategory === "Master Thesis"}
    onClick={() =>
      setSelectedCategory(
        selectedCategory === "Master Thesis" ? "" : "Master Thesis"
      )
    }
  />

  <FilterButton
    icon={<FlaskConical size={15} />}
    label="PhD Topic"
    active={selectedCategory === "PhD Topic"}
    onClick={() =>
      setSelectedCategory(
        selectedCategory === "PhD Topic" ? "" : "PhD Topic"
      )
    }
  />

  <FilterButton
    icon={<Building2 size={15} />}
    label="Research Frontier Call"
    active={selectedCategory === "Research Frontier Call"}
    onClick={() =>
      setSelectedCategory(
        selectedCategory === "Research Frontier Call"
          ? ""
          : "Research Frontier Call"
      )
    }
  />

  <FilterButton
    icon={<Briefcase size={15} />}
    label="Internship"
    active={selectedCategory === "Internship"}
    onClick={() =>
      setSelectedCategory(
        selectedCategory === "Internship" ? "" : "Internship"
      )
    }
  />
</div>
        </section>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
          <section className="min-w-0 rounded-2xl border border-[#ebe7de] bg-white p-3 shadow-sm sm:p-5">
            <ChallengeMap />
          </section>

          <aside className="rounded-2xl border border-[#ebe7de] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-sm font-semibold text-[#2f5d4a]">
                Showing {filteredChallenges.length} challenges
              </h2>

              <button
                type="button"
                className="text-xs font-medium text-[#6f8f72] transition hover:text-[#2f5d4a]"
              >
                View all
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {filteredChallenges.map((challenge) => {
                const Icon = challenge.icon;

                return (
                  <button
                    key={challenge.id}
                    type="button"
                    onClick={() => navigate(`/challenges/${challenge.id}`)}
                    className="w-full rounded-xl border border-[#ebe7de] p-4 text-left transition hover:border-[#cfd9cc] hover:bg-[#f7f5ef]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef3eb] text-[#6f8f72]">
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-medium leading-5 text-[#2f5d4a]">
                          {challenge.title}
                        </h3>

                        <p className="mt-2 text-xs font-medium text-[#6f8f72]">
                          {challenge.category}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#7b8b83]">
                          {challenge.organization}
                        </p>

                        <div className="mt-1 flex items-center gap-1.5 text-xs text-[#6f8f72]">
                          <MapPin size={13} />
                          <span>{challenge.country}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

function ViewButton({ children, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="rounded-lg border border-[#e3ded5] bg-white p-2 text-[#6f7f76] transition hover:bg-[#f3f1ea]"
    >
      {children}
    </button>
  );
}

function FilterButton({ icon, label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs transition ${
        active
          ? "border-[#8aa083] bg-[#8aa083] text-white"
          : "border border-[#e3ded5] bg-white text-[#6f7f76] hover:bg-[#f2f4ee]"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

export default Challenges;