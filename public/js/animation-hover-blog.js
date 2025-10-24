
function scaleElement(div) {
    const card = div.closest('.card-blog');
    const img = card.querySelector('.blog-image')
    if (img) {
        img.style.transform = 'scale(1.2)'
        // img.style.objectPosition = 'center'
    }
}

function scaleResetElement(div) {
    const card = div.closest('.card-blog');
    const img = card.querySelector('.blog-image')
    
    if (img) {
        img.style.transform = 'scale(1)'
        // img.style.objectPosition = 'left'
    }
}