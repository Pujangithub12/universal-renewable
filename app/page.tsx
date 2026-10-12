import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList, Sun, Wrench } from "lucide-react";

const principles = [
  "Careful planning",
  "Quality workmanship",
  "Clear communication",
];

const highlights = [
  {
    icon: ClipboardList,
    title: "Planning & Design",
    desc: "Site assessment and solar system design matched to your energy needs.",
  },
  {
    icon: Sun,
    title: "Solar Installation",
    desc: "Solar systems installed with care and tested before handover.",
  },
  {
    icon: Wrench,
    title: "Support & Maintenance",
    desc: "Regular checks and prompt support to keep your system performing well.",
  },
];

const steps = [
  { title: "Discuss", desc: "We listen to your needs and look at your site." },
  { title: "Design", desc: "We prepare a clear plan for your solar system." },
  { title: "Install", desc: "We carry out the work safely and test the system." },
  { title: "Support", desc: "We stay available to help after handover." },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-100 via-brand-50 to-white">
        {/* soft background glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-brand-200/40 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 lg:pt-32 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-200 text-brand-800 text-xs font-semibold uppercase tracking-widest px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Universal Renewable
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-brand-900">
            Clean solar power,{" "}
            <span className="text-brand-600">designed with care.</span>
          </h1>
          <p className="text-brand-800/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-6">
            We help our clients move to solar energy through careful planning,
            quality installation and clear communication.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-9">
            <Link
              href="/contact"
              className="bg-brand-700 text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-brand-800 transition-colors inline-flex items-center gap-2"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="bg-white border border-brand-300 text-brand-800 text-sm font-semibold px-8 py-4 rounded-full hover:bg-brand-50 transition-colors"
            >
              Our Projects
            </Link>
          </div>
        </div>

        {/* principles strip */}
        <div className="relative max-w-5xl mx-auto px-6 pb-20">
          <div className="bg-white rounded-3xl border border-brand-100 shadow-sm grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-brand-100">
            {principles.map((p) => (
              <div key={p} className="flex items-center justify-center gap-3 px-6 py-6">
                <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0" />
                <span className="text-sm font-semibold text-brand-900">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-2">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-900">
            Everything you need for a solar project.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-brand-50 border border-brand-100 p-8 hover:bg-white hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center text-white mb-5">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-2">{item.title}</h3>
              <p className="text-brand-800/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-brand-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-300 mb-2">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            A simple, clear process.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="border-t border-brand-600 pt-5">
                <span className="text-brand-300 text-sm font-semibold">0{i + 1}</span>
                <h3 className="text-xl font-bold mt-2 mb-2">{s.title}</h3>
                <p className="text-brand-100/70 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-brand-100 rounded-[2rem] p-10 md:p-14 text-center">
          <h3 className="font-serif text-2xl md:text-4xl font-bold text-brand-900">
            Planning a solar project?
          </h3>
          <p className="text-brand-800/75 text-sm md:text-base max-w-lg mx-auto mt-4 leading-relaxed">
            Tell us what you have in mind and we will get back to you with the next steps.
          </p>
          <Link
            href="/contact"
            className="mt-8 bg-brand-700 text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-brand-800 transition-colors inline-flex items-center gap-2"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}