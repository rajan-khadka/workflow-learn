import { useEffect, useState } from "react";

export default function useCustomCount(value: number) {
  console.log("[Custom hook]");
  const [count, setCount] = useState(value);

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);

  return count;
}
