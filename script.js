window.onload = function () {
  // 🎁 Cake-এ click করলে কাজ করানো হচ্ছে এখানে
  const cakeBox = document.getElementById("cakeBox");
  if (cakeBox) {
    cakeBox.addEventListener("click", function () {
      document.querySelector('.cake-box').style.display = 'none';
      document.querySelector('.surprise').classList.remove('hidden');
    });
  }

  // 🎂 কেক কাটো আর গান বাজাও
  document.querySelector('button[onclick="startSurprise()"]')?.addEventListener("click", () => {
    document.querySelectorAll('.photo').forEach(p => p.classList.remove('hidden'));
    const music = document.getElementById('bg-music');
    music.play().catch(() => {
      alert('🎶 Tap to play music!');
    });
  });

  // 🌈 Confetti
  window.startConfetti = function () {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });
  };

  // 🎆 Fireworks
  window.startFireworks = function () {
    let duration = 5 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function () {
      let timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      let particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: {
          x: randomInRange(0.1, 0.9),
          y: Math.random() - 0.2
        }
      }));
    }, 250);
  };

  // 📸 Gallery
  window.openGallery = function () {
    const gallery = document.querySelector('.photo-gallery');
    gallery.classList.toggle('active');
  };

  // 💌 Note Box
  window.showNote = function () {
    document.getElementById("note-box")?.classList.toggle("hidden");
  };

  // 🔄 Rotating Text
  let messages = ["🎂 শুভ জন্মদিন!", "💖 ভাল থাকিস বন্ধু!", "🌈 তুইই তোর inspiration"];
  let i = 0;
  setInterval(() => {
    const el = document.getElementById("cycle-text");
    if (el) {
      el.textContent = messages[i];
      i = (i + 1) % messages.length;
    }
  }, 3000);
};
