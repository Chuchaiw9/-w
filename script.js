// วันที่ครบรอบ (17 พฤษภาคม 2025)
const anniversaryDate = new Date('2025-05-17');
const countdownElement = document.getElementById('countdown');
const giftBox = document.getElementById('giftBox');
const giftMessage = document.getElementById('giftMessage');

// ฟังก์ชันคำนวณและแสดงการนับถอยหลัง
function updateCountdown() {
  const today = new Date();
  const diffTime = anniversaryDate.getTime() - today.getTime();
  
  if (diffTime <= 0) {
    countdownElement.textContent = 'ถึงวันครบรอบแล้ว!';
    showGift();
  } else {
    const days = Math.floor(diffTime / (1000 * 3600 * 24));
    const hours = Math.floor((diffTime % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((diffTime % (1000 * 3600)) / (1000 * 60));
    countdownElement.textContent = `เหลือเวลา ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ถึงวันครบรอบ!`;
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
