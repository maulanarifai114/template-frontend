import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full text-white">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-neutral-900 px-4">
        <h1 className="text-center text-h3 font-extralight uppercase leading-normal tracking-widest lg:text-h1 lg:font-extralight">Raden's Template</h1>
        <div className="flex flex-wrap items-center justify-center gap-4 text-h8 font-extralight uppercase tracking-widest lg:text-h6 lg:font-extralight">
          <Link href="/components" className="">
            Components
          </Link>
          <Link href="/utilities" className="">
            Utilities
          </Link>
          <Link href="/hooks" className="">
            Hooks
          </Link>
          <Link href="/dashboard" className="">
            Dashboard
          </Link>
          <Link href="/auth/sign-up" className="">
            Sign Up
          </Link>
          <Link href="/auth/sign-in" className="">
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
