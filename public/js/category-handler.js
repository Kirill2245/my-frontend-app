
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

let productCounter = 0;

function CardProduct(item) {
    const uniqueId = `box-anim-add-product-${productCounter++}`;
    
    return `
        <div class="card-product">
            <div class="card-product-contain">
                <div style="background-color:${item.color};"></div>
                <img src="${item.image}"/>
            </div>
            <article>
                <h3 class="text-uppercase">${item.name}</h3>
                <p class="text-description">${item.descripton}</p>
                <svg width="274" height="2" viewBox="0 0 274 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="274" y2="1" stroke="#D9FF5A" stroke-width="2"/>
                </svg>
                <div class="price-card-buy">
                    <div class='price-box'>
                        <p>${item.price}</p>
                        <span>₽</span>
                    </div>
                    <div class="relative-box-btn">
                        <div id="${uniqueId}" class="box-anim-add-product">+ <img src="/images/basket.svg"></div>
                        <button onclick="handleBuyClickAddProduct('${uniqueId}')">
                            <img src="/images/shopping-cart.svg"/>
                            <span>Купить</span>
                        </button>
                    </div>
                </div>
            </article>
        </div>
    `;
}

const handleBuyClickAdd = (elementId) => {
    console.log('click')
    const box_anim_add_product = document.getElementById(elementId);
    box_anim_add_product.style.animation = 'none';
    void box_anim_add_product.offsetWidth;
    box_anim_add_product.style.animation = 'animadd 0.8s';
    box_anim_add_product.style.transform = 'translateY(-50px) scale(1)';
    box_anim_add_product.style.opacity = '1';
    console.log(box_anim_add_product);
    
    setTimeout(() => {
        box_anim_add_product.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 1000);
}
function clearSelection() {
    const selectedSection = document.querySelector('.select-section-categoryes');
    selectedSection.innerHTML = '';
}