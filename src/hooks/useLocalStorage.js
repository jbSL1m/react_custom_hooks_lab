import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? stored : initialValue;
  });

  useEffect(() => {
    if (value === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, value);
    }
  }, [key, value]);

  return [value, setValue];
}
