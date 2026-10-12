export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-gradient-to-b from-brand-100 to-brand-50 border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 text-center">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent mb-5" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-900">
          {title}
        </h1>
        {subtitle && (
          <p className="text-brand-800/70 mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
