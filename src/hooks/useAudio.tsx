import { useState, createContext, useContext, useMemo } from "react";

import sounds from "../assets/sounds";
import type { SoundType } from "../types";

const AudioContext =
  createContext<{
    audio: { [key: string]: HTMLAudioElement };
    getAudio: (name: SoundType) => HTMLAudioElement;
    globalVolume: number;
    changeGlobalVolume: (val: number) => void;
    isPaused: boolean;
    changeIsPaused: (val?: boolean) => void;
    pauseAll: () => void;
    playAll: () => void;
  } | null>(null);

export interface Props {
  children?: React.ReactNode;
}

export const AudioProvider = ({ children }: Props) => {
  const audio = useMemo(() => {
    let map: {
      [key: string]: HTMLAudioElement;
    } = {};

    (Object.keys(sounds) as SoundType[]).forEach((sound: SoundType) => {
      const player = new Audio(sounds[sound]);

      player.loop = true;

      map[sound] = player;
    });

    return map;
  }, [sounds]);

  const getAudio = (name: SoundType) => {
    return audio[name];
  };

  const [globalVolume, setGlobalVolume] = useState(1);

  const changeGlobalVolume = (val: number) => {
    setGlobalVolume(val);
  };

  const [isPaused, setIsPaused] = useState(false);

  const changeIsPaused = (val?: boolean) => {
    if (val) {
      setIsPaused(val);
    } else {
      setIsPaused((state) => !state);
    }
  };

  const pauseAll = () => {
    Object.values(audio).forEach((entry) => {
      entry.pause();
    });
    setIsPaused(true);
  };

  const playAll = () => {
    Object.values(audio).forEach((entry) => {
      if (entry.volume > 0) {
        entry.play();
      }
    });
    setIsPaused(false);
  };

  return (
    <AudioContext.Provider
      value={{
        audio: audio,
        getAudio: getAudio,
        globalVolume: globalVolume,
        changeGlobalVolume: changeGlobalVolume,
        isPaused: isPaused,
        changeIsPaused: changeIsPaused,
        pauseAll: pauseAll,
        playAll: playAll,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export default function useAudio() {
  const ctx = useContext(AudioContext);

  if (!ctx) {
    throw new Error("No context for <AudioProvider> found");
  } else {
    return ctx;
  }
}
