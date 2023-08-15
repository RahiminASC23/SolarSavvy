const text = document.getElementsByClassName("r1");
const image = document.getElementsByClassName('i1'); 

window.addEventListener("scroll", appearOnScroll);

function appearOnScroll() {
  let textPosition = text.getBoundingClientRect().top;
  let windowHeight = window.innerHeighht/1.5;
  if(windowHeight > textPosition) {
    text.classList.remove("push_left");
    image.classList.remove("push_right");
  }
  else {
    text.classList.add("push_left");
    image.classList.add("push_right");
  }
}