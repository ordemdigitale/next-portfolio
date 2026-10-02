import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 outline-none transition-all",
        "focus:border-peach-400 focus:ring-1 focus:ring-peach-400",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
