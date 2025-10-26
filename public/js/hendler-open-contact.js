const open_contact = document.getElementById('open-contact')
const contact_section = document.getElementById('contact-section')
open_contact.addEventListener('click', () => {
    document.body.style.overflow = 'hidden'
    contact_section.style.transform = 'scale(1)'
})