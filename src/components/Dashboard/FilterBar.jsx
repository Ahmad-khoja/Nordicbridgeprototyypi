import { useState } from "react";
import { ChevronDown } from "lucide-react";

const filterOptions = {
  Skills: ["GIS & Data", "Data Analysis", "AI", "Marine Science"],
  Location: ["Finland", "Norway", "Iceland", "Sweden"],
  "Research Area": [
    "Healthcare",
    "Tourism",
    "Sustainability",
    "Education",
  ],
  "Degree Level": [
    "Bachelor Thesis",
    "Master Thesis",
    "PhD",
    "Internship",
  ],
};

function FilterBar() {
  const [openFilter, setOpenFilter] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleSelect = (filter, option) => {
    setSelectedFilters((previous) => ({
      ...previous,
      [filter]: option,
    }));

    setOpenFilter(null);
  };

  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 gap-3 text-sm text-[#7b8b83] sm:grid-cols-2 xl:grid-cols-4">
        {Object.keys(filterOptions).map((filter) => (
          <div key={filter} className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenFilter(openFilter === filter ? null : filter)
              }
              className="flex w-full items-center justify-between rounded-xl border border-[#ebe7de] bg-white px-4 py-3 text-left transition hover:bg-[#f5f3ee]"
            >
              <span>{selectedFilters[filter] || filter}</span>
              <ChevronDown
                size={16}
                className={`transition ${
                  openFilter === filter ? "rotate-180" : ""
                }`}
              />
            </button>

            {openFilter === filter && (
              <div className="absolute z-30 mt-2 w-full rounded-xl border border-[#ebe7de] bg-white p-2 shadow-lg">
                {filterOptions[filter].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleSelect(filter, option)}
                    className="block w-full rounded-lg px-3 py-2 text-left text-xs transition hover:bg-[#f2f4ee]"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FilterBar;