import { Dialog as DialogContainer, DialogPanel } from "@headlessui/react";
import clsx from "clsx";

interface DialogProps {
  isOpen: boolean;
  setToggle: (value: boolean) => void;
  width?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Dialog({ isOpen, setToggle, width, children, className }: DialogProps) {
  const hasPaddingX = /\bpx-\d+\b/.test(className || "");
  const hasPaddingY = /\bpy-\d+\b/.test(className || "");
  const hasPadding = /\bp-\d+\b/.test(className || "");

  return (
    <DialogContainer open={isOpen} onClose={() => setToggle(false)} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/[0.75] p-4">
        <DialogPanel
          style={{ maxWidth: width ? width : "600px" }}
          className={clsx(
            className,
            {
              "px-6": !hasPadding && !hasPaddingX,
              "py-6": !hasPadding && !hasPaddingY,
            },
            "rounded-8 w-full bg-white",
          )}
        >
          {children}
        </DialogPanel>
      </div>
    </DialogContainer>
  );
}
