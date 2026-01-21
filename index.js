// express setup
const express = require("express")
const app = express()

// all my data :D

const pokemonStats = {
  Bulbasaur: {
    hp: 45,
    attack: 49,
    defense: 49,
    specialAttack: 65,
    specialDefense: 65,
    speed: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  Charmander: {
    hp: 39,
    attack: 52,
    defense: 43,
    specialAttack: 60,
    specialDefense: 50,
    speed: 65,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  Squirtle: {
    hp: 44,
    attack: 48,
    defense: 65,
    specialAttack: 50,
    specialDefense: 64,
    speed: 43,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  Pikachu: {
    hp: 35,
    attack: 55,
    defense: 40,
    specialAttack: 50,
    specialDefense: 50,
    speed: 90,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  Jigglypuff: {
    hp: 115,
    attack: 45,
    defense: 20,
    specialAttack: 45,
    specialDefense: 25,
    speed: 20,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
  },
  Meowth: {
    hp: 40,
    attack: 45,
    defense: 35,
    specialAttack: 40,
    specialDefense: 40,
    speed: 90,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
  },
  Psyduck: {
    hp: 50,
    attack: 52,
    defense: 48,
    specialAttack: 65,
    specialDefense: 50,
    speed: 55,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
  },
  Growlithe: {
    hp: 55,
    attack: 70,
    defense: 45,
    specialAttack: 70,
    specialDefense: 50,
    speed: 60,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
  },
  Machop: {
    hp: 70,
    attack: 80,
    defense: 50,
    specialAttack: 35,
    specialDefense: 35,
    speed: 35,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
  },
  Gastly: {
    hp: 30,
    attack: 35,
    defense: 30,
    specialAttack: 100,
    specialDefense: 35,
    speed: 80,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
  }
};


const pokemonAnimeFacts = {
  "Pokémon: Indigo League": {
    funFact: "Ash was originally planned to win more Gym Battles on his first try, but the anime kept his struggles to make him more relatable."
  },
  "Pokémon: Adventures in the Orange Islands": {
    funFact: "This arc introduced unconventional Gym challenges that focused on problem-solving rather than pure battling."
  },
  "Pokémon: The Johto Journeys": {
    funFact: "This series is the longest saga in the anime, spanning multiple seasons and over 150 episodes."
  },
  "Pokémon: Advanced": {
    funFact: "May was the first main female companion to have a goal unrelated to Gym battles, introducing Pokémon Contests."
  },
  "Pokémon: Diamond and Pearl": {
    funFact: "Ash’s rivalry with Paul is often considered one of the most mature and complex in the entire anime."
  },
  "Pokémon: Black & White": {
    funFact: "This series rebooted Ash’s character to feel more like a beginner for a new generation of viewers."
  },
  "Pokémon XY": {
    funFact: "Ash-Greninja was created specifically for the anime before later appearing in the video games."
  },
  "Pokémon Sun & Moon": {
    funFact: "This is the first Pokémon anime series to feature a school setting instead of a traditional Gym journey."
  },
  "Pokémon Journeys": {
    funFact: "Ash travels across all known regions rather than staying in a single one, revisiting past characters."
  },
  "Pokémon Horizons": {
    funFact: "This is the first main Pokémon anime series that does not star Ash Ketchum as the protagonist."
  }
};

app.use(express.static(__dirname + "/frontend"))

// my routes
app.get("/", (req, res) =>{
    res.status(200).sendFile(__dirname + "/frontend/index.html")
})

app.get("/docs", (req, res) =>{
    res.status(200).sendFile(__dirname + "/frontend/docs")
})


app.get("/pokemon/:name", (req, res) =>{
    res.status(200).sendFile(__dirname +"/frontend/pokemonGen.html")
})


// my middleware :D

app.get((req, res, next) =>{
    console.log(req.method + " " + req.url)
    next()
})


app.get((req, res, next) =>{
    res.status(404).send("<h1>404 NOT FOUND</h1>")
})


app.listen(3000, ()=>{
    console.log("Fallou's Pokemon API is running!")
})