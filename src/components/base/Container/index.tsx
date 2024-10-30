import clsx from "clsx";

export default function Container({ title, monospace, children }: { title: string; monospace?: boolean; children: React.ReactNode }) {
  return (
    <div className="container flex flex-col items-start gap-4 border-b border-neutral-300 py-8">
      <h1 className={clsx({ "rounded-lg border border-neutral-200 bg-neutral-100 p-1 px-2 font-monospace": monospace })}>{title}</h1>
      {children}
    </div>
  );
}
