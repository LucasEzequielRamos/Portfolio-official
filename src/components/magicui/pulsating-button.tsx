"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export default function PulsatingButton({
  className,
  children,
  pulseColor = "#7a4ae4",
  duration = "1s",
  ...props
}: PulsatingButtonProps) {
  return (
    <button
      className={cn(
        "relative  text-center cursor-pointer flex justify-center items-center  text-white  p-2 text-nowrap  border-[1px] text-sm border-primary bg-primary rounded-lg ",
        className
      )}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="relative z-10  md:text-lg">{children}</div>
      <div className="absolute duration-800 top-1/2 left-1/2 w-[120%] h-[135%] rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
    </button>
  );
}
