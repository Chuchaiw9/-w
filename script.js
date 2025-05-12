// script.js
const targetDate = new Date("2025-05-17T00:00:00");
const countdownEl = document.getElementById("countdown");
const popup = document.getElementById("anniversaryPopup");
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) {
    countdownEl.textContent = "วันนี้คือวันครบรอบ 1 เดือนของเราแล้ว!";
    popup.style.display = "flex";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `เหลืออีก ${days} วัน ${hours} ชม. ${minutes} นาที ${seconds} วิ`;
}

function showLoveMessage() {
  const messages = [
    "รักแพรวามากที่สุดในโลก!",
    "ถึงจะอยู่ไกลแต่ใจใกล้เสมอ",
    "คิดถึงเธอทุกวันเลยนะ",
    "อยู่ด้วยกันตลอดไปนะ",
    "แพรวาคือคนพิเศษของเค้า"
  ];
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("love-message").textContent = randomMsg;
}

function closePopup() {
  popup.style.display = "none";
}

// Heart animation
let hearts = [];
function createHeart() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1
  });
}
function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < hearts.length; i++) {
    let h = hearts[i];
    ctx.beginPath();
    ctx.fillStyle = "#ff66a3";
    ctx.moveTo(h.x, h.y);
    ctx.arc(h.x - h.size / 4, h.y, h.size / 2, 0, Math.PI * 2);
    ctx.arc(h.x + h.size / 4, h.y, h.size / 2, 0, Math.PI * 2);
    ctx.lineTo(h.x, h.y + h.size);
    ctx.fill();
    h.y -= h.speed;
  }
  hearts = hearts.filter(h => h.y + h.size > 0);
}

function animate() {
  drawHearts();
  requestAnimationFrame(animate);
}

setInterval(updateCountdown, 1000);
setInterval(createHeart, 1500);
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

