// script.js const countdownEl = document.getElementById("countdown"); const loveMessageEl = document.getElementById("loveMessage"); const giftBox = document.getElementById("giftBox"); const giftMessage = document.getElementById("giftMessage");

const targetDate = new Date("2025-05-17T00:00:00");

function updateCountdown() { const now = new Date(); const diff = targetDate - now;

if (diff <= 0) { countdownEl.innerHTML = "วันนี้คือวันครบรอบของเรา!"; showAnniversaryGift(); return; }

const days = Math.floor(diff / (1000 * 60 * 60 * 24)); const hours = Math.floor((diff / (1000 * 60 * 60)) % 24); const minutes = Math.floor((diff / 1000 / 60) % 60); const seconds = Math.floor((diff / 1000) % 60);

countdownEl.innerHTML = ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที; }

function showAnniversaryGift() { giftBox.classList.remove("hidden"); giftMessage.innerHTML = สุขสันต์วันครบรอบ 1 เดือนนะ แพรวา<br> ขอบคุณที่อยู่ด้วยกันถึงแม้เราจะห่างไกล<br> แต่หัวใจเราอยู่ใกล้กันเสมอ รักมากๆนะ; }

const loveQuotes = [ "รักเธอทุกวินาทีเลยนะ", "ถึงจะไกลแต่ใจอยู่ใกล้เสมอ", "คิดถึงแพรวาทุกวันเลย", "เธอคือคนที่ดีที่สุดในชีวิตเลย", "อยู่ด้วยกันนานๆนะ แพรวา" ];

function showLoveMessage() { const randomIndex = Math.floor(Math.random() * loveQuotes.length); loveMessageEl.textContent = loveQuotes[randomIndex]; loveMessageEl.style.animation = "fadeIn 0.8s ease"; }

setInterval(updateCountdown, 1000); updateCountdown();

