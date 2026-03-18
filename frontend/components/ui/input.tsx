import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white placeholder:text-gray-400 transition-all outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-red-500 aria-invalid:ring-1 aria-invalid:ring-red-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder:text-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 dark:disabled:bg-gray-800",
        className
      )}
      {...props}
    />
  )
}

export { Input }
