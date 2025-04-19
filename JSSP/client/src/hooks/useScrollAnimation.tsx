import { useEffect, useRef, useState } from "react";

export function useScrollAnimation<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}

export function useScrollAnimationWithDelay<T extends HTMLElement>(threshold = 0.1, delay = 0) {
  const { ref, isVisible } = useScrollAnimation<T>(threshold);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isVisible) {
      timer = setTimeout(() => {
        setShouldRender(true);
      }, delay);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isVisible, delay]);

  return { ref, isVisible: shouldRender };
}

export function useNumberCounter(
  end: number,
  start = 0,
  duration = 2000,
  isStarted = false
) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isStarted) return;

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      
      setCount(value);
      countRef.current = value;

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [start, end, duration, isStarted]);

  return count;
}
