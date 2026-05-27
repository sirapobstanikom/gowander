import { useState, useEffect } from "react"

function getTimeLeft(endDate) {
  const diff = new Date(endDate) - new Date()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function TimeBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center min-w-[3.5rem]">
      <span className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-white/60 mt-1">
        {label}
      </span>
    </div>
  )
}

export default function CountdownTimer({ endDate, compact = false }) {
  const [time, setTime] = useState(() => getTimeLeft(endDate))

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft(endDate)), 1000)
    return () => clearInterval(timer)
  }, [endDate])

  if (compact) {
    return (
      <div className="flex items-center gap-2 text-sm font-medium text-brand-red">
        <span className="tabular-nums">
          {time.days} วัน {time.hours} ชม. {time.minutes} น.
        </span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <TimeBlock value={time.days} label="วัน" />
      <span className="text-gold text-xl font-light">:</span>
      <TimeBlock value={time.hours} label="ชม." />
      <span className="text-gold text-xl font-light">:</span>
      <TimeBlock value={time.minutes} label="นาที" />
      <span className="text-gold text-xl font-light">:</span>
      <TimeBlock value={time.seconds} label="วินาที" />
    </div>
  )
}
