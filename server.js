// 1 initialize npm and install all dependencies
            //              command is npm init
// express, dotenv, cors, mongodb, ejs, nodemon (--save -dev)
            // command is npm install express
// 2 require dependencies in server dependencies
            // (const express = require express)
// 3 delare variables
        //
// create gitignore file and push to github

// 4 connect to MongoDB - add connection string to .env file

// 5 create port
// test Mongo and Port Connection

// 6 set middleware

// 7 create gitignore file

// 8 create public and views folders add main.js and style.css to public and index.ejs to views

// 9 add content to main.js, style.css, and index.ejs

//10 create heroku repo (config vars) for env 
//heroku login
//heroku create app
//echo "web: node server.js> Procfile
// git add . 
// git commit -m "changes"
// git push heroku main

const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const PORT = 1111

const majorArcana = { //setting up all the cards within an object (look at rappers-api for where I got inspiration from)
    1:{ //I initally used the card's name for this, but then realized I'd have to do a lot of math to get the place in the object, so I decided just to number them so later the Math.random immediately references a card 
        cardFront: "The Fool",
        cardBack: "Think about new beginnings. Focus on finding your inner innocence, be a little more spontanious and free spirited today",
        imgurl: "https://philosopherswheel.com/foolB.jpg", // borrowed images!
        reversed: false // I added this for later when I want to be able to use CSS to flip the image upside down
    },
    2: {
        cardFront: "The Fool Reversed",
        cardBack:   "Ask yourself: What is holding you back?, Have you been reckless or taking risks lately?",
        imgurl: "https://philosopherswheel.com/foolB.jpg",
        reversed: true
    },
    3: {
        cardFront: "The Magician",
        cardBack:   "Today is a great day for manifestation. Use your resourcefulness and power to inspire action",
        imgurl: "https://philosopherswheel.com/magician1.jpg",
        reversed: false
    },
    4: {
        cardFront: "The Magician Reversed",
        cardBack: "Be careful of poor planning and not using all of your resources available. Be wary of manipulation from others",
        imgurl: "https://philosopherswheel.com/magician1.jpg",
        reversed: true
    }, 
    5: { 
        cardFront: "The High Priestess",
        cardBack: "Trust your intuition and aknowledge your subconscious mind.  Honor the sacred knowledge that comes from the divine feminine today",
        imgurl: "https://philosopherswheel.com/highpriestess1.jpg",
        reversed: false
    },
    6:{
        cardFront: "The High Priestess Reversed",
        cardBack: "Have you been feeling withdrawn or silenced lately? Remember to listen to your intuition today",
        imgurl: "https://philosopherswheel.com/highpriestess1.jpg",
        reversed: true,
    },
    7:{
        cardFront: "The Empress",
        cardBack: "Lean into the more nurturing parts of yourself today. Take a little extra care on your inner and outter appearence and abundance will be yours",
        imgurl: "https://philosopherswheel.com/empress1.jpg",
        reversed: false,    
    }, 
    8:{
        cardFront: "The Empress Reversed",
        cardBack: "Are you feeling a creative block? Your dependence on others may be stopping  you short of where you want to be",
        imgurl: "https://philosopherswheel.com/empress1.jpg",
        reversed: true
    },
    9: {
        cardFront: "The Emperor",
        cardBack: "Authority, establishment, structure, a father figure",
        imgurl: "https://philosopherswheel.com/emperor1.jpg",
        reversed: false,
    },
    10: {
        cardFront: "The Emperor Reversed",
        cardBack: "Domination, excessive control, lack of discipline, inflexibility", 
        imgurl: "https://philosopherswheel.com/emperor1.jpg",
        reversed: true
    },
    11: {
        cardFront: "The Hierophant",
        cardBack: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions", 
        imgurl: "https://philosopherswheel.com/hierophant1.jpg",
        reversed: false,
    },
    12: {
        cardFront: "The Hierophant Reversed",
        cardBack: "Personal beliefs, freedom, challenging the status quo",
        imgurl: "https://philosopherswheel.com/hierophant1.jpg",
        reversed: true
    },
    13: {
        cardFront: "The Lovers",
        cardBack: "Love, harmony, relationships, values alignment, choices",
        imgurl: "https://philosopherswheel.com/lovers1.jpg",
        reversed: false,
    },
    14: {
        cardFront: "The Lovers Reversed",
        cardBack: "Self-love, disharmony, imbalance, misalignment of values",
        imgurl: "https://philosopherswheel.com/lovers1.jpg",
        reversed: true,
    },
    15: {
        cardFront: "The Chariot",
        cardBack: "Control, willpower, success, action, determination",
        imgurl: "https://philosopherswheel.com/chariot1.jpg",
        reversed: false,
    },
    16: {
        cardFront: "The Chariot Reversed",
        cardBack: "Self-discipline, opposition, lack of direction",
        imgurl: "https://philosopherswheel.com/chariot1.jpg",
        reversed: true,
    },
    17: {
        cardFront: "Strength",
        cardBack: "Strength, courage, persuasion, influence, compassion",
        imgurl: "https://philosopherswheel.com/strength1.jpg",
        reversed: false,
    },
    18: {
        cardFront: "Strength Reversed",
        cardBack: "Inner strength, self-doubt, low energy, raw emotion",
        imgurl: "https://philosopherswheel.com/strength1.jpg",
        reversed: true
    },
    19:{
        cardFront: "The Hermit",
        cardBack: "Soul-searching, introspection, being alone, inner guidance",
        imgurl: "https://philosopherswheel.com/hermit1.jpg",
        reversed: false,
    },
    20:{
        cardFront: "The Hermit Reversed",
        cardBack: "Isolation, loneliness, withdrawal",
        imgurl: "https://philosopherswheel.com/hermit1.jpg",
        reversed: true
    },
    21:{
        cardFront: "Wheel Of Fortune",
        cardBack: "Good luck, karma, life cycles, destiny, a turning point",
        imgurl: "https://philosopherswheel.com/wheeloffortune1.jpg",
        reversed: false,
    },
    22:{
        cardFront: "Wheel Of Fortune Reversed",
        cardBack: "Bad luck, resistance to change, breaking cycles",
        imgurl: "https://philosopherswheel.com/wheeloffortune1.jpg",
        reversed: true
    },
    23:{
        cardFront: "Justice",
        cardBack: "Justice, fairness, truth, cause and effect, law",
        imgurl: "https://philosopherswheel.com/justice1.jpg",
        reversed: false
    },
    24:{
        cardFront: "Justice Reversed",
        cardBack: "Unfairness, lack of accountability, dishonesty",
        imgurl: "https://philosopherswheel.com/justice1.jpg", 
        reversed: true
    },
    25:{
        cardFront: "The Hanged Man",
        cardBack: "Pause, surrender, letting go, new perspectives",
        imgurl: "https://philosopherswheel.com/hangedman1.jpg",
        reversed: false,
    },
    26:{
        cardFront: "The Hanged Man Reversed",
        cardBack: "Delays, resistance, stalling, indecision", 
        imgurl: "https://philosopherswheel.com/hangedman1.jpg",
        reversed: true,
    },
    27:{
        cardFront: "Death",
        cardBack: "Endings, change, transformation, transition",
        imgurl: "https://philosopherswheel.com/death1.jpg",
        reversed: false,
    },
    28:{
        cardFront: "Death Reversed",
        cardBack: "Resistance to change, personal transformation, inner purging",
        imgurl: "https://philosopherswheel.com/death1.jpg",
        reversed: true,
    },
    29:{
        cardFront: "Temperance",
        cardBack: "Balance, moderation, patience, purpose",
        imgurl: "https://philosopherswheel.com/temperance1.jpg",
        reversed: false
    },
    30:{
        cardFront: "Temperance Reversed",
        cardBack: "Imbalance, excess, self-healing, re-alignment",
        imgurl: "https://philosopherswheel.com/temperance1.jpg",
        reversed: true
    },
    31:{
        cardFront: "The Devil",
        cardBack: "Shadow self, attachment, addiction, restriction, sexuality",
        imgurl: "https://philosopherswheel.com/devil1.jpg",
        reversed: false,
    },
    32:{
        cardFront: "The Devil Reversed",
        cardBack: "Releasing limiting beliefs, exploring dark thoughts, detachment",
        imgurl: "https://philosopherswheel.com/devil1.jpg",
        reversed: true
    },
    33:{
        cardFront: "The Tower",
        cardBack: "Sudden change, upheaval, chaos, revelation, awakening",
        imgurl: "https://philosopherswheel.com/tower1.jpg",
        reversed: false,
    },
    34:{
        cardFront: "The Tower Reversed",
        cardBack: "Personal transformation, fear of change, averting disaster",
        imgurl: "https://philosopherswheel.com/tower1.jpg", 
        reversed: true,
    },
    35:{
        cardFront: "The Star",
        cardBack: "Hope, faith, purpose, renewal, spirituality",
        imgurl: "https://philosopherswheel.com/star1.jpg",
        reversed: false, 
    },
    36:{
        cardFront: "The Star Reversed",
        cardBack: "Lack of faith, despair, self-trust, disconnection",
        imgurl: "https://philosopherswheel.com/star1.jpg",
        reversed: true,
    },
    37:{
        cardFront: "The Moon",
        cardBack: "Illusion, fear, anxiety, subconscious, intuition",
        imgurl: "https://philosopherswheel.com/moon1.jpg",
        reversed: false
    },
    38:{
        cardFront: "The Moon Reversed",
        cardBack: "Release of fear, repressed emotion, inner confusion",
        imgurl: "https://philosopherswheel.com/moon1.jpg",
        reversed: true,
    },
    39:{
        cardFront: "The Sun",
        cardBack: "Positivity, fun, warmth, success, vitality",
        imgurl: "https://philosopherswheel.com/sun1.jpg",
        reversed: false,
    },
    40:{
        cardFront: "The Sun Reversed",
        cardBack: "Inner child, feeling down, overly optimistic",
        imgurl: "https://philosopherswheel.com/sun1.jpg",
        reversed: true,
    },
    41:{
        cardFront: "Judgement",
        cardBack: "Judgement, rebirth, inner calling, absolution",
        imgurl: "https://philosopherswheel.com/judgement1.jpg",
        reversed: false,
    },
    42:{
        cardFront: "Judgement Reversed",
        cardBack: "Self-doubt, inner critic, ignoring the call",
        imgurl: "https://philosopherswheel.com/judgement1.jpg",
        reversed: true
    },
    43:{
        cardFront: "The World",
        cardBack: "Completion, integration, accomplishment, travel",
        imgurl: "https://philosopherswheel.com/world1.jpg",
        reversed: false,
    },
    44:{
        cardFront: "The World Reversed",
        cardBack: "Seeking personal closure, short-cuts, delays", 
        imgurl: "https://philosopherswheel.com/world1.jpg",
        reversed: true,
    },
}


