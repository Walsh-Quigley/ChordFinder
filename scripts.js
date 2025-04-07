// This function toggles the visibility of the image container
function showImages(imageId) {
    var imageContainer = document.getElementById(imageId);
    
    // Check current state and toggle visibility
    if (imageContainer.style.display === "none" || imageContainer.style.display === "") {
        imageContainer.style.display = "flex";  // Show images
    } else {
        imageContainer.style.display = "none";   // Hide images
    }
}
