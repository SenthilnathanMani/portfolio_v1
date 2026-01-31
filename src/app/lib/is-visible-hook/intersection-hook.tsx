import { useState, useEffect } from "react";

type Options = IntersectionObserverInit & { once?: boolean };

export default function useOnScreen<T extends Element = Element>(
  ref: React.RefObject<T | null>,
  options: Options = {},
) {
  const { once, ...ioOptions } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsIntersecting(false);
        }
      });
    }, ioOptions);

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, ioOptions.root, ioOptions.rootMargin, ioOptions.threshold, once]);

  return isIntersecting;
}
