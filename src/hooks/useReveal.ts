import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Mark elements as hidden immediately
    el.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right').forEach((node) => {
      node.classList.add('hidden-anim');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right').forEach((node, i) => {
              setTimeout(() => {
                node.classList.remove('hidden-anim');
                node.classList.add('visible');
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
