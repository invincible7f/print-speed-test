
import { useState,useEffect } from "react"


export const useTimer = (initialTime: number = 60) => {
  const [timer, setTimer] = useState<number>(initialTime)
  const [isActive, setIsActive] = useState<boolean>(false)

  const isActiveToggle = () => setIsActive(true)
  const reset = () => {
    setTimer(initialTime)
    setIsActive(false)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
    } else if (timer === 0) {
      setIsActive(false)
    }

    return () => clearInterval(interval)
  }, [isActive, timer])

  return { timer, isActiveToggle , isActive, reset }
}