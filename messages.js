
// lists of inputs for the message
const events = ['find 3 kittens','meet your soulmate', 'trip over nothing', 'get the call of a lifetime', 'witness a car accident', 'miss your parents', 'win the lottery'];
const locations = ['the bookstore', 'the coffee shop', 'the library', 'your home', 'school', 'the grocery store', 'the park'];
const feelings = ['elated', 'angry', 'excited', 'confused', 'frustrated', 'ecstatic', 'dumbfounded', 'neutral', 'devastated'];


// functions for the game
const generateMessagePart = (messagePart) => {
    if (messagePart === 'event') {
        return events[Math.floor(Math.random() * events.length)]
    } else if (messagePart === 'location') {
        return locations[Math.floor(Math.random() * events.length)]
    } else if (messagePart === 'feeling') {
        return feelings[Math.floor(Math.random() * events.length)]
    }
}

const generateNewMessage = () => {
    return `You will ${generateMessagePart('event')} at ${generateMessagePart('location')} and you will feel ${generateMessagePart('feeling')}!`
}


//  testing
console.log(generateNewMessage());