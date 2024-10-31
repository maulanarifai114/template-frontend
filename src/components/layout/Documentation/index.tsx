import Button from "@/components/base/Button";
import { slugify } from "@/utils/slugify";
import Link from "next/link";
import React from "react";
import { MdArrowBack } from "react-icons/md";

export default function Documentation({ children, titles }: { children: React.ReactNode; titles: string[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="top-0 col-span-2 flex flex-col gap-4 px-4 pt-4 text-h6 lg:sticky lg:h-screen lg:py-8">
        <Link href="/" className="w-fit">
          <Button variant="light" className="p-2">
            <MdArrowBack />
          </Button>
        </Link>
        {titles.map((title) => (
          <Link key={title} href={`#${slugify(title)}`}>
            #{title}
          </Link>
        ))}
      </div>
      <div className="col-span-10 bg-white lg:sticky">{children}</div>
    </div>
  );
}
