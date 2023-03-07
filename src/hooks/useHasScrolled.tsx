import { useEffect, useState } from "react";

export default function useHasScrolled() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleHasScrolled = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHasScrolled);

    return () => window.removeEventListener("scroll", handleHasScrolled);
  }, []);

  return hasScrolled;
}
