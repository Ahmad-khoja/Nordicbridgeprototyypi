import { Building2, Box, UserRound } from "lucide-react";

const roles = [
  {
    title: "Challenge Providers",
    text: "SMEs, Municipalities, NGOs, Public Institutions",
    icon: Building2,
  },
  {
    title: "Solvers",
    text: "Students, Researchers, Professors",
    icon: Box,
  },
  {
    title: "Facilitators",
    text: "Consortium Partners",
    icon: UserRound,
  },
];

function RoleCards() {
  return (
    <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8">
      {roles.map((role) => {
        const Icon = role.icon;

        return (
          <button
            key={role.title}
            className="flex gap-4 rounded-2xl p-4 text-left transition hover:bg-white hover:shadow-sm"
          >
            <Icon size={42} className="text-[#7b9b87]" />

            <div>
              <h2 className="font-medium text-[#2f5d4a]">
                {role.title}
              </h2>

              <p className="mt-1 text-xs text-[#7b8b83]">
                {role.text}
              </p>
            </div>
          </button>
        );
      })}
    </section>
  );
}

export default RoleCards;