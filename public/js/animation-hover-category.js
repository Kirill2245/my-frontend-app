
function rotateElement(button) {
    const card = button.closest('.category-card');
    const element = card.querySelector('.count-category div');
    const img = card.querySelector('.category-image')
    if (element && img) {
        element.style.transform = 'rotate(23deg)';
        img.style.transform = 'scale(1.1)'
    }
}

function resetElement(button) {
    const card = button.closest('.category-card');
    const element = card.querySelector('.count-category div');
    const img = card.querySelector('.category-image')
    
    if (element && img) {
        element.style.transform = 'rotate(0)';
        img.style.transform = 'scale(1)'
    }
}