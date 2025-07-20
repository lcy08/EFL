export function useSpeak() {
  return (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-GB';
    speechSynthesis.speak(utter);
  };
}
