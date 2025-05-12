// คำนวณวันคบกัน
function updateDaysTogether() {
  const startDate = new Date("2025-04-17");
  const today = new Date();
  const diffTime = Math.abs(today - startDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("days-together").textContent = `เราคบกันมาแล้ว ${diffDays} วัน`;
}

// ตัวนับถอยหลังถึงวันครบรอบ 1 เดือน
function updateCountdown() {
  const targetDate = new Date("2025-05-17T00:00:00");
  const now = new Date();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "<strong>สุขสันต์วันครบรอบ 1 เดือนนะแพรวา!</strong>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / 1000 / 60) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;
}

// คำบอกรักสุ่มให้แพรวา
const loveMessages = [
  "รักแพรวาที่สุดในโลกเลย ",
  "ถึงอยู่ไกลแต่ใจเราอยู่ด้วยกันนะ",
  "แพรวาคือหัวใจของเค้านะ",
  "คิดถึงทุกวันเลยนะครับ",
  "ถ้ามี 100 ชีวิต เข้าก็รักแพรวาทุกชีวิตเลย",
  "ยิ้มของแพรวาทำให้วันของเราสดใสขึ้นเสมอ",
  "แค่เห็นชื่อแพรวาก็ยิ้มได้แล้ว",
  "รักนะไอ้เด็กดื้อของพี่"
];

function showRandomLoveMessage() {
  const randomIndex = Math.floor(Math.random() * loveMessages.length);
  document.getElementById("love-message").textContent = loveMessages[randomIndex];
}

// เริ่มทำงาน
updateDaysTogether();
updateCountdown();
setInterval(updateCountdown, 1000);
