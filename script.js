// การเปิดปิดซองจดหมาย
const envelope = document.getElementById('envelope');
function toggleLetter() {
  envelope.classList.toggle('open');
}

// ระบบนับเวลาถอยหลัง
const targetDate = new Date("2025-05-17T00:00:00");
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) {
    countdownEl.textContent = "วันนี้คือวันครบรอบ 1 เดือนของเราแล้ว!";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `เหลืออีก ${days} วัน ${hours} ชม. ${minutes} นาที ${seconds} วิ`;
}

setInterval(updateCountdown, 1000);

// ระบบนับวันที่คบกัน
const startDate = new Date("2025-04-17"); // วันเริ่มคบ
function updateLoveDays() {
  const today = new Date();
  const diffTime = today - startDate;
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("loveDays").textContent = `เราอยู่ด้วยกันมาแล้ว ${days} วัน`;
}

updateLoveDays(); // เรียกใช้ฟังก์ชันนี้ทันที
setInterval(updateLoveDays, 1000); // อัพเดททุกๆ 1 วินาที

// ระบบสุ่มคำบอกรัก
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
