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
    ctx.save();
    ctx.translate(h.x, h.y);
    ctx.scale(h.size / 30, h.size / 30); // ปรับขนาดหัวใจ
    ctx.beginPath();
    ctx.moveTo(0, -10);
    ctx.bezierCurveTo(-15, -30, -40, -5, 0, 20);
    ctx.bezierCurveTo(40, -5, 15, -30, 0, -10);
    ctx.fillStyle = "#ff66a3";
    ctx.fill();
    ctx.restore();

    h.y -= h.speed;
  }
  hearts = hearts.filter(h => h.y + h.size > 0);
}

function animate() {
  drawHearts();
  requestAnimationFrame(animate);
}

setInterval(updateCountdown, 1000);
setInterval(createHeart, 3000);
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const startDate = new Date("2025-04-17"); // วันเริ่มคบ
setInterval(() => {
  const today = new Date();
  const diffTime = today - startDate;
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("loveDays").textContent = `เราอยู่ด้วยกันมาแล้ว ${days} วัน`;
}, 1000);

