const handleBuyClickAddProduct = (elementId) => {
    console.log('click')
    const box_anim_add_product = document.getElementById(elementId);
    box_anim_add_product.style.animation = 'none';
    void box_anim_add_product.offsetWidth;
    box_anim_add_product.style.animation = 'anima 0.8s'
    box_anim_add_product.style.transform = 'translate(50px, -40px) scale(1)';
    setTimeout(() => {
        box_anim_add_product.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 800);
}