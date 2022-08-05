const card = document.getElementById('card')
const button = document.getElementById('button')
const image = document.querySelector("img")

card.addEventListener('click', flipCard)
button.addEventListener('click', newCard)

let frontText = "A card from the major arcana" //this matches the text in HTML, but sets it as a variable so we can reassign it
let backText = "A description of that card's meaning" // ditto

function flipCard(){
    card.classList.toggle('flipCard')
    document.getElementById('frontText').innerText = frontText //changes the text to whatever the variable says; can match HTML, or may be reassigned in newCard function
    document.getElementById('backText').innerText = backText // ditto
} 
function newCard(){
    fetch ("/newCard") //this makes a request to server.js for what exists at /newCard (this is the math.random and the respond.json (majorArcana[math]) stuff
        .then((response) => response.json()) //server.js responds with that stuff this takes the response and realizes that it is JSON
        .then((data) => {  // call the stuff data
            frontText = data.cardFront; //reassigns front text to be the stuff that comes back lablled cardFront (name of card)
            backText = data.cardBack; // ditto but cardBack (description of card)
            image.src=data.imgurl;//reassigns image source as imgurl
            image.alt=data.cardFront;// reassigns image alt text as cardFront (name of card)
            if(data.reversed === true){
                image.classList.add('reversed');
            }else if (data.reversed === false){
                image.classList.remove("reversed")
            }

            flipCard()
            flipCard()//this is the BADDIEST bit. The reassignment doesn't show up until the flip card function runs. So without this, it will still read "a card from major arcana" until you click the card which will change as the animation is running, so I put flipCard() twice so that the function runs, but you end up on the same "face" of the card and it changes the description (and if appropriate adds the image).
        })
        .catch (error => {
            console.log(`error ${error}`)
        })
}