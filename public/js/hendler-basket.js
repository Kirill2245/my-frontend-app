const basket_btn = document.getElementById('btn-basket')
const secton_basket = document.getElementById('basket-section')
const btn_close_basket = document.getElementById('close-basket')
let flag = false
basket_btn.addEventListener('click', ()=>{
    if(!flag){
        flag = true
        secton_basket.style.opacity ='1'
        secton_basket.style.transform ='translateY(115px) scale(1)'
    } else {
        flag = false
        secton_basket.style.opacity ='0'
        secton_basket.style.transform ='translateY(-100%) scale(0)'
    }
})

btn_close_basket.addEventListener('click',() => {
    flag = false
    secton_basket.style.opacity ='0'
    secton_basket.style.transform ='translateY(-100%) scale(0)'
})