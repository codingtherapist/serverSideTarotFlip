# flip_flip

A simple card flip project to practice serverside and a client side java script. 

<img width="336" alt="Screen Shot of card reading 'a card of the major arcana'" src="https://user-images.githubusercontent.com/102367926/182604522-37c97494-7129-45e0-b82a-e20acebdc584.png">.  <img width="330" alt="Screen of card reading 'a description of the card'" src="https://user-images.githubusercontent.com/102367926/182604573-dd1145f7-b8c9-4f4b-9bac-f267dfcc2c0d.png">.

<img width = 330 alt = "screenshot showing card name and card image" src="https://user-images.githubusercontent.com/102367926/183090213-0f0a1115-efbf-469b-81e2-4693ddf3a4be.png">. <img width = 330 alt = "screenshot showing back of card reading 'Sudden change, upheaval, chaos, revelation, awakening'" src ="https://user-images.githubusercontent.com/102367926/183090247-ebd4ac86-c8fa-4de6-84a5-54fac3697bd9.png">.


### How it's Made
Tech used: HTML, CSS, client side Javascript, Node.js, Express

A very simple HTML scaffold for a card and a button. CSS styles the card and a borrowed animation provides a card "flip". Client side JS fires the CSS animation on card click and requests card information from server side JS (Node and Express) on button click and resets card text based on JSON response. On the server side I stored data about the tarot major arcana. A clientside fetch requests information for a random card which is provided as JSON. 

### Optimizations
X style card to include card image. (completed 8/4/22)

X figure out styling card for card image "reversed". (completed 8/5/22)
- less awkward/more efficient method to present text on card as card is drawn.
- further site styling.
 
 X host live site (completed 8/5/22)

### Lessons learned
- appropriate place for flipping function (client side js)
- method/data structure to get random card
- multiple lessons on use of github
- digesting JSON information and presenting to DOM.
- CSS translate/transform
