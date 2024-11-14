const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const root = path.join(__dirname, 'public')

const jokeList = [
    {
        id: 1,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field."
    },
    {
        id: 2,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired."
    },
    {
        id: 3,
        joke: "Why don't scientists trust atoms?",
        punchline: "Because they make up everything!"
    },
    {
        id: 4,
        joke: "What do you call fake spaghetti?",
        punchline: "An impasta!"
    },
    {
        id: 5,
        joke: "Why did the math book look sad?",
        punchline: "Because it had too many problems."
    },
    {
        id: 6,
        joke: "How does a penguin build its house?",
        punchline: "Igloos it together!"
    },
    {
        id: 7,
        joke: "Why can't you give Elsa a balloon?",
        punchline: "Because she'll let it go!"
    },
    {
        id: 8,
        joke: "What do you get when you cross a snowman and a vampire?",
        punchline: "Frostbite."
    },
    {
        id: 9,
        joke: "Why did the coffee file a police report?",
        punchline: "It got mugged."
    },
    {
        id: 10,
        joke: "How do cows stay up to date?",
        punchline: "They read the moos-paper."
    },
    {
        id: 11,
        joke: "What’s orange and sounds like a parrot?",
        punchline: "A carrot."
    },
    {
        id: 12,
        joke: "Why don’t skeletons fight each other?",
        punchline: "They don’t have the guts."
    },
    {
        id: 13,
        joke: "Why are frogs so happy?",
        punchline: "Because they eat whatever bugs them!"
    },
    {
        id: 14,
        joke: "What did one wall say to the other?",
        punchline: "I'll meet you at the corner."
    },
    {
        id: 15,
        joke: "How does a cucumber become a pickle?",
        punchline: "It goes through a jarring experience!"
    },
    {
        id: 16,
        joke: "Why was the math teacher suspicious?",
        punchline: "She kept making too many assumptions!"
    },
    {
        id: 17,
        joke: "Why did the tomato turn red?",
        punchline: "Because it saw the salad dressing!"
    },
    {
        id: 18,
        joke: "What’s a cat’s favorite color?",
        punchline: "Purr-ple."
    },
    {
        id: 19,
        joke: "Why are fish so smart?",
        punchline: "Because they live in schools!"
    },
    {
        id: 20,
        joke: "What did the big flower say to the little flower?",
        punchline: "Hey, bud!"
    }
]

app.use(express.static('public'))
app.use(express.json())

app.get('/', (request, response) => {
    response.sendFile('index.html', { root })
})

app.get('/api/v1/random-joke', (request, response) => {
    const randomNumber = Math.floor(Math.random() * jokeList.length)
    response.send(jokeList[randomNumber])
})

app.listen(port, () => console.log(`JokeAPI is running at: http://localhost:${port}/`))