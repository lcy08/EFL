import React from 'react';

export default function WordCard({ word, onSpeak }) {
  return (
    <div className="bg-white rounded shadow p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold">{word["English Word"]}</h2>
      <p className="italic">{word["Part of Speech"]}• {word.Level}</p>
      <p className="mb-2">{word["Indonesian Meaning"]}</p>
      <button className="px-3 py-1 bg-green-500 text-white rounded" onClick={() => onSpeak(word["English Word"])}>
        🔊 Speak
      </button>
    </div>
  );
}
