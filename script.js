// วันที่เริ่มต้น (17 เมษายน 2025)
const startDate = new Date('2025-04-17');
const countdownElement = document.getElementById('countdown');
const giftBox = document.getElementById('giftBox');
const giftMessage = document.getElementById('giftMessage');

// ฟังก์ชันคำนวณและแสดงการนับถอยหลัง
function updateCountdown() {
  const today = new Date();
  const diffTime = startDate.getTime() - today.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));

  if (diffDays <= 0) {
    countdownElement.textContent = 'ถึงวันที่ครบรอบแล้ว!';
    showGift();
  } else {
    countdownElement.textContent = `เหลือเวลา ${diffDays} วัน ถึงวันครบรอบ!`;
  }
}

// ฟังก์ชันแสดงข้อความเซอร์ไพรส์เมื่อถึงวันครบรอบ
function showGift() {
  const messages = [
    "ขอบคุณสำหรับทุกช่วงเวลาที่ดี รักเธอมากนะ! 💖",
    "1 เดือนแล้วที่เราคบกัน! ขอให้รักเรายั่งยืนตลอดไป 🥰",
    "เรามีความสุขมากๆ ที่ได้มีเธอในชีวิต! ❤️"
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  giftMessage.textContent = randomMessage;
  giftBox.style.display = 'block';
  setTimeout(() => giftBox.style.display = 'none', 8000); // ซ่อนกล่องของขวัญหลังจาก 8 วินาที
}

// เรียกใช้ฟังก์ชันในการอัพเดตนับถอยหลังทุกวินาที
setInterval(updateCountdown, 1000);

// เริ่มต้นการแสดงการนับถอยหลัง
updateCountdown();
