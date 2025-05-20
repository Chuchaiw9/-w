document.addEventListener("DOMContentLoaded", () => {
  const targetDate = new Date("2025-06-17T00:00:00");
  const countdownEl = document.getElementById("countdown");
  const popup = document.getElementById("anniversaryPopup");

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdownEl.innerHTML = `<span class="countdown-end">วันนี้คือวันครบรอบ 2 เดือนของเราแล้ว!</span>`;
      popup.style.display = "flex";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.innerHTML = `
      <div class="time-box"><span>${days}</span><small>วัน</small></div>
      <div class="time-box"><span>${hours}</span><small>ชม.</small></div>
      <div class="time-box"><span>${minutes}</span><small>นาที</small></div>
      <div class="time-box"><span>${seconds}</span><small>วิ</small></div>
    `;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
});
