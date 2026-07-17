import {
  Cloud,
  Network,
  Wallet,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Connector Layer",
    description:
      "Integrates external systems and services.",
    icon: Cloud,
  },
  {
    title: "Competency Graph",
    description:
      "Links people, skills and organisations.",
    icon: Network,
  },
  {
    title: "Credential Wallet Bridge",
    description:
      "Supports EUDI Wallet integration.",
    icon: Wallet,
  },
  {
    title: "Privacy & Consent",
    description:
      "Secure data sharing and permissions.",
    icon: ShieldCheck,
  },
];

function ServiceCards() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <button
            key={service.title}
            className="rounded-2xl border border-[#ebe7de] bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Icon
              size={28}
              className="text-[#7b9b87]"
            />

            <h3 className="mt-4 font-semibold text-[#2f5d4a]">
              {service.title}
            </h3>

            <p className="mt-2 text-sm text-[#7b8b83]">
              {service.description}
            </p>
          </button>
        );
      })}
    </section>
  );
}

export default ServiceCards;