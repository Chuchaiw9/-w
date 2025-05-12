// นับถอยหลังวันครบรอบ 1 เดือน (17 พ.ค. 2025)
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const targetDate = new Date("May 17, 2025 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    // คำนวณวัน, ชั่วโมง, นาที, วินาที
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // แสดงผลใน #countdown
    countdownElement.innerHTML = `เหลือเวลาอีก ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;

    // ถ้าถึงวันครบรอบ
    if (timeDifference < 0) {
        countdownElement.innerHTML = "วันครบรอบ 1 เดือนแล้ว! 🎉";
        clearInterval(countdownInterval);
    }
}

// เรียกใช้ฟังก์ชันทุก 1 วินาทีเพื่ออัพเดตตัวนับ
const countdownInterval = setInterval(updateCountdown, 1000);

// ฟังก์ชันสุ่มคำบอกรัก
const loveMessages = [
    "รักเธอนะไออ้วนน 💖",
    "ไม่ว่าเวลาไหน เค้าจะรักเธอเสมอ 💕",
    "เธอคือความสุขของเค้าในทุกๆวัน 🌸",
    "ขอบคุณที่อยู่ข้างกันเสมอ 🥰",
    "ทุกวันกับเธอคือวันพิเศษสำหรับฉัน 💖"
];

function randomLoveMessage() {
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    const loveMessageElement = document.getElementById("love-message");
    loveMessageElement.innerHTML = loveMessages[randomIndex];
    loveMessageElement.classList.remove("hidden");
}

// เพิ่มเพลงจาก YouTube (กำหนด id ของเพลง)
const audioElement = new Audio("https://www.youtube.com/watch?v=OYPiXBIgvJ8"); // เปลี่ยนไปใช้ URL ของเพลงที่คุณต้องการ
audioElement.loop = true;  // ให้เพลงเล่นวนลูป
audioElement.play();
