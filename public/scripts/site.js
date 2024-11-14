const resultHeader = document.querySelector("h2")
const jokeHeader = document.querySelector("#joke")
const punchlineHeader = document.querySelector("#punchline")
const button = document.querySelector("button")

const url = 'http://localhost:3000/api/v1'

button.addEventListener("click", async () => {
    resultHeader.textContent = "Result: "

    const result = await fetch(url + '/random-joke')
    const { joke, punchline } = await result.json()

    jokeHeader.textContent = 'Joke: ' + joke
    punchlineHeader.textContent = '...' + punchline
})