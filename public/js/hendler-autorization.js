const btn_autor = document.getElementById('btn-autor')
const autorization_section = document.getElementById('autorization-section')
const close_autorization_btn = document.getElementById('close-autorization-btn')
let isAuthorizationOpen = false
btn_autor.addEventListener('click', () => {
    if(!isAuthorizationOpen){
        isAuthorizationOpen = true
        autorization_section.style.opacity ='1'
        autorization_section.style.transform ='translateY(115px) scale(1)'
    }
    else{
        isAuthorizationOpen = false
        autorization_section.style.opacity ='0'
        autorization_section.style.transform ='translateY(-100%) scale(0)'
    }
})
close_autorization_btn.addEventListener('click', () => {
    isAuthorizationOpen = false
    autorization_section.style.opacity ='0'
    autorization_section.style.transform ='translateY(-100%) scale(0)'
})