// Export removeFlowers function
export function removeFlowers() {
    const container = document.querySelector(".container");
    const flowers = container.querySelectorAll(".flower");
    flowers.forEach(flower => {
        flower.remove(); // Remove each flower element
    });
}

// Export generateFlower function with removeFlowers call
export function generateFlower() {
    const container = document.querySelector(".container");
    const totalFlowers = 6; // Total number of flowers
    const containerWidth = container.offsetWidth; // Get the actual container width in pixels

    // Remove existing flowers before generating new ones
    removeFlowers();

    const flower0 = document.createElement("img");
    flower0.src = "./img/sunflower.png";
    flower0.className = "flower";
    container.appendChild(flower0);
    flower0.style.left = `-20px`;

    for (let i = 0; i < totalFlowers; i++) {
        const flower = document.createElement("img");
        flower.src = "./img/sunflower.png"; // Replace with the path to your flower image
        flower.className = "flower";

        // Calculate the left position evenly distributed across the container
        const leftPosition = (containerWidth / totalFlowers) * i + (containerWidth / totalFlowers) / 2 - 25;
        flower.style.left = `${leftPosition}px`;

        container.appendChild(flower);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    generateFlower(); // Call generateFlower when content is loaded
});
