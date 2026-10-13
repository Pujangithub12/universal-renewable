import { CheckCircle2, ShieldCheck, Eye, Leaf } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const values = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "We aim to build systems that keep performing, and we stand behind our work.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "Honest advice and clear communication at every stage of a project.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    text: "We believe in clean solar energy as a long-term choice.",
  },
];

const approach = [
  "Careful planning before work begins",
  "Quality workmanship on every project",
  "Clear communication from start to finish",
];

export default function About() {
  return (
    <div>
      <PageHeader
        title="About Universal Renewable"
        subtitle="A solar energy company focused on careful planning and quality delivery."
      />

      {/* COMPANY */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-2">
            Who We Are
          </p>
          <h2 className="text-3xl font-bold text-brand-900 mb-5">
            Solar energy, done properly.
          </h2>
          <p className="text-brand-800/80 leading-relaxed mb-4">
            Universal Renewable Energy Pvt. Ltd. is a solar energy company
            based in Kathmandu, Nepal. We help our clients make use of clean
            solar power through well-planned and carefully delivered solar
            projects.
          </p>
          <p className="text-brand-800/80 leading-relaxed mb-4">
            Our work covers the whole journey of a solar project: energy
            consultation, system design, installation, and ongoing maintenance
            and support. By covering each stage, we aim to keep every project
            clear, consistent and free of surprises.
          </p>
          <p className="text-brand-800/80 leading-relaxed">
            Every project is different, so we start by understanding what you
            need and then work with you from the first discussion through to
            completion. Our goal is simple: solar systems that are safe,
            dependable and built to serve you well for years to come.
          </p>
        </div>

        <div className="rounded-[2rem] bg-brand-900 text-white p-10">
          <h3 className="text-2xl font-bold mb-6">Our approach</h3>
          <ul className="space-y-4">
            {approach.map((a) => (
              <li key={a} className="flex items-start gap-3 text-brand-100">
                <CheckCircle2 className="w-5 h-5 text-brand-300 shrink-0 mt-0.5" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-brand-50 border-t border-brand-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-900 mb-10">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl bg-white border border-brand-100 border-t-4 border-t-brand-500 p-8"
              >
                <v.icon className="w-7 h-7 text-brand-600 mb-4" />
                <h3 className="text-lg font-bold text-brand-900 mb-2">{v.title}</h3>
                <p className="text-brand-800/70 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}