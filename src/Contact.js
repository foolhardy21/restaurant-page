const contactDiv = document.createElement('section')
contactDiv.className = 'contact'

const phoneDiv = document.createElement('div')
phoneDiv.innerText = 'phone number'
const emailDiv = document.createElement('div')
emailDiv.innerText = 'email id'
const addressDiv = document.createElement('div')
addressDiv.innerText = 'address'

contactDiv.appendChild(phoneDiv)
contactDiv.appendChild(emailDiv)
contactDiv.appendChild(addressDiv)

export default contactDiv