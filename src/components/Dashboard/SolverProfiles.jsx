import {
  User,
  MapPin,
  GraduationCap,
  Star,
} from "lucide-react";

const solvers = [
  {
    id: 1,
    name: "Anna Mikkelsen",
    country: "Norway",
    field: "Artificial Intelligence",
    match: "96%",
  },
  {
    id: 2,
    name: "Liam O'Connor",
    country: "Ireland",
    field: "Data Science",
    match: "91%",
  },
  {
    id: 3,
    name: "Sofia Korhonen",
    country: "Finland",
    field: "Sustainability",
    match: "88%",
  },
];

function SolverProfiles() {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#2f5d4a]">
          Solver Profiles
        </h2>

        <button className="rounded-lg bg-[#8aa083] px-4 py-2 text-sm text-white hover:bg-[#76956d]">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {solvers.map((solver) => (
          <div
            key={solver.id}
            className="rounded-2xl border border-[#ebe7de] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="rounded-full bg-[#eef3eb] p-3">
                  <User className="text-[#2f5d4a]" />
                </div>

                <div>
                  <h3 className="font-semibold text-[#2f5d4a]">
                    {solver.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-xs text-[#7b8b83]">
                    <MapPin size={14} />
                    {solver.country}
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-xs text-[#7b8b83]">
                    <GraduationCap size={14} />
                    {solver.field}
                  </div>
                </div>
              </div>

              <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                {solver.match}
              </div>
            </div>

            <button className="mt-5 w-full rounded-xl border border-[#d8d4cb] py-3 text-sm hover:bg-[#f5f3ee]">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SolverProfiles;