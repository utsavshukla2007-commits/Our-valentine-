// IST DATE CHECK FOR FEB 3
function isFeb3IST() {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istTime = new Date(now.getTime() + istOffset);
  return istTime.getDate() === 3 && istTime.getMonth() === 1;
}

// COUNTDOWN BEFORE FEB 3
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

// TYPEWRITER EFFECT
const message = `
I know, my love, you were afraid of the “three-month curse.”
But look at us… we made it here with so much happiness.
Don’t worry, my darling. We’re in this for the long run.
And when I say forever… I truly mean forever.
`;

function typeWriter() {
  let i = 0;
  const speed = 40;
  const textElement = document.getElementById("typeText");

  function typing() {
    if (i < message.length) {
      textElement.innerHTML += message.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// ON LOAD
window.onload = function () {
  if (isFeb3IST()) {
    document.getElementById("lockScreen").classList.add("hidden");
    document.getElementById("feb3Screen").classList.remove("hidden");
    typeWriter();
  } else {
    setInterval(updateCountdown, 1000);
  }
};
