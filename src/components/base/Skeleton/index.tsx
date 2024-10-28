import clsx from "clsx";

export default function Skeleton({ className }: { className?: string }) {
  return <div className={clsx("animate-pulse bg-neutral-200", className)}></div>;
}