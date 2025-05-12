// ฟังก์ชันสุ่มคำบอกรัก
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

// ฟังก์ชันเปิด/ปิดซองจดหมาย
const envelope = document.getElementById('envelope');
function toggleLetter() {
  envelope.classList.toggle('open');
}

// ตัวจับเวลานับวันครบรอบ
const countdownDate = new Date("2025-05-17").getTime(); // วันที่ครบรอบ 1 เดือน
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  countdownElement.textContent = `${days} วัน`;

  if (distance < 0) {
    clearInterval(interval);
    countdownElement.textContent = "ครบ 1 เดือนแล้ว!";
    document.getElementById("anniversaryPopup").style.display = "flex";
  }
}

const interval = setInterval(updateCountdown, 1000);

// ปิดป๊อปอัพ
function closePopup() {
  document.getElementById("anniversaryPopup").style.display = "none";
}
