
function initSlideAnimations() {
    const cards = document.querySelectorAll('.card-slide');
    

    function applyAnimation(card, isVisible) {
        if (isVisible && window.innerWidth < 1000) {
            card.classList.add('visible-animation');
        } else {
            card.classList.remove('visible-animation');
        }
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            applyAnimation(entry.target, entry.isIntersecting);
        });
    }, {
        threshold: 0.5, 
        rootMargin: '0px'
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
    
    window.addEventListener('resize', () => {
        cards.forEach(card => {
            const isVisible = card.getBoundingClientRect().top < window.innerHeight && 
                             card.getBoundingClientRect().bottom > 0;
            applyAnimation(card, isVisible);
        });
    });
}

document.addEventListener('DOMContentLoaded', initSlideAnimations);