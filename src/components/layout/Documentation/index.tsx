"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Button from "@/components/base/Button";
import clsx from "clsx";
import Link from "next/link";
import { MdArrowBack, MdMenu } from "react-icons/md";
import slugify from "slugify";

export default function Documentation({ children, titles }: { children: React.ReactNode; titles: string[] }) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState("0px");

  const handleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`); // Set the height to the content's full height
    } else {
      setContentHeight("0px"); // Collapse
    }
  }, [isOpen]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    });

    titles.forEach((title) => {
      const section = document.getElementById(slugify(title));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [titles]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="sticky top-0 z-50 col-span-2 flex flex-col overflow-hidden bg-white px-4 py-4 text-h6 border-b border-neutral-200 lg:h-screen lg:py-8 lg:borderb lg:border-r lg:border-neutral-200">
        <div className="flex gap-3">
          <Link href="/" className="w-fit">
            <Button variant="light" className="p-2">
              <MdArrowBack />
            </Button>
          </Link>
          <Button onClick={handleOpen} variant="light" className="ml-auto p-2 lg:hidden">
            <MdMenu />
          </Button>
        </div>
        <div ref={contentRef} style={{ height: contentHeight }} className={clsx("overflow-hidden transition-[height] duration-300 ease-in-out lg:h-auto")}>
          <div className="flex flex-col gap-4 pt-4">
            {titles.map((title) => {
              const slug = slugify(title);
              return (
                <Link key={title} href={`#${slug}`} className={activeSection === slug ? "text-primary-500" : ""}>
                  #{title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-span-10 bg-white lg:sticky">{children}</div>
    </div>
  );
}
