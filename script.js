// IST check for Feb 3
function isFeb3IST() {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istTime = new Date(now.getTime() + istOffset);
  return istTime.getDate() === 3 && istTime.getMonth() === 1;
}

// Countdown
function updateCountdown() {
  const now = new Date();
  const target = new Date("2026-02-03T00:00:00+05:30");
  const diff = target - now;

  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countdown").innerText =
    `${days}d ${hours}h ${minutes}m left`;
}

window.onload = function () {
  if (isFeb3IST()) {
    document.getElementById("lockScreen").classList.add("hidden");
    document.getElementById("feb3Screen").classList.remove("hidden");
  } else {
    document.getElementById("feb3Screen").classList.add("hidden");
    document.getElementById("lockScreen").classList.remove("hidden");
    setInterval(updateCountdown, 1000);
  }
};
