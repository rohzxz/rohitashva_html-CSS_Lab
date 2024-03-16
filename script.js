document.addEventListener("DOMContentLoaded", function () {
  animateBar("bar1", "percentage1", 30);
  animateBar("bar2", "percentage2", 40);
  animateBar("bar3", "percentage3", 80);
});

function animateBar(barId, percentageId, percentage) {
  const bar = document.getElementById(barId);
  const percentageText = document.getElementById(percentageId);
  const maxHeight = 200; // Maximum height of the bar
  const targetHeight = (percentage / 100) * maxHeight;

  let height = 0;

  const animationInterval = setInterval(frame, 10);

  function frame() {
    if (height >= targetHeight) {
      clearInterval(animationInterval);
    } else {
      height += 1;
      bar.style.height = height + "px";
      percentageText.textContent = percentage + "%";
    }
  }
}
