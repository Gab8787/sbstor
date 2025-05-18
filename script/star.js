const stars = document.querySelectorAll('.star');
    let selectedValue = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedValue = star.getAttribute('data-value');
            updateStars(selectedValue);
        });
    });

    function updateStars(value) {
        stars.forEach(star => {
            const starValue = star.getAttribute('data-value');
            if (starValue <= value) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }