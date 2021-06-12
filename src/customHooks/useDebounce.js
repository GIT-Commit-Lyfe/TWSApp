import React, {useState, useEffect} from 'react';
export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // sets value to debouncedvalue after specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // resets timeout everytime value changes
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}
