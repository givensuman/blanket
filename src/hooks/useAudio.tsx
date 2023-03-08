import { useState } from "react"

import sounds from "../assets/sounds"
import type { SoundType } from "../types"  

const audio: {
    [key: string]: HTMLAudioElement,
  } = {};

(Object.keys(sounds) as SoundType[]).forEach((sound: SoundType) => {
  const player = new Audio(sounds[sound])

  player.loop = true
  
  audio[sound] = player
})

export default function useAudio(name?: SoundType) {
  const [ isPaused, setIsPaused ] = useState(false)

  const pauseAll = () => {
    Object.values(audio).forEach(entry => {
      entry.pause()
    })
    setIsPaused(true)
  }

  const playAll = () => {
    Object.values(audio).forEach(entry => {
      if (entry.volume > 0) {
        entry.play()
      }
    })
    setIsPaused(false)
  }

  if (name) {
    return {
      audio: audio[name],
      pauseAll: pauseAll,
      playAll: playAll,
      isPaused: isPaused
    }
  }

  return {
    pauseAll: pauseAll,
    playAll: playAll,
    isPaused: isPaused
  }
}
