// Show a location (image, description etc)
// [Called from start, doOnMenuChoice, updatePlayerStatus]
function showLocation(loc, alternateDescription, alternateImage) {
  // Use alternate descriptions and/or image if they exist
  // else use the normal ones provided for the location
  let image = alternateImage || loc.image;
  let description = alternateDescription || loc.description;

  // tone in img
  if (image !== window.lastImage) {
    $('.viewport-bg').els[0].style.backgroundImage = `url("imgs/${image}.jpg")`;
    let alpha = 1;
    (function toneInBg() {
      $('.backdropper').els[0].style.backgroundColor = `rgba(0,0,0,${alpha})`
      alpha > 0.6 && (alpha -= 0.02) && setTimeout(toneInBg, 50);
    })();
  }
  window.lastImage = image;

  // Write to elements
  $('.big-image').attr("src", "imgs/" + image + ".jpg");
  $('.description').html(description.replaceAll(' - ', ' &ndash; '));

  // If a location is not an info page then change the memories
  // holding the last location and last description
  if (!loc.infopage) {
    lastLocation = loc;
    lastDescription = description;
  }
  // Show bag content, update progress bars and build the menu
  showBag();
  updateProgressBars();
  buildMenu(loc.choices);
}