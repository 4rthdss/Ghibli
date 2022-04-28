const root = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

const logo = document.createElement('img')
logo.src = 'logoWhite.png'

root.appendChild(logo)
root.appendChild(container)

let request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films')

request.onload = function () {
    var data = JSON.parse(this.response)
    
    if (request.status >= 200 && request.status < 400)
    data.forEach(movie => {        
        console.log(movie.title)
        console.log(movie.description)
        console.log(movie.image)

        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const cardImg = document.createElement('img')
        cardImg.src = movie.image
        cardImg.width = '200'

        const cardTitle = document.createElement('h1')
        cardTitle.textContent = movie.title
        
        const cardDescription = document.createElement('p')
        cardDescription.textContent = movie.description

        container.appendChild(card)
        card.appendChild(cardImg)    
        card.appendChild(cardTitle)
        card.appendChild(cardDescription)
    })
   else {
       console.error('Error')
   } 
}
request.send()
