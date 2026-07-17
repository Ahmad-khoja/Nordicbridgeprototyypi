import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Building2,
  CalendarDays,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

import Layout from "../components/layout/Layout";
import { challenges } from "../data/challenges";

function ChallengeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const challenge = challenges.find(
    (item) => String(item.id) === String(id)
  );

  if (!challenge) {
    return (
      <Layout>
        <div className="rounded-2xl border border-[#ebe7de] bg-white p-8">
          <h1 className="text-2xl font-semibold text-[#2f5d4a]">
            Challenge not found
          </h1>

          <button
            type="button"
            onClick={() => navigate("/challenges")}
            className="mt-6 rounded-xl bg-[#8aa083] px-5 py-3 text-sm text-white"
          >
            Back to Challenges
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <button
        type="button"
        onClick={() => navigate("/challenges")}
        className="mb-6 flex items-center gap-2 text-sm text-[#6f7f76] hover:text-[#2f5d4a]"
      >
        <ArrowLeft size={17} />
        Back to Challenges
      </button>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
        <main className="space-y-6">
          <section className="rounded-2xl border border-[#ebe7de] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="rounded-full bg-[#eef3eb] px-3 py-1 text-xs font-medium text-[#6f8f72]">
                  {challenge.category}
                </span>

                <h1 className="mt-4 text-3xl font-semibold text-[#2f5d4a] sm:text-4xl">
                  {challenge.title}
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#7b8b83]">
                  {challenge.summary}
                </p>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                Open
              </span>
            </div>
          </section>

          <section className="rounded-2xl border border-[#ebe7de] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold text-[#2f5d4a]">
              Description
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#6f7f76]">
              {challenge.description}
            </p>
          </section>

          <section className="rounded-2xl border border-[#ebe7de] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold text-[#2f5d4a]">
              Skills Required
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {challenge.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#eef3eb] px-4 py-2 text-sm text-[#5f7469]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </main>

        <aside className="space-y-6">
          <section className="rounded-2xl border border-[#ebe7de] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#2f5d4a]">
              Challenge Information
            </h2>

            <div className="mt-5 space-y-4 text-sm text-[#6f7f76]">
              <InfoRow
                icon={<Building2 size={17} />}
                label="Organization"
                value={challenge.organization}
              />

              <InfoRow
                icon={<MapPin size={17} />}
                label="Location"
                value={challenge.country}
              />

              <InfoRow
                icon={<GraduationCap size={17} />}
                label="Collaboration type"
                value={challenge.category}
              />

              <InfoRow
                icon={<CalendarDays size={17} />}
                label="Deadline"
                value={challenge.deadline}
              />
            </div>
          </section>

          <section className="rounded-2xl border border-[#ebe7de] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#2f5d4a]">
              Interested in this challenge?
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#7b8b83]">
              Submit your interest and connect with the challenge provider.
            </p>

            <button
              type="button"
              onClick={() => alert("Interest submitted successfully")}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#8aa083] px-5 py-3 text-sm text-white transition hover:bg-[#76956d]"
            >
              <CheckCircle2 size={17} />
              Apply to Challenge
            </button>
          </section>
        </aside>
      </div>
    </Layout>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 text-[#8aa083]">{icon}</div>

      <div>
        <p className="text-xs text-[#8a978f]">{label}</p>
        <p className="mt-1 font-medium text-[#2f5d4a]">{value}</p>
      </div>
    </div>
  );
}

export default ChallengeDetails;