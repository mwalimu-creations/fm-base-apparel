const regex = /(^[^\s@]+@[^\s@]+\.[^\s@]+$)/i

const emailInput = document.getElementById('email-input')
const inputSection = document.getElementById('input-section')
const submitBtn = document.getElementById('submit-btn')
const errorPgf = document.createElement('p')
errorPgf.classList.add('error-message')
errorPgf.textContent = 'Please provide a valid email'

function testEmail(email) {
    return regex.test(email)
}


submitBtn.addEventListener('click', ()=> {
    if (!emailInput.value) {
        if(!emailInput.classList.contains('error-state')) {
            emailInput.classList.add('error-state')
        }
        inputSection.appendChild(errorPgf)
    } else if(!testEmail(emailInput.value)) {
        if(!emailInput.classList.contains('error-state')) {
            emailInput.classList.add('error-state')
        }
        inputSection.appendChild(errorPgf)
    } else {
        errorPgf.remove()
        emailInput.classList.remove('error-state')
    }
})
