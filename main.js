const container = document.querySelector(".container");
const spanCount = document.querySelector(".count");
let countOfImg = 0;

window.addEventListener("DOMContentLoaded", () => {
  loadImage(3);
  updateCount();
});

window.addEventListener(
  "scroll",
  debounce(() => {
    if (isEndOfScroll()) {
      loadImage(1);
      updateCount();
    }
  }, 300)
);

function loadImage(count) {
  for (let i = 0; i < count; i++) {
    const imgTag = document.createElement("img");
    imgTag.src = `https://picsum.photos/400/400?random=${++countOfImg}`;
    container.appendChild(imgTag);
  }
}

function debounce(callback, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, timeout);
  };
}

function isEndOfScroll() {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    return true;
  } else {
    return false;
  }
}

function updateCount() {
  spanCount.textContent = `${countOfImg}`;
}
