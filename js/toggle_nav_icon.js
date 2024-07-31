const informationDropdown = document.getElementById('informationDropdown');
            const dropdownIcon = document.getElementById('dropdownIcon');
            const dropdownMenu = informationDropdown.nextElementSibling;
            
            function toggleIconOnHover(isHover) {
                if (isHover || dropdownMenu.classList.contains('show')) {
                    dropdownIcon.classList.remove('fa-angle-down');
                    dropdownIcon.classList.add('fa-angle-up');
                } else {
                    dropdownIcon.classList.remove('fa-angle-up');
                    dropdownIcon.classList.add('fa-angle-down');
                }
            }
        
            informationDropdown.addEventListener('click', function () {
                setTimeout(() => {
                    toggleIconOnHover(false);
                }, 1);
            });
        
            informationDropdown.addEventListener('mouseenter', function () {
                toggleIconOnHover(true);
            });
        
            informationDropdown.addEventListener('mouseleave', function () {
                toggleIconOnHover(false);
            });
        
            dropdownMenu.addEventListener('mouseenter', function () {
                toggleIconOnHover(true);
            });
        
            dropdownMenu.addEventListener('mouseleave', function () {
                toggleIconOnHover(false);
            });

// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 100vh from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
