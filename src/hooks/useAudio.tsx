import { useEffect, useMemo, useState } from "react";

export default function useAudio(src: string) {
  const audio = useMemo(() => new Audio(src), [src]);

  audio.loop = true;

  const [volume, setVolume] = useState(0);

  const handleChangeVolume = (newVolume: number) => {
    setVolume(newVolume);
  };

  useEffect(() => {
    audio.volume = volume / 100;

    if (volume > 0) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => audio.pause();
  }, [volume]);

  return {
    audio: audio,
    volume: volume,
    changeVolume: handleChangeVolume,
  } as const;
}
