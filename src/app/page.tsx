import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full text-white">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-neutral-900 px-4">
        <h1 className="text-center text-h3 font-extralight leading-normal tracking-widest lg:text-h1 lg:font-extralight">XNGINE v1</h1>
        <div className="flex flex-wrap justify-center gap-4 text-h8 font-extralight uppercase tracking-widest lg:text-h6 lg:font-extralight">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/components" className="">
                Components
              </Link>
            </li>
            <li>
              <Link href="/utilities" className="">
                Utilities
              </Link>
            </li>
            <li>
              <Link href="/hooks" className="">
                Hooks
              </Link>
            </li>
            <li>
              <Link href="/state" className="">
                State
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/dashboard" className="">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/auth/sign-up" className="">
                Sign Up
              </Link>
            </li>
            <li>
              <Link href="/auth/sign-in" className="">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
