
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
                        <img src = "/images/bx_bx-filter-alt.svg" alt = ""/>
                        <p class = "text-uppercase">фильтры</p>
                    </div>
                    <p class = "text-uppercase">${category.list.length} позиций в категории</p>
                </header>
                <div class="card-list">
                    ${category.list.map(item => CardProduct(item)).join('')}
                </div>

            `;
        })
        .catch(error => {
            console.error('Error:', error);
            selectedSection.innerHTML = '<div class="error">Ошибка загрузки</div>';
        });
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