function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().slice(-12, -4);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[now.getUTCDay()];

    document.getElementById('currentTimeUTC').textContent = utcTime;
    document.getElementById('currentDay').textContent = dayOfWeek;
}

setInterval(updateTime, 1000);
updateTime();
