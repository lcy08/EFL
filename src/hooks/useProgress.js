import { useEffect, useState } from "react";

export function useProgress() {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("learnedWords");
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("learnedWords", JSON.stringify(progress));
  }, [progress]);

  function toggle(word) {
    if (!word) return; // safeguard
    setProgress(prev => ({
      ...prev,
      [word]: !prev[word]
    }));
  }

  function isLearned(word) {
    return !!progress[word];
  }

  return { progress, toggle, isLearned };
}
