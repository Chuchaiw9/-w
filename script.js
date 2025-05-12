// script.js

const targetDate = new Date('2025-05-17T00:00:00'); const countdown = document.getElementById('countdown'); const giftBox = document.getElementById('giftBox'); const giftMessage = document.getElementById('giftMessage');

function updateCountdown() { const now = new Date(); const diff = targetDate - now;

if (diff <= 0) { countdown.innerHTML = 'วันนี้คือวันครบรอบ 1 เดือนของเรา!'; showGift(); return; }

const days = Math.floor(diff / (1000 * 60 * 60 * 24)); const hours = Math.floor((diff / (1000 * 60 * 60)) % 24); const minutes = Math.floor((diff / (1000 * 60)) % 60); const seconds = Math.floor((diff / 1000) % 60);

countdown.innerHTML = เหลืออีก ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที; }

setInterval(updateCountdown, 1000); updateCountdown();

const loveMessages = [ "รักแพรวามากที่สุดในโลกเลย", "คิดถึงแพรวาทุกวันเลยนะ", "ขอบคุณที่อยู่ในชีวิตของเรา", "อยากกอดแพรวาแน่นๆ เลย", "แพรวาคือความสุขของเรา", "ไม่มีวันไหนไม่คิดถึงแพรวา", "เราจะรักแพรวาไปตลอดกาล", "รอวันที่ได้เจอกันอีกนะ", ];

function showLoveMessage() { const message = loveMessages[Math.floor(Math.random() * loveMessages.length)]; document.getElementById('loveMessage').innerText = message; }

function showGift() { giftBox.classList.remove('hidden'); giftMessage.innerHTML = ขอบคุณที่อยู่ด้วยกันมา 1 เดือนนะแพรวา<br> ทุกวินาทีที่ได้รู้จักเธอคือของขวัญที่สุดพิเศษ<br> ถึงเราจะอยู่ไกลกัน แต่หัวใจของเราผูกกันเสมอ<br> รักแพรวานะ จากคนที่รักเธอที่สุดในโลกนี้; }

