function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = timeString;
}

setInterval(updateTime, 1000); // 1秒ごとに時刻を更新
updateTime(); // ページが読み込まれたときに最初の時刻を表示
