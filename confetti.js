document.addEventListener("DOMContentLoaded", function () {
  const confettiContainer = document.querySelector('.confetti-container');

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = 2 + Math.random() * 3 + 's';
    confetti.style.opacity = Math.random();
    confetti.style.backgroundColor = ['#ff6384', '#ffcd56', '#4bc0c0', '#9966ff'][Math.floor(Math.random() * 4)];
    confettiContainer.appendChild(confetti);
  }

  function goTo(sectionId) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
  }

  const nextBtn = document.querySelector(".next-btn");
  if (nextBtn) {
    nextBtn.addEventListener("click", function (e) {
      e.preventDefault();
      goTo("next");
    });
  }

  const yesBtn = document.querySelector("#yes-btn");
  if (yesBtn) {
    yesBtn.addEventListener("click", function () {
      triggerSparkles();
      setTimeout(() => goTo("surat"), 600);
    });
  }

  const noBtn = document.querySelector("#no-btn");
  if (noBtn) {
    // Klik biasa
    noBtn.addEventListener("click", function () {
      alert("Yah masa ditolak sih 😔\n*Kasih kesempatan dong…* 🥺");
    });

    // Hover = kabur
    noBtn.addEventListener("mouseenter", () => {
      const x = Math.random() * 300 - 150;
      const y = Math.random() * 200 - 100;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
});

function triggerSparkles() {
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.innerText = "✨";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.animationDelay = Math.random() * 0.5 + "s";
    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 2000);
  }
}
