
let activeButton = null;
function handleCategoryClick(button) {
    const categoryId = button.getAttribute('data-category-id');
    if (activeButton) {
        activeButton.classList.remove('btn-active');
    }
    button.classList.add('btn-active');
    activeButton = button;
    updateSelectedCategory(categoryId);
}

function updateSelectedCategory(id) {
    const selectedSection = document.querySelector('.select-section-categoryes');
    
    fetch(`/selected-category/${id}`)
        .then(response => response.json())
        .then(category => {
            selectedSection.innerHTML = `
                <header class="header-product-secton">
                    <div>
                        <img src="/images/bx_bx-filter-alt.svg" alt=""/>
                        <p class="text-uppercase">фильтры</p>
                    </div>
                    <p class="text-uppercase">${category.list.length} позиций в категории</p>
                </header>
                <div class="card-list">
                    ${category.list.map(item => CardProduct(item)).join('')}
                </div>
                <button class="upload-more-btn" style="display: none;">
                    <span>Загрузить еще</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9896 14L11.9928 20L5.99609 14" stroke="#D9FF5A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.9941 4V21" stroke="#D9FF5A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            `;
            initHorizontalCardList();
        })
        .catch(error => {
            console.error('Error:', error);
            selectedSection.innerHTML = '<div class="error">Ошибка загрузки</div>';
        });
}
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

function CardProduct(item) {
    return `
        <div class = "card-product">
            <div class = "card-product-contain">
                <div style = "background-color:${item.color};"></div>
                <img src = "${item.image}"/>
            </div>
            <article>
                <h3 class = "text-uppercase">${item.name}</h3>
                <p class = "text-description">${item.descripton}</p>
                <svg width="274" height="2" viewBox="0 0 274 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="274" y2="1" stroke="#D9FF5A" stroke-width="2"/>
                </svg>
                <div class = "price-card-buy">
                    <div>
                        <p>${item.price}</p>
                        <span>₽</span>
                    </div>
                    <button>
                        <img src = "/images/shopping-cart.svg"/>
                        <span>Купить</span>
                    </button>
                </div>
            </article>
        </div>
    `
}
function clearSelection() {
    const selectedSection = document.querySelector('.select-section-categoryes');
    selectedSection.innerHTML = '';
}