import { useEffect, useRef, useState } from 'react';

/**
 * Adds the `is-visible` class to any element with the `reveal` class
 * when it scrolls into view. Returns a ref to attach to a container;
 * observes all `.reveal` descendants within it.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current ?? document;
    const elements = Array.from(root.querySelectorAll<HTMLElement>('.reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

/** Tracks the current scroll position to drive sticky-header styling. */
export function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

/** A tiny hash-based router. Returns the current path without the leading '#'. */
export function useHashRoute() {
  const [path, setPath] = useState(() => normalize(window.location.hash));

  useEffect(() => {
    const onHash = () => {
      setPath(normalize(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return path;
}

function normalize(hash: string) {
  const p = hash.replace(/^#/, '');
  return p === '' ? '/' : p;
}

export function navigate(path: string) {
  window.location.hash = path;
}
