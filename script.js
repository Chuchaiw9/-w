// นับถอยหลังวันครบรอบ
const anniversaryDate = new Date("2025-06-17T00:00:00"); // เปลี่ยนวันที่ครบรอบตามต้องการ

function updateCountdown() {
  const now = new Date();
  const diff = anniversaryDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "สุขสันต์วันครบรอบ!";
    showPopup();
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").textContent =
    `${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// ฟังก์ชันแสดง popup ครบรอบ
function showPopup() {
  const popup = document.getElementById("anniversaryPopup");
  popup.style.display = "flex";
}
function closePopup() {
  const popup = document.getElementById("anniversaryPopup");
  popup.style.display = "none";
}

// ฟังก์ชันสุ่มคำบอกรัก
const loveMessages = [
  "รักเธอที่สุดในโลกเลยนะ 💖",
  "ขอบคุณที่อยู่เคียงข้างกันเสมอ 🥰",
  "เราจะรักกันไปนานๆ นะ 💕",
  "คิดถึงเธอมากทุกวันเลย 😘",
  "เป็นคนพิเศษของฉันเสมอ ❤️",
];

function showLoveMessage() {
  const index = Math.floor(Math.random() * loveMessages.length);
  document.getElementById("love-message").textContent = loveMessages[index];
}

// ฟังก์ชันเปิด-ปิดซองจดหมาย
const envelope = document.getElementById("envelope");

function toggleLetter() {
  envelope.classList.toggle("open");
}

// ฟังก์ชันเปิด-ปิดสมุดโน้ต
const notebook = document.getElementById("notebook");
const notebookCover = notebook.querySelector(".notebook-cover");

let notebookOpen = false;

function toggleNotebook() {
  if (!notebookOpen) {
    notebookCover.style.transform = "rotateY(-160deg)";
    notebookOpen = true;
  } else {
    notebookCover.style.transform = "rotateY(0deg)";
    notebookOpen = false;
  }
}

// เคลียร์ค่าเริ่มต้นเปิดปิดสมุด
notebookCover.style.transform = "rotateY(0deg)";
notebookOpen = false;

// --------------------
// เพิ่ม Heart Animation แบบง่าย ๆ
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
let hearts = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function random(min, max) {
  return Math.random() * (max - min) + min;
}

class Heart {
  constructor() {
    this.x = random(0, canvas.width);
    this.y = canvas.height + 50;
    this.size = random(10, 20);
    this.speed = random(1, 3);
    this.opacity = 1;
  }
  update() {
    this.y -= this.speed;
    this.opacity -= 0.01;
  }
  draw() {
    ctx.fillStyle = `rgba(255, 105, 180, ${this.opacity})`;
    ctx.beginPath();
    const topCurveHeight = this.size * 0.3;
    ctx.moveTo(this.x, this.y + topCurveHeight);
    // Left side of heart
    ctx.bezierCurveTo(
      this.x,
      this.y,
      this.x - this.size / 2,
      this.y,
      this.x - this.size / 2,
      this.y + topCurveHeight
    );
    // Bottom left
    ctx.bezierCurveTo(
      this.x - this.size / 2,
      this.y + (this.size + topCurveHeight) / 2,
      this.x,
      this.y + (this.size + topCurveHeight) / 2,
      this.x,
      this.y + this.size
    );
    // Bottom right
    ctx.bezierCurveTo(
      this.x,
      this.y + (this.size + topCurveHeight) / 2,
      this.x + this.size / 2,
      this.y + (this.size + topCurveHeight) / 2,
      this.x + this.size / 2,
      this.y + topCurveHeight
    );
    // Right side of heart
    ctx.bezierCurveTo(
      this.x + this.size / 2,
      this.y,
      this.x,
      this.y,
      this.x,
      this.y + topCurveHeight
    );
    ctx.closePath();
    ctx.fill();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (Math.random() < 0.05) {
    hearts.push(new Heart());
  }

  hearts.forEach((heart, index) => {
    heart.update();
    heart.draw();
    if (heart.opacity <= 0) {
      hearts.splice(index, 1);
    }
  });

  requestAnimationFrame(animate);
}

animate();
