"use client";

import { useEffect, useState } from "react";

// Live local time in the given IANA zone. Renders a placeholder on the server
// so hydration never mismatches, then ticks every 15s on the client.
export default function LocalTime({ timeZone, label }) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hour12: false });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, [timeZone]);

  const [h, m] = (time || "--:--").split(":");
  return (
    <span className="local-time mono">
      {label} {h}
      <span className="blink">:</span>
      {m}
    </span>
  );
}
