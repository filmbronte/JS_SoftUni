function timeToWalk(steps, footprint, speed) {
    const meters = steps * footprint;
    const speedSeconds = speed / 3.6;
    const rest = Math.floor(meters / 500);
    const time = meters / speedSeconds;

    // const result = (time * 0.0166667) + rest;
    const timeMin = Math.floor(time/60);
    const timeSec = Math.round(time - timeMin * 60);
    const timeHr = Math.floor(time/3600)
    const finalTime = timeMin + rest;

    const hh = timeHr < 10 ? "0" : "";
    const mm = finalTime < 10 ? "0" : "";
    const ss = timeSec < 10 ? "0" : "";
    console.log(`${hh + timeHr}:${mm + finalTime}:${ss + timeSec}`)
}

timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.70, 5.5)