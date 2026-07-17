import {
  ShieldCheck,
  Wallet,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";

import crossBorder from "../../assets/images/Cross-border.png";
import npa from "../../assets/images/NPA.png";

function RightSidebar() {
  return (
    <div className="space-y-8">

      {/* Cross-border Pollination */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-[#2f5d4a]">
          Cross-border Pollination
        </h2>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <img
            src={crossBorder}
            alt="Cross-border"
            className="w-full rounded-xl"
          />
        </div>
      </section>

      {/* Trust Framework */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-[#2f5d4a]">
          Trust & Credentialing Framework
        </h2>

        <div className="rounded-2xl bg-white p-5 shadow-sm">

          <div className="space-y-4">

            <Item icon={<ShieldCheck />} title="Identity Verification" />
            <Item icon={<BadgeCheck />} title="Open Badges" />
            <Item icon={<Wallet />} title="EUDI Wallet Bridge" />
            <Item icon={<ChevronRight />} title="Verifiable Credentials" />

          </div>

        </div>
      </section>

      {/* Analytics */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-[#2f5d4a]">
          NPA Region Analytics
        </h2>

        <div className="rounded-2xl bg-white p-5 shadow-sm">

          <img
            src={npa}
            alt="Analytics"
            className="w-full rounded-xl"
          />

        </div>
      </section>

    </div>
  );
}

function Item({ icon, title }) {
  return (
    <button className="flex w-full items-center gap-4 rounded-xl p-3 transition hover:bg-[#f5f3ee]">
      <div className="text-[#8aa083]">
        {icon}
      </div>

      <span className="text-sm">
        {title}
      </span>
    </button>
  );
}

export default RightSidebar;