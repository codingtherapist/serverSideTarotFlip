# flip_flip

A simple card flip project to practice serverside and a client side java script. 

<img src="img/gifflip.gif" alt="screen recording of tarot flip website">


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
