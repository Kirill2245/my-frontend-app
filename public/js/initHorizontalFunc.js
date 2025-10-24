function initHorizontalCardList() {
    const cardList = document.querySelector('.card-list');
    const loadMoreBtn = document.querySelector('.upload-more-btn');
    const cards = cardList.querySelectorAll('.card-product');
    
    const visibleLimit = 6;
    let allCardsVisible = false;
    let resizeTimeout;

    console.log('Initializing card list with', cards.length, 'cards');

    function hideExcessCards(maxVisible) {
        console.log('Hiding cards beyond:', maxVisible);
        
        let hasHiddenCards = false;
        
        cards.forEach((card, index) => {
            if (index >= maxVisible && !allCardsVisible) {
                card.style.display = 'none';
                hasHiddenCards = true;
                console.log('Hiding card:', index);
            } else {
                card.style.display = 'block';
            }
        });
        
        loadMoreBtn.style.display = hasHiddenCards ? 'flex' : 'none';
        console.log('Load more button visible:', hasHiddenCards);
    }
    
    function showAllCards() {
        console.log('Showing all cards');
        allCardsVisible = true;
        cards.forEach(card => {
            card.style.display = 'block';
        });
        loadMoreBtn.style.display = 'none';
    }
    
    function checkCardsVisibility() {
        if (cards.length === 0) return;
        
        const containerWidth = cardList.offsetWidth;
        const cardWidth = cards[0].offsetWidth;
        const gap = 107;
        const cardWidthWithGap = cardWidth + gap - 25;
        const cardsThatFit = Math.floor(containerWidth / cardWidthWithGap);
        const maxVisible = Math.min(visibleLimit, cardsThatFit);
        
        console.log('Max visible cards:', maxVisible);
        if (maxVisible < cards.length && !allCardsVisible) {
            hideExcessCards(maxVisible);
        } else {
            cards.forEach(card => {
                card.style.display = 'block';
            });
            loadMoreBtn.style.display = 'none';
        }
    }
    loadMoreBtn.addEventListener('click', showAllCards);
    function handleResize() {
        console.log('Window resized, checking visibility...');
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            checkCardsVisibility();
        }, 150);
    }
    window.addEventListener('resize', handleResize);
    setTimeout(checkCardsVisibility, 100);
    window.addEventListener('load', checkCardsVisibility);
    const images = cardList.querySelectorAll('img');
    let loadedImages = 0;
    
    images.forEach(img => {
        if (img.complete) {
            loadedImages++;
        } else {
            img.addEventListener('load', () => {
                loadedImages++;
                if (loadedImages === images.length) {
                    setTimeout(checkCardsVisibility, 50);
                }
            });
        }
    });
    if (loadedImages === images.length && images.length > 0) {
        setTimeout(checkCardsVisibility, 50);
    }
    return checkCardsVisibility;
}