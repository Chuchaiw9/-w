const endDate = new Date();
endDate.setMonth(4); // พฤษภาคม = เดือนที่ 4 (เริ่มจาก 0)
endDate.setDate(17);
endDate.setHours(0, 0, 0, 0);

// ถ้าเวลาผ่านไปแล้ว ให้เปลี่ยนเป็นรอบถัดไป
const now = new Date();
if (now > endDate) {
  endDate.setMonth(endDate.getMonth() + 1);
}

function updateCountdown() {
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "สุขสันต์วันครบรอบนะคนเก่ง!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const messages = [
  "แพรวาน่ารักที่สุดในโลกเลย",
  "ขอบคุณที่อยู่ข้างกันนะ",
  "รักแพรวาไม่มีวันหมดเลย",
  "คิดถึงทุกวินาทีเลยนะ",
  "อยู่กับแพรวาแล้วมีความสุขที่สุดเลย",
  "แพรวา = หัวใจของเรา"
];

function randomLoveMessage() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("loveMessageBox").textContent = msg;
}
