import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  checked,
  onCheckedChange,
  ...props
}: Omit<React.ComponentProps<"button">, "checked" | "onChange"> & {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      data-state={checked ? "checked" : "unchecked"}
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-4 shrink-0 rounded-[4px] border shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-0",
        className
      )}
      {...props}
    >
      <Check
        className={cn(
          "size-3.5 shrink-0 transition-opacity duration-100",
          checked ? "opacity-100" : "opacity-0"
        )}
      />
    </button>
  )
}

export { Checkbox }
