// วันที่เริ่มคบ
const startDate = new Date("2025-04-17");

// อัปเดตจำนวนวันที่คบกัน
function updateDaysTogether() {
  const today = new Date();
  const timeDiff = today - startDate;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  document.getElementById("daysTogether").textContent = `${days} วัน`;
}
updateDaysTogether();

// นับถอยหลังถึงวันครบรอบรายเดือน
function updateCountdown() {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  // กำหนดวันครบรอบเดือนถัดไป
  let nextMonth = currentMonth + 1;
  let year = currentYear;
  if (nextMonth > 12) {
    nextMonth = 1;
    year += 1;
  }

  const targetDate = new Date(`${year}-${String(nextMonth).padStart(2, '0')}-17T00:00:00`);
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").textContent = 
    `อีก ${days} วัน ${hours} ชม. ${minutes} นาที ${seconds} วิ ถึงวันครบรอบ`;

  setTimeout(updateCountdown, 1000);
}
updateCountdown();

// สุ่มคำบอกรัก
const loveMessages = [
  "รักแพรวาทุกวันเลยนะ",
  "คิดถึงแพรวาทุกวินาที",
  "ขอบคุณที่เข้ามาในชีวิตนะ",
  "ถ้ารักคือเพลง เธอคือเพลงที่ดีที่สุดของฉัน",
  "อยู่ห่างกันแต่ใจอยู่ใกล้เสมอ"
];

function randomLoveMessage() {
  const index = Math.floor(Math.random() * loveMessages.length);
  document.getElementById("loveMessage").textContent = loveMessages[index];
}

// เกมสุ่มหัวใจ
function guessHeart() {
  const answer = Math.floor(Math.random() * 3) + 1;
  const guess = prompt("ทายว่าหัวใจอยู่ในกล่องเบอร์ไหน (1-3)?");
  if (parseInt(guess) === answer) {
    alert("เก่งจังเลยยย หัวใจของเราตรงกัน!");
  } else {
    alert(`ไม่เป็นไร ลองใหม่ได้นะ หัวใจอยู่ในกล่อง ${answer}`);
  }
}

// แสดงหัวใจลอยขึ้นเรื่อยๆ
function createFloatingHearts() {
  const container = document.querySelector(".floating-hearts");
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart-float";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.background = ["red", "pink", "#ff69b4"][Math.floor(Math.random() * 3)];
    heart.style.width = heart.style.height = `${Math.random() * 20 + 10}px`;
    container.appendChild(heart);
    setTimeout(() => container.removeChild(heart), 5000);
  }, 500);
}
createFloatingHearts();
