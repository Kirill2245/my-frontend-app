const registration_form = document.getElementById('registration-form')
const btn_open_signForm = document.getElementById('btn-open-signForm')
const sign_form = document.getElementById('sign-form')
btn_open_signForm.addEventListener('click', () => {
    registration_form.style.display = 'none'
    sign_form.style.display = 'flex'
})