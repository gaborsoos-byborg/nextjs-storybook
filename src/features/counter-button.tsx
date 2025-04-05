"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <Button className="cursor-pointer" onClick={() => setCount(count + 1)}>
      Counter: {count}
    </Button>
  );
};
