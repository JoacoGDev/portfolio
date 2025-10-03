import { useState, useEffect } from 'react';

export function useScrollspy(ids: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      const elements = ids
        .map(id => {
          const element = document.getElementById(id);
          if (!element) return { id, top: 0 };
          return {
            id,
            top: element.getBoundingClientRect().top + scroll
          };
        })
        .filter(item => item.top - offset <= scroll);

      setActiveId(elements[elements.length - 1]?.id || "");
    };

    listener();
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, [ids, offset]);

  return activeId;
}