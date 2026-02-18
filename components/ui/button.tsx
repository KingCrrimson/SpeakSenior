import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export function Button({
  variant = "secondary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ",
        variant === "primary" &&
          "bg-blue-500 text-white hover:bg-blue-400 focus:ring-blue-400  transition-transform duration-200 ease-out  hover:shadow-lg",
        variant === "secondary" &&
          "bg-gray-200 text-gray-900  transition-transform duration-200 ease-out focus:ring-gray-400 ",
        variant === "ghost" &&
            "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300  transition-transform duration-200 ease-out ",
        variant === "outline" &&
          "border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-400  transition-transform duration-200 ease-out ",
        className
      )}
      {...props}
    />
  )
}