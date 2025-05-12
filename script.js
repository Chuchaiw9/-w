function updateCountdown() {
  const targetDate = new Date("2025-05-17T00:00:00");
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "วันนี้คือวันครบรอบ 1 เดือนของเราแล้วน้าาา ขอบคุณที่อยู่ด้วยกันนะ แพรวาของเค้า!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML = 
    `⏳ เหลืออีก ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

function showLoveMessage() {
  const messages = [
    "รักแพรวาที่สุดเลย",
    "คิดถึงทุกวันเลยนะ",
    "ขอบคุณที่อยู่กับเค้า",
    "แพรวาคือโลกทั้งใบของเค้า",
    "อยากอยู่ด้วยกันทุกวันเลยน้าาา",
    "แพรวาน่ารักที่สุดในโลก!"
  ];
  const random = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("love-message").innerText = random;
}
