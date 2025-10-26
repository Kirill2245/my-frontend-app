const box_anim_add = document.getElementById('box-anim-add')
const buy_btn_slide = document.getElementById('buy-btn-slide')
const handleBuyClikck = () => {
    box_anim_add.style.animation = 'none';
    void box_anim_add.offsetWidth;
    box_anim_add.style.animation = 'animadd 0.8s'
    box_anim_add.style.transform = 'translateY(50px) scale(1)'
    setTimeout(() => {
        box_anim_add.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 380);
}