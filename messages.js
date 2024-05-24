
// lists of inputs for the message
const messageOptions = {
    events: ['find 3 kittens','meet your soulmate', 'trip over nothing', 'get the call of a lifetime', 'witness a car accident', 'miss your parents', 'win the lottery'],
    locations: ['the bookstore', 'the coffee shop', 'the library', 'your home', 'school', 'the grocery store', 'the park'],
    feelings: ['elated', 'angry', 'excited', 'confused', 'frustrated', 'ecstatic', 'dumbfounded', 'neutral', 'devastated']
};


// functions for the game
const generateMessagePart = (messagePart) => {
    if (messagePart === 'event') {
        return messageOptions.events[Math.floor(Math.random() * messageOptions.events.length)]
    } else if (messagePart === 'location') {
        return messageOptions.locations[Math.floor(Math.random() * messageOptions.locations.length)]
    } else if (messagePart === 'feeling') {
        return messageOptions.feelings[Math.floor(Math.random() * messageOptions.feelings.length)]
    }
}

const generateNewMessage = () => {
    return `You will ${generateMessagePart('event')} at ${generateMessagePart('location')} and you will feel ${generateMessagePart('feeling')}!`
}


//  testing
console.log(generateNewMessage());