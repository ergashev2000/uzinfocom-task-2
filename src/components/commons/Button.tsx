import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-lg cursor-pointer active:scale-95 font-medium transition-all duration-200 ease-in-out";
  
  const variants = {
    primary: "bg-[#5254F1] hover:bg-[#5254F1]/90 text-white",
    secondary: "bg-white hover:bg-gray-50 text-[#5254F1] border border-gray-200",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
