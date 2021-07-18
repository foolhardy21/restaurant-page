const RESTAURANT_NAME = 'bread butter'
const ABOUT = 'about'
const CONTACT = 'contact us'
const MENU = 'menu'

let navDiv = document.createElement('nav')
navDiv.innerText = RESTAURANT_NAME

let navLinks = document.createElement('ul')

const menuLink = document.createElement('li')
menuLink.innerText = MENU 
navLinks.appendChild(menuLink)
const contactLink = document.createElement('li')
contactLink.innerText = CONTACT
navLinks.appendChild(contactLink)
const aboutLink = document.createElement('li')
aboutLink.innerText = ABOUT 
navLinks.appendChild(aboutLink)

navDiv.appendChild(navLinks)

export { navDiv, menuLink, contactLink, aboutLink } 