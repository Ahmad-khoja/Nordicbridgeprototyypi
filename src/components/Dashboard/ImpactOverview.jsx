import { Award, Globe2, Leaf } from "lucide-react";

function ImpactOverview() {
  return (
    <section className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#ebe7de] bg-white shadow-sm md:grid-cols-3">
      {/* Open Badges */}
      <div className="border-b border-[#ebe7de] p-6 md:border-b-0 md:border-r">
        <h2 className="text-lg font-semibold text-[#2f5d4a]">
          Open Badges / Merit Badging
        </h2>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#e8efe6] text-[#6f8f72]">
            <Leaf size={28} />
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#e6eef1] text-[#6d8b95]">
            <Globe2 size={28} />
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#efe7e7] text-[#9b7d7d]">
            <Award size={28} />
          </div>
        </div>

        <button className="mt-5 text-sm text-[#6f7f76] hover:text-[#2f5d4a]">
          View all →
        </button>
      </div>

      {/* Heatmap */}
      <div className="border-b border-[#ebe7de] p-6 md:border-b-0 md:border-r">
        <h2 className="text-lg font-semibold text-[#2f5d4a]">
          Skill Gap Heatmap
        </h2>

        <div className="mt-6 grid grid-cols-6 gap-1">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className={`h-6 rounded-sm ${
                index < 8
                  ? "bg-[#f5f0dd]"
                  : index < 16
                  ? "bg-[#e8e8cf]"
                  : index < 23
                  ? "bg-[#cbd9bf]"
                  : "bg-[#8eaa8b]"
              }`}
            />
          ))}
        </div>

        <div className="mt-3 flex justify-between text-xs text-[#8a978f]">
          <span>Low</span>
          <span>High →</span>
        </div>

        <button className="mt-5 text-sm text-[#6f7f76] hover:text-[#2f5d4a]">
          View details →
        </button>
      </div>

      {/* Regional Impact */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-[#2f5d4a]">
          Regional Impact
        </h2>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex-1">
            <div className="h-20 w-full rounded-xl bg-gradient-to-t from-[#dfe9dc] to-transparent" />

            <div className="mt-4">
              <p className="text-3xl font-semibold text-[#2f5d4a]">278</p>
              <p className="text-sm text-[#7b8b83]">
                Cross-border Collaborations
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-3xl font-semibold text-[#2f5d4a]">1,248</p>
              <p className="text-sm text-[#7b8b83]">Active Matches</p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-[#2f5d4a]">124</p>
              <p className="text-sm text-[#7b8b83]">
                Institutions Involved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactOverview;