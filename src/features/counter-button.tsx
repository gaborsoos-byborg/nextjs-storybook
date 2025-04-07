"use client";

import { useState, type FC } from "react";
import { Button } from "@/components/ui/button";
import "@/features/counter-button.style.css";

export interface CounterButtonProps {
  start?: number;
  multiply?: number;
}

export const CounterButton: FC<CounterButtonProps> = ({ start, multiply }) => {
  const [count, setCount] = useState(() => start || 0);

  return (
    <Button className="cursor-pointer red-text" onClick={() => setCount(count + (multiply || 1))}>
      Counter: {count}
    </Button>
  );
};
