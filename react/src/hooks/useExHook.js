import { useState } from "react";

const useExHook = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount((prev) => prev + 1);
  return { count, increase };
};

export default useExHook;
