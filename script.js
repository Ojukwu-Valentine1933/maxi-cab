document.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.getElementById('dropdown-button');
    const textAndButtonDiv = document.getElementById('text-and-button');

    dropdownButton.addEventListener("click", function () {
        // Toggle the visibility of the text-and-button div when the menu button is clicked
        if (textAndButtonDiv.style.display === "block" || textAndButtonDiv.style.display === "") {
            textAndButtonDiv.style.display = "none";
        } else {
            textAndButtonDiv.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slideshow-container .slide');
    let index = 0;

    function showSlide() {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        index = (index + 1) % slides.length;
        slides[index].classList.add('active');

        setTimeout(showSlide, 4000);
    }

    showSlide();
});







