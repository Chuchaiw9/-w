const startDate = new Date("2025-04-17T00:00:00");
const endDate = new Date("2025-05-17T00:00:00");
const loveMessages = [
    "แพรวา, คุณทำให้โลกของฉันสดใสขึ้นทุกวัน",
    "รักเธอมากนะ, แพรวา, ไม่ว่าจะผ่านไปนานแค่ไหน",
    "ทุกๆ วินาทีที่มีเธอคือความสุขที่สุด",
    "ขอบคุณที่อยู่ข้างกันเสมอ แพรวา",
    "รักเธอจนไม่มีคำไหนอธิบายได้"
];

// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const distance = endDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML = "Happy Anniversary!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `ถึงวันที่ 17 พฤษภาคม 2025: ${days} วัน ${hours} ชม ${minutes} นาที ${seconds} วินาที`;
}
setInterval(updateCountdown, 1000);

// Random Love Message
function randomLoveMessage() {
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    document.getElementById("loveMessageBox").innerHTML = `<p>${loveMessages[randomIndex]}</p>`;
}
