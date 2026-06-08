"use client";

import { useEffect, useRef, useState } from "react";
import { KeyItem } from "@/types/keyboard";
import { keyboardRows } from "@/lib/consts/keyboard";

export default function KeyboardTester() {
  const [pressedCodes, setPressedCodes] = useState<Set<string>>(new Set());
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/keyboard/faaaa.mp3");

    const playFaaa = () => {
      const audio = audioRef.current;
      if (!audio) return;

      audio.currentTime = 0;
      void audio.play().catch((error) => {
        console.error("오디오를 재생하지 못했습니다.", error);
      });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      // setLastKey(`${event.key} / ${event.code}`);

      if (event.code === "KeyF" && !event.repeat) {
        playFaaa();
      }

      setPressedCodes((prev) => {
        const next = new Set(prev);
        next.add(event.code);
        return next;
      });
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      setPressedCodes((prev) => {
        const next = new Set(prev);
        next.delete(event.code);
        return next;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const handleVirtualKeyClick = (key: KeyItem) => {
    // setLastKey(`${key.label} / ${key.code}`);

    if (key.code === "Backspace") {
      // setValue((prev) => prev.slice(0, -1));
      return;
    }

    if (key.code === "Enter") {
      // setValue((prev) => `${prev}\n`);
      return;
    }

    if (key.code === "Space") {
      // setValue((prev) => `${prev} `);
      return;
    }

    if (key.code === "KeyF") {
      const audio = audioRef.current;
      if (!audio) return;

      audio.currentTime = 0;
      void audio.play().catch((error) => {
        console.error("오디오를 재생하지 못했습니다.", error);
      });
      return;
    }

    if (!key.value) return;

    // setValue((prev) => `${prev}${key.value}`);
  };

  return (
    <div className="bg-transparent px-6 py-10">
      <section className="overflow-x-auto rounded-2xl border border-border bg-transparent p-5 shadow-[0_4px_0_#020617]">
        <div className="flex min-w-max flex-col gap-2">
          {keyboardRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-2">
              {row.map((key) => {
                const isPressed = pressedCodes.has(key.code);
                return (
                  <button
                    key={key.code}
                    type="button"
                    onClick={() => handleVirtualKeyClick(key)}
                    className={[
                      "flex h-14 min-w-14 items-center justify-center rounded-xl border px-4 text-sm font-semibold transition",
                      isPressed
                        ? "translate-y-1 border-slate-600 bg-slate-600 text-white shadow-none"
                        : "border-border bg-transparent text-foreground shadow-[0_4px_0_#020617] hover:-translate-y-0.5 hover:bg-slate-600 active:translate-y-1 active:shadow-none",
                      key.className ?? "",
                    ].join(" ")}
                  >
                    {key.label}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
