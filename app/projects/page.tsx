import { ImageIcon } from "lucide-react";
import PageHeader from "@/components/PageHeader";

// Replace this placeholder with your real projects. Copy an entry to add more.
// - `image`: put the photo in /public and set e.g. "/project-1.jpg" 
const projects = [
  {
    title: "Project name",
    desc: "",
    image: "",
  },
];

export default function Projects() {
  return (
    <div>
      <PageHeader
        title="Our Projects"
        subtitle="A look at the solar projects we are involved in."
      />

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="rounded-[2rem] border border-brand-100 bg-brand-50 overflow-hidden md:flex hover:shadow-lg transition-shadow"
          >
            <div className="md:w-2/5 aspect-[16/10] md:aspect-auto bg-brand-100 flex flex-col items-center justify-center text-brand-500 text-sm gap-2">
              {p.image ? (
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              ) : (
                <>
                  <ImageIcon className="w-8 h-8" />
                  Project photo
                </>
              )}
            </div>
            <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-brand-900 leading-snug">{p.title}</h3>
              {p.desc && (
                <p className="text-brand-800/70 text-sm leading-relaxed mt-3">{p.desc}</p>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
