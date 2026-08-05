const text = "Semoga hari ini seindah senyummu. 💙";

let i = 0;

function typing() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);

    i++;

    setTimeout(typing, 70);
  }
}

typing();

function showWish() {
  document.getElementById("wish").classList.remove("hidden");

  document.getElementById("cake").classList.remove("hidden");

  confetti();
}

function confetti() {
  for (let i = 0; i < 100; i++) {
    let star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 3 + "s";

    document.body.appendChild(star);
  }
}

QRCode.toCanvas(
  document.getElementById("qrcode"),

  window.location.href,

  {
    width: 170,

    color: {
      dark: "#1E3A8A",

      light: "#FFFFFF",
    },
  },
);
