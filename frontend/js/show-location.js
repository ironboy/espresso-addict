// Show a location (image, description etc)
// [Called from start, doOnMenuChoice, updatePlayerStatus]
async function showLocation(loc, alternateDescription, alternateImage) {
  // Use alternate descriptions and/or image if they exist
  // else use the normal ones provided for the location
  let image = alternateImage || loc.image;
  let description = alternateDescription || loc.description;

  // fade out old backdrop
  window.lastImage && image !== window.lastImage && await fadeBackdrop();

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

  // fade in new backdrop
  $('.viewport-bg').els[0].style.backgroundImage = `url("imgs/${image}.jpg")`;
  image !== window.lastImage && fadeBackdrop(true);
  window.lastImage = image;
}