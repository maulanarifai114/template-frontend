import { slugify } from "@/utils/slugify";
import clsx from "clsx";
import Link from "next/link";
import { useMemo } from "react";

export default function Container({ title, monospace, children }: { title: string; monospace?: boolean; children: React.ReactNode }) {
  const slug = useMemo(() => slugify(title), [title]);

  return (
    <div className="container relative mx-0 flex w-full flex-col items-start gap-4 border-b border-neutral-300 py-8">
      <div id={slug} className="absolute top-0"></div>
      <Link href={`#${slug}`}>
        <h1 className={clsx({ "rounded-lg border border-neutral-200 bg-neutral-100 p-1 px-2 font-monospace": monospace })}>{title}</h1>
      </Link>
      {children}
    </div>
  );
}
