const image = document.getElementById('image');
const magnifier = document.getElementById('magnifier');
const magnifiedImage = document.getElementById('magnifiedImage');
const zoomFactor = 2.5;

// Set the size of the magnifier based on the zoom factor
const magnifierSize = image.width / zoomFactor;
magnifier.style.width = magnifierSize + 'px';
magnifier.style.height = magnifierSize + 'px';

// Set the size of the magnified image
const magnifiedImageSize = image.width * zoomFactor;
magnifiedImage.style.width = magnifiedImageSize + 'px';
magnifiedImage.style.height = magnifiedImageSize + 'px';

// Handle mouse move event on the image container
image.addEventListener('mousemove', (event) => {
    // Get the mouse position relative to the image container
    const mouseX = event.pageX - image.offsetLeft;
    const mouseY = event.pageY - image.offsetTop;

    // Calculate the position of the magnifier
    const magnifierX = mouseX - magnifierSize / 2;
    const magnifierY = mouseY - magnifierSize / 2;

    // Set the position of the magnifier
    magnifier.style.left = magnifierX + 'px';
    magnifier.style.top = magnifierY + 'px';

    // Calculate the background position of the magnified image
    const backgroundX = -mouseX * zoomFactor + magnifiedImageSize / 2;
    const backgroundY = -mouseY * zoomFactor + magnifiedImageSize / 2;

    // Set the background position of the magnified image
    magnifiedImage.style.left = backgroundX + 'px';
    magnifiedImage.style.top = backgroundY + 'px';
});