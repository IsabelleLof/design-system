"use client";

import React from "react";
import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const className =
    variant === "primary" ? "btn btn-primary" : "btn btn-secondary";
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
