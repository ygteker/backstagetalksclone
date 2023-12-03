const container = document.getElementById("container");
container.addEventListener("scroll", scrollHandler, false);

function scrollHandler(e) {
  const anchor = window.innerHeight;
  if (e.type === "scroll") {
    console.log(container.scrollTop);
    if (container.scrollTop >= 0 && container.scrollTop < anchor) {
      container.style.backgroundColor = "#ff651a";
    } else if (
      container.scrollTop >= anchor &&
      container.scrollTop < anchor * 2
    ) {
      container.style.backgroundColor = "#00c1b5";
    } else if (
      container.scrollTop >= anchor * 2 &&
      container.scrollTop < anchor * 3
    ) {
      container.style.backgroundColor = "#e30512";
    } else if (
      container.scrollTop >= anchor * 3 &&
      container.scrollTop < anchor * 4
    ) {
      container.style.backgroundColor = "#1d3fbb";
    } else if (
      container.scrollTop >= anchor * 4 &&
      container.scrollTop < anchor * 5
    ) {
      container.style.backgroundColor = "#ff651a";
    } else if (
      container.scrollTop >= anchor * 5 &&
      container.scrollTop < anchor * 6
    ) {
      container.style.backgroundColor = "#ffbe00";
    } else {
      container.style.backgroundColor = "#00c1b5";
    }
  }
}
