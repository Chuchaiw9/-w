// ฟังก์ชันนับถอยหลัง
const countdown = () => {
  const now = new Date().getTime();
  const target = new Date('2025-06-17T00:00:00').getTime();
  const diff = target - now;

  if (diff > 0) {
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById('days').textContent = d;
    document.getElementById('hours').textContent = h;
    document.getElementById('minutes').textContent = m;
    document.getElementById('seconds').textContent = s;
  }
};

setInterval(countdown, 1000);

// สุ่มคำบอกรัก
const loveMessages = [
  'รักแพรวามากที่สุดในโลกเลย',
  'อยากอยู่ด้วยกันตลอดไปนะ',
  'คิดถึงทุกวันเลยนะคะ',
  'เธอน่ารักที่สุดในใจเรา',
  'เธอคือโลกทั้งใบของเรา'
];

document.getElementById('love-button').addEventListener('click', () => {
  const msg = loveMessages[Math.floor(Math.random() * loveMessages.length)];
  document.getElementById('love-message').textContent = msg;
});

// สร้างหัวใจลอย
function createHearts() {
  const heartContainer = document.getElementById('hearts');
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${4 + Math.random() * 3}s`;
    heartContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }, 300);
}
createHearts();
