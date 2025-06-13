'use client';

import { useEffect, useState } from 'react';

export default function BooksPage() {
  const [progress] = useState(62); // Adjust this as your book gets closer to launch
  const [launchDate] = useState(new Date('2025-07-01T00:00:00'));
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const distance = launchDate.getTime() - now.getTime();

      if (distance < 0) {
        setTimeLeft('🚀 Launched!');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / 1000 / 60) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m to launch`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // update every minute

    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <section className="max-w-xl mx-auto py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">📚 Book Launch</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        <b>📖 Coming Soon: Stories that bite.</b>
        They&apos;re not just books. They&apos;re confessions wrapped in fiction.
        The wait will be worth every word. Your next favorite read is {progress}% complete.
      </p>

      <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 overflow-hidden shadow-inner">
        <div
          className="bg-purple-500 h-full transition-all duration-700 ease-in-out"
          style={{ width: `${progress}%` }}
        />

        {/* 🚀 Rocket Emoji Floating Over Progress */}
        <div
          className="absolute top-[-24px] transition-all duration-700 ease-in-out text-xl"
          style={{ left: `calc(${progress}% - 1ch)` }}
        >
          🚀
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{timeLeft}</p>
    </section>
  );
}
