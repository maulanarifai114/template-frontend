export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg bg-white p-4 shadow">{children}</div>;
}
