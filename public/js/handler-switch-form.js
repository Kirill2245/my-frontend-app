const registration_form = document.getElementById('registration-form')
const btn_open_signForm = document.getElementById('btn-open-signForm')
const sign_form = document.getElementById('sign-form')
const not_account_btn = document.getElementById('not-account-btn')
const btn_open_registration_form = document.getElementById('btn-open-registration-form')
btn_open_signForm.addEventListener('click', () => {
    registration_form.style.display = 'none'
    sign_form.style.display = 'flex'
})
not_account_btn.addEventListener('click', () => {
    sign_form.style.display ='none'
    registration_form.style.display = 'flex'
})
btn_open_registration_form.addEventListener('click', () => {
    sign_form.style.display ='none'
    registration_form.style.display = 'flex'
})