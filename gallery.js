/*Name this external file gallery.js*/

function upDate(previewPic) {


    // 1) Change the URL of the background image of the div with id = "image"
    document.getElementById('image').style.backgroundImage = `url(${previewPic.src})`;

    // 2) Change the text of the div with id = "image" to the alt text of the preview image
    document.getElementById('image').innerText = previewPic.alt;
}

let originalBackground = "url('')"; // Replace with the actual original image URL
let originalText = "Original Image Description"; // Replace with the actual original text

function unDo() {
    // 1) Update the background image to the original image
    document.getElementById('image').style.backgroundImage = originalBackground;

    // 2) Change the text back to the original text
    document.getElementById('image').innerText = originalText;
}
    





// Function to add the tabindex attribute to images
function addTabFocus() {
    // Select all images with the class 'preview'
    const images = document.querySelectorAll('.preview');

    // Loop through each image and add the tabindex attribute
    images.forEach((image, index) => {
        image.setAttribute('tabindex', index + 1); // tabindex starts at 1
        console.log(`Tabindex set to ${index + 1} for image:`, image);
    });
}

// Function to handle the onfocus event (when an image is focused)
function imageFocus(image) {
    console.log(`Image with alt text "${image.alt}" has gained focus.`);
    // You could add styling or other actions here, e.g.:
    image.style.border = "2px solid blue"; // Example: Change the border color when focused
}

// Function to handle the onblur event (when an image loses focus)
function imageBlur(image) {
    console.log(`Image with alt text "${image.alt}" has lost focus.`);
    // Reset styling when focus is lost
    image.style.border = ""; // Example: Remove the border when focus is lost
}

// Add an event listener for the window onload event to trigger the addTabFocus function
window.onload = function() {
    addTabFocus(); // Call the function to set tabindex on images when the page loads
};
