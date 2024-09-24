"use client"

type TextProps = {
    children: React.ReactNode;
    as?: 'p' | 'h1' | 'h2' | 'h3';
  };
  
  export default function Text({ children, as = 'p' }: TextProps) {
    const Component = as;
    return <Component>{children}</Component>;
  }
  