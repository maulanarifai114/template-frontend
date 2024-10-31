"use client";

import { MdCopyAll } from "react-icons/md";
import Button from "../Button";
import { useState } from "react";

export default function Code({ children, block = false, allowCopy = false }: { children?: React.ReactNode; block?: boolean; allowCopy?: boolean }) {
  const removeLeadingWhitespace = (code: string): string => {
    const lines = code.split("\n");
    const minIndentation = lines
      .filter((line) => line.trim().length > 0) // Exclude empty lines
      .map((line) => line.search(/\S/)) // Find the index of the first non-whitespace character
      .reduce((min, current) => Math.min(min, current), Infinity); // Find the minimum indentation level

    return lines
      .map((line) => line.slice(minIndentation)) // Remove leading whitespace based on minimum indentation
      .join("\n")
      .trim(); // Join the lines back together
  };

  const processedCode = typeof children === "string" ? removeLeadingWhitespace(children) : children;

  const [isCopied, setIsCopied] = useState(false);

  // Copy function
  const handleCopy = async () => {
    if (typeof processedCode === "string") {
      try {
        await navigator.clipboard.writeText(processedCode);
        setIsCopied(() => true);
        setTimeout(() => {
          setIsCopied(() => false);
        }, 2000);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    }
  };

  return !block ? (
    <code className="inline-block rounded-lg border border-neutral-200 bg-neutral-100 p-1 font-monospace">{processedCode}</code>
  ) : (
    <pre className="relative inline-block max-w-full overflow-auto rounded-lg border border-neutral-200 bg-neutral-100 p-2 pr-8 font-monospace">
      <code className="w-fit whitespace-pre p-0">{processedCode}</code>
      {allowCopy && (
        <Button onClick={handleCopy} variant="custom" className="absolute right-2 top-2 border-0 bg-neutral-100 p-0">
          <MdCopyAll className="text-[16px]" />
          {isCopied && <span>Copied</span>}
        </Button>
      )}
    </pre>
  );
}
