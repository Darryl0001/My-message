export function showImage(imagePath) {
    const container = document.querySelector(".container");
    
    // Remove any existing image
    const existingImage = container.querySelector(".image");
    if (existingImage) {
        container.removeChild(existingImage);
    }

    // Create the new image element
    const image = document.createElement("img");
    image.src = imagePath; // Set the source to the passed image path
    image.className = "image"; // Assign a class for styling
    container.appendChild(image); // Append the new image
}
