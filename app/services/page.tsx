import Link from "next/link";
import { ArrowRight, ClipboardList, Sun, Wrench, Lightbulb } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const services = [
  {
    icon: Lightbulb,
    title: "Energy Consultation",
    desc: "We start by understanding how you use energy and what you want to achieve. From there we look at your site and explain the solar options that could suit you.",
    points: ["Review of your energy needs", "Site assessment", "Clear explanation of the options"],
  },
  {
    icon: ClipboardList,
    title: "Design",
    desc: "Once the approach is agreed, we prepare a practical solar system design. The plan covers sizing and layout so you know what to expect before work begins.",
    points: ["System sizing", "Layout planning", "A clear plan before work starts"],
  },
  {
    icon: Sun,
    title: "Installation",
    desc: "Our team carries out the installation with attention to safety and quality. Before handover, the system is tested so you can be confident it is ready to use.",
    points: ["Safe, careful workmanship", "Testing before handover", "Updates during the work"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Solar systems perform best when they are looked after. We offer routine checks and are available to help if you have questions or something needs attention.",
    points: ["Routine system checks", "Help when you need it", "Guidance on everyday use"],
  },
];

export default function Services() {
  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="Solar energy solutions, from planning to long-term support."
      />

      {/* SERVICE CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-3xl border border-brand-100 bg-white p-8 md:p-10 hover:shadow-lg hover:border-brand-300 transition-all"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center text-white shrink-0">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-brand-900">{s.title}</h3>
            </div>
            <p className="text-brand-800/75 text-sm leading-relaxed mb-5">{s.desc}</p>
            <ul className="space-y-2">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-brand-900">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-[2rem] bg-brand-100 p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-brand-900">Not sure where to start?</h3>
            <p className="text-brand-800/75 text-sm mt-2">
              Get in touch and we will help you work out the right first step.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-brand-700 text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-brand-800 transition-colors inline-flex items-center gap-2 self-start md:self-auto shrink-0"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}