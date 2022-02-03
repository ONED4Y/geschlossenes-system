function changeImage(x, y) {
  document.getElementById(`${y}-image`).src = `images/${y}/${x.value}.jpg`
}