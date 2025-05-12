document.addEventListener("DOMContentLoaded", () => {
  const targetDate = new Date("2025-05-17T00:00:00");
  const countdownEl = document.getElementById("countdown");
  const popup = document.getElementById("anniversaryPopup");

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) {
      countdownEl.textContent = "วันนี้คือวันครบรอบ 1 เดือนของเราแล้ว!";
      popup.style.display = "flex";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.textContent = `เหลืออีก ${days} วัน ${hours} ชม. ${minutes} นาที ${seconds} วิ`;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown(); // เรียกทันทีด้วยครั้งหนึ่งก่อนเริ่มนับจริง

  // ฟังก์ชันสุ่มคำบอกรัก
  window.showLoveMessage = function () {
    const messages = [
      "รักแพรวามากที่สุดในโลก!",
      "ถึงจะอยู่ไกลแต่ใจใกล้เสมอ",
      "คิดถึงเธอทุกวันเลยนะ",
      "อยู่ด้วยกันตลอดไปนะ",
      "แพรวาคือคนพิเศษของเค้า"
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("love-message").textContent = randomMsg;
  };
});
