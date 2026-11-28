
import { useEffect, useState } from "react";
import { Leaf, X } from "lucide-react";

const messages = [
  "Give your clothes a second life. Exchange instead of throwing away!",
  "Every clothing exchange helps reduce textile waste.",
  "Choose sustainable fashion. Make every outfit count!",
  "Your pre-loved clothes can become someone's new favourite."
];

function SystemBanner() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((previous) => (previous + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="system-banner">
      <Leaf size={23} />

      <div>
        <strong>Sustainability Reminder</strong>
        <p>{messages[messageIndex]}</p>
      </div>

      <button onClick={() => setVisible(false)} aria-label="Close banner">
        <X size={19} />
      </button>
    </div>
  );
}

export default SystemBanner;
