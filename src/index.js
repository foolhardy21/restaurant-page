import { navDiv, menuLink, contactLink, aboutLink } from './pageLoad'
import aboutDiv from './About'
import contactDiv from './Contact'

const contentDiv = document.querySelector('#content')
contentDiv.appendChild(navDiv)

aboutLink.addEventListener('click',() => {

    if(contentDiv.childElementCount == 2) {
        
        contentDiv.removeChild(contentDiv.lastChild)
    
    }
    contentDiv.appendChild(aboutDiv)
})

contactLink.addEventListener('click',() => {
    
    if(contentDiv.childElementCount == 2) {
        
        contentDiv.removeChild(contentDiv.lastChild)
    
    }
    contentDiv.appendChild(contactDiv)
})

