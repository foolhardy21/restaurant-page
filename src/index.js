import { navDiv, menuLink, contactLink, aboutLink } from './pageLoad'
import aboutDiv from './About'

const contentDiv = document.querySelector('#content')
contentDiv.appendChild(navDiv)

aboutLink.addEventListener('click',() => {
    contentDiv.appendChild(aboutDiv)
})


