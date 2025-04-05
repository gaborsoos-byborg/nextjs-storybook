"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import "@/features/counter-button.style.css";

export const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <Button className="cursor-pointer red-text" onClick={() => setCount(count + 1)}>
      Counter: {count}
    </Button>
  );
};
