"use client"

import Button from "./components/Button";
import Text from "./components/Text";

export default function Home() {
  return (
    <div>
      <Text as="h1">Welcome to the Design System</Text>
      <Text as="p">
        This is a simple design system built in Next.js with TypeScript.
      </Text>
      <Button
        variant="primary"
        onClick={() => alert("Primary button clicked!")}
      >
        Primary Button
      </Button>
      <Button
        variant="secondary"
        onClick={() => alert("Secondary button clicked!")}
      >
        Secondary Button
      </Button>
    </div>
  );
}
