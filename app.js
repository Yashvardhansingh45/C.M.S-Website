  // JavaScript code
  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    function showImage(index) {
        // Hide all images
        images.forEach(img => {
            img.style.display = 'none';
        });

        // Display the image at the specified index
        images[index].style.display = 'block';
    }

    // Show the first image initially
    showImage(currentIndex);

    // Event listener for next button
    document.getElementById('nextButton').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Event listener for previous button
    document.getElementById('prevButton').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });
});
