'use client';

interface MapMyVisitorsProps {
  id?: string;
  statisticsUrl?: string;
  title?: string;
}

export default function MapMyVisitors({ id, statisticsUrl, title = 'Visitors' }: MapMyVisitorsProps) {
  if (!id) return null;

  const mapImageUrl = `https://mapmyvisitors.com/map.png?d=${encodeURIComponent(id)}&cl=ffffff`;

  return (
    <section className="mt-12 flex flex-col items-center text-center" aria-label={title || 'Visitor map'}>
      {title && <h2 className="mb-4 text-xl font-serif font-bold text-primary">{title}</h2>}
      <a
        href={statisticsUrl || `https://mapmyvisitors.com/`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white p-2 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
        title="View detailed visitor statistics"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mapImageUrl}
          alt="MapMyVisitors visitor map"
          className="block h-auto max-w-full"
        />
      </a>
    </section>
  );
}
