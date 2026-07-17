import { useState } from "react";
import { Plus, X } from "lucide-react";

function SkillFilters() {
  const [skills, setSkills] = useState([
    "GIS & Data",
    "AI",
    "Marine Science",
    "Policy Design",
  ]);

  const removeSkill = (skill) => {
    setSkills(skills.filter((item) => item !== skill));
  };

  const addSkill = () => {
    const newSkill = prompt("Add new skill");

    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-[#2f5d4a]">
          Skill Filters
        </h2>

        <button
          onClick={addSkill}
          className="flex items-center gap-2 rounded-lg bg-[#8aa083] px-4 py-2 text-sm text-white hover:bg-[#76956d]"
        >
          <Plus size={16} />
          Add Skill
        </button>
      </div>

      <div className="rounded-2xl border border-[#ebe7de] bg-white p-6 shadow-sm">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 rounded-full bg-[#eef3eb] px-4 py-2 text-sm text-[#2f5d4a]"
            >
              {skill}

              <button onClick={() => removeSkill(skill)}>
                <X size={14} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-[#f8f6f1] p-8 text-center">
          <h3 className="font-semibold text-[#2f5d4a]">
            Thesis, Internship & Research Collaboration
          </h3>

          <p className="mt-3 text-sm text-[#7b8b83]">
            Workflow preview
          </p>
        </div>
      </div>
    </section>
  );
}

export default SkillFilters;