// returning ejs/html to the root
app.get('/', async (request, response) => {
    try {
        response.sendFile( __dirname + "/public/index.html")//I decided I didn't need ejs because we're not looping through the objects and or array in a way that needs methods or whatever so html is good enough and kept me from getting confused
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}) 

app.get('/newCard', async (request, response) =>{
    let math = Math.ceil( Math.random() * 44) // honestly the same mechanic as my coin flip to get a random number 1-44 and send back as json
    try { 
        response.json(majorArcana[math]) //this is the heavy lifter using the random number generator, if there is a thing that is essentially withing the object majorArcana and the result of the math, send it back to the main.js as JSON.  If I had kept the card names, it would have had to read something like majorArcana[variable] variable == "The Moon" to be able to respond. Which would have required setting up whatever variable AND tying that varaible to the math. I preferred to skip that step, though it's probably not best practice (feels very baddie and I will not apologize). 
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}) 

// middleware
app.set("view engine", "ejs") //helps parse ejs
app.use(express.static('public') ) //tells where to go for static files HTML/CSS
app.use(express.urlencoded ( {extended:true} ) ) //how to handle URLs
app.use(express.json() ) //allows use of JSON for objects
app.use(cors() ) //prevent cross object requests
//I know you had trouble with cors and dotenv, I just had to re-install via npm.


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT} yay` )
})

