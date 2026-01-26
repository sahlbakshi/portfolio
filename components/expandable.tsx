"use client";

import { ReactNode, useState } from "react";

type ExpandableProps = {
  label: ReactNode;
  children: ReactNode;
  suffix?: ReactNode;
};

export function Expandable({
  label,
  children,
  suffix,
}: ExpandableProps) {
  const [open, setOpen] = useState(false);

  return (
    <span className="inline">
      <button
        type="button"
        onClick={() => setOpen(open => !open)}
        className="cursor-pointer decoration-[1px] decoration-black/10 underline underline-offset-2 hover:text-[#0000FF] hover:decoration-[#0000FF]"
      >
        {label}
      </button>
      {suffix && <span>{suffix}</span>}

      {open && (
        <div className="mt-3 text-sm text-muted-foreground">
          {children}
        </div>
      )}
    </span>
  );
}
