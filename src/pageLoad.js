const RESTAURANT_NAME = 'bread butter'
const ABOUT = 'about'
const CONTACT = 'contact us'
const MENU = 'menu'

let navDiv = document.createElement('nav')
navDiv.innerText = RESTAURANT_NAME

let navLinks = document.createElement('ul')

const navLink = document.createElement('li')
navLink.innerText = MENU 
navLinks.appendChild(navLink)
const navLink1 = document.createElement('li')
navLink1.innerText = CONTACT
navLinks.appendChild(navLink1)
const navLink2 = document.createElement('li')
navLink2.innerText = ABOUT 
navLinks.appendChild(navLink2)

navDiv.appendChild(navLinks)

export default navDiv