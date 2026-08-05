function nextPage(n) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.add("hidden");
  });

  document.getElementById("page" + n).classList.remove("hidden");

  showCat();
}

const text =
  "Aku bersyukur karena semesta mempertemukanku denganmu. Semoga setiap langkahmu selalu dipenuhi kebahagiaan. Terima kasih telah menjadi seseorang yang begitu berarti di hidupku. Aku mencintaimu. 🤍";

let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);

    i++;

    setTimeout(typing, 40);
  }
}

typing();

function catJump() {
  const cat = document.querySelector(".cat");

  cat.classList.add("jump");

  setTimeout(() => {
    cat.classList.remove("jump");
  }, 600);
}

function showCat() {
  const cat = document.getElementById("cat");

  cat.classList.remove("showCat");

  void cat.offsetWidth;

  cat.classList.add("showCat");
}
