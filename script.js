const music = document.getElementById("music");

document.body.addEventListener(
  "click",
  function () {
    music.play();

    document.body.style.transition = "1s";

    document.body.style.opacity = "0";

    setTimeout(() => {
      window.location.href = "code.html";
    }, 1000);
  },
  { once: true },
);

// ======================
// SECRET CODE
// ======================

function checkCode() {
  const code = document.getElementById("secret");

  if (!code) return;

  const message = document.getElementById("message");

  const card = document.getElementById("card");

  if (code.value === "060804") {
    message.innerHTML = "💙 Unlocked...";

    message.style.color = "#4AA8FF";

    setTimeout(() => {
      window.location.href = "home.html";
    }, 1500);
  } else {
    message.innerHTML = "Oops! Wrong Code";

    message.style.color = "#ff5c5c";

    card.classList.remove("shake");

    void card.offsetWidth;

    card.classList.add("shake");

    code.value = "";
  }
}

//========================
// GIFT
//========================

function openGift() {
  const box = document.getElementById("giftBox");

  if (!box) return;

  box.classList.add("openGift");

  const flash = document.getElementById("flash");

  flash.classList.add("show");

  setTimeout(() => {
    window.location.href = "home.html";
  }, 1200);
}

//=====================
// LETTER
//=====================

const text = `Selamat ulang tahun, Senaa.

Semoga semua doa baikmu satu demi satu menjadi kenyataan.

Terima kasih telah hadir dan menjadi seseorang yang selalu berhasil membuat hariku lebih berwarna.

Aku mungkin belum bisa selalu berada di sampingmu.

Tetapi aku akan selalu mendoakanmu.

Happy Birthday.

I Love You. 🤍`;

let index = 0;

function typeLetter() {
  const typing = document.getElementById("typing");

  if (!typing) return;

  if (index < text.length) {
    typing.innerHTML += text.charAt(index);

    index++;

    setTimeout(typeLetter, 40);
  } else {
    document.querySelector(".paper button").style.display = "inline-block";
  }
}

function openLetter() {
  const cover = document.querySelector(".cover");

  const paper = document.getElementById("paper");

  if (!cover) return;

  cover.style.transform = "rotateX(180deg)";

  paper.style.transform = "translateY(-35px)";

  setTimeout(typeLetter, 900);
}

//======================
// SWIPER
//======================

if (document.querySelector(".mySwiper")) {
  new Swiper(".mySwiper", {
    effect: "coverflow",

    grabCursor: true,

    centeredSlides: true,

    slidesPerView: "auto",

    loop: true,

    spaceBetween: 20,

    coverflowEffect: {
      rotate: 20,

      stretch: 0,

      depth: 150,

      modifier: 1,

      slideShadows: false,

      scale: 0.9,
    },
  });
}

//=========================
// MUSIC PLAYER
//=========================

const audio = document.getElementById("audio");

const progress = document.getElementById("progress");

const cover = document.getElementById("cover");

const playIcon = document.getElementById("playIcon");

const current = document.getElementById("current");

const duration = document.getElementById("duration");

function playPause() {
  if (!audio) return;

  if (audio.paused) {
    audio.play();

    cover.classList.add("rotate");

    playIcon.className = "fa-solid fa-pause";
  } else {
    audio.pause();

    cover.classList.remove("rotate");

    playIcon.className = "fa-solid fa-play";
  }
}

audio?.addEventListener("loadedmetadata", () => {
  progress.max = Math.floor(audio.duration);

  duration.innerHTML = format(audio.duration);
});

audio?.addEventListener("timeupdate", () => {
  progress.value = audio.currentTime;

  current.innerHTML = format(audio.currentTime);
});

progress?.addEventListener("input", () => {
  audio.currentTime = progress.value;
});

function format(sec) {
  let m = Math.floor(sec / 60);

  let s = Math.floor(sec % 60);

  if (s < 10) s = "0" + s;

  return `${m}:${s}`;
}

function backSong() {
  audio.currentTime = 0;
}

function nextSong() {
  audio.currentTime = audio.duration;
}

//======================
// ENDING
//======================

const endingMessage = `Selamat ulang tahun, Senaa.

Terima kasih telah menjadi bagian dari hidupku.

Semoga setiap langkahmu dipenuhi kebahagiaan.

Aku akan selalu mendoakanmu.

Semoga suatu hari nanti kita bisa merayakan ulang tahunmu bersama.

Happy Birthday.

I Love You Always. 🤍`;

let e = 0;

function typeEnding() {
  const text = document.getElementById("endingText");

  if (!text) return;

  if (e < endingMessage.length) {
    text.innerHTML += endingMessage.charAt(e);

    e++;

    setTimeout(typeEnding, 40);
  }
}

typeEnding();

function firework() {
  const area = document.getElementById("fireworks");

  if (!area) return;

  for (let i = 0; i < 20; i++) {
    const s = document.createElement("div");

    s.className = "spark";

    s.style.left = Math.random() * 100 + "%";

    s.style.top = Math.random() * 100 + "%";

    s.style.setProperty("--x", Math.random() * 200 - 100 + "px");

    s.style.setProperty("--y", Math.random() * 200 - 100 + "px");

    area.appendChild(s);

    setTimeout(() => {
      s.remove();
    }, 2000);
  }
}

setInterval(firework, 1500);
