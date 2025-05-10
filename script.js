// วันครบรอบ (ตั้งไว้ 17 พ.ค. เวลาเที่ยงคืน)
const targetDate = new Date("2025-05-17T00:00:00").getTime();

const countdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) return;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = String(days).padStart(2, '0');
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
};

// อัปเดตทุกวินาที
setInterval(countdown, 1000);
countdown();

// คำบอกรักหลายแบบ
const loveMessages = [
  "รักเธอที่สุดในโลกเลยนะ",
  "อยู่กับเธอแล้วโลกมันหวานไปหมด",
  "คิดถึงเธอทุกวันเลยจ้า",
  "แฟนน่ารักที่สุดเลยรู้มั้ย",
  "ถ้าเธอเป็นดวงดาว ฉันจะเป็นท้องฟ้า",
  "ยิ้มของเธอคือพลังงานของฉัน",
  "เธอคือบ้านของหัวใจ",
  "ไม่มีเธอวันไหน ใจก็หวิวทุกที",
  "รักไม่มีวันหมดอายุ เพราะมีเธอ",
  "เธอเป็นเหตุผลที่ทำให้ฉันยิ้มในทุกวัน"
];

function showLoveMessage() {
  const msg = loveMessages[Math.floor(Math.random() * loveMessages.length)];
  const msgEl = document.getElementById("love-message");
  msgEl.textContent = msg;
  msgEl.style.opacity = 0;
  msgEl.style.transform = "scale(0.8)";
  setTimeout(() => {
    msgEl.style.opacity = 1;
    msgEl.style.transform = "scale(1)";
  }, 50);
}
