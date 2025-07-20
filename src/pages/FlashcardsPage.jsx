import { useProgress } from '../hooks/useProgress';
import { useSpeak } from '../hooks/useSpeak';
import { useState } from 'react';
import WordCard from '../components/WordCard';
import words from '../data/words-a1.json'; // Assuming words.json is in the data folder

export default function FlashcardsPage() {

  const speak = useSpeak();
  const a1Words = words.filter(w => w.Level === 'A1');
  const [index, setIndex] = useState(0);
  const { isLearned, toggle, progress } = useProgress(a1Words);

  const currentWord = a1Words[index];
  const totalLearned = a1Words.filter(word => isLearned(word["English Word"])).length;

  return (
    <div>
      {currentWord && (
        <>
          <WordCard word={currentWord} onSpeak={speak} />
          <div className="mt-2 flex items-center gap-4">
            <label>
              <input
                type="checkbox"
                checked={isLearned(currentWord["English Word"])}
                onChange={() => toggle(currentWord["English Word"])}
              />
              <span className="ml-2">Mark as Learned</span>
            </label>
          </div>

          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setIndex((index + 1) % a1Words.length)}
          >
            Next
          </button>

          <p className="mt-4 text-sm text-gray-600">
            Progress: {totalLearned} / {a1Words.length} words learned
          </p>
        </>
      )}
    </div>
  );
}
