function showImages() {
    var imageContainer = document.getElementById("imageContainer");
    
    // Check current state and toggle visibility
    if (imageContainer.style.display === "none" || imageContainer.style.display === "") {
        imageContainer.style.display = "flex";  // Show images
    } else {
        imageContainer.style.display = "none";   // Hide images
    }
}
