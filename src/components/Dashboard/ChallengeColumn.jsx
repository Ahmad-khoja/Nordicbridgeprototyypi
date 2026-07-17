import {
  Leaf,
  HeartPulse,
  Mountain,
  MapPin,
  Clock3,
} from "lucide-react";

const challenges = [
  {
    id: 1,
    title: "Sustainable Fisheries Data",
    country: "Iceland",
    status: "Open",
    description:
      "Looking for GIS, AI and marine science expertise.",
    icon: Leaf,
    color: "text-green-600",
  },
  {
    id: 2,
    title: "Remote Healthcare Access",
    country: "Norway",
    status: "Matching",
    description:
      "Seeking healthcare technology researchers.",
    icon: HeartPulse,
    color: "text-red-500",
  },
  {
    id: 3,
    title: "Circular Tourism Planning",
    country: "Finland",
    status: "Open",
    description:
      "Looking for sustainability and tourism experts.",
    icon: Mountain,
    color: "text-orange-500",
  },
];

function ChallengeColumn() {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#2f5d4a]">
          Challenges
        </h2>

        <button className="rounded-lg bg-[#8aa083] px-4 py-2 text-sm text-white hover:bg-[#76956d]">
          View all
        </button>
      </div>

      <div className="space-y-5">
        {challenges.map((challenge) => {
          const Icon = challenge.icon;

          return (
            <div
              key={challenge.id}
              className="rounded-2xl border border-[#ebe7de] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div
                    className={`rounded-xl bg-[#f4f5ef] p-3 ${challenge.color}`}
                  >
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#2f5d4a]">
                      {challenge.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-xs text-[#7b8b83]">
                      <MapPin size={14} />
                      {challenge.country}
                    </div>

                    <p className="mt-3 text-sm text-[#6f7f76]">
                      {challenge.description}
                    </p>
                  </div>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    challenge.status === "Open"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {challenge.status}
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#8b948d]">
                  <Clock3 size={14} />
                  Updated 2 days ago
                </div>

                <button className="rounded-lg border border-[#d9d4ca] px-4 py-2 text-sm transition hover:bg-[#f4f2ec]">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ChallengeColumn;