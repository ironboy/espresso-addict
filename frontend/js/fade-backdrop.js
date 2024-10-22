// Fade in or out the backdrop (a blurred version of the location image)
async function fadeBackdrop(fadeIn = false) {
  let alpha = fadeIn ? 0.9 : 0.6;
  let goal = fadeIn ? 0.6 : 0.9;
  let step = fadeIn ? -0.03 : 0.05;
  while ((goal === 0.9 && alpha < goal) || (goal == 0.6 && alpha > goal)) {
    alpha += step;
    $('.backdropper').els[0].style.backgroundColor = `rgba(0,0,0,${alpha})`;
    await sleep(50);
  }
}

const sleep = ms => new Promise(res => setTimeout(res, ms));
