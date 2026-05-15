const cards = document.getElementById("cards")

async function carregarPokemon(){

    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=6")

    const dados = await resposta.json()

    const pokemons = dados.results

    cards.innerHTML = ""

    pokemons.forEach(async function(pokemon){

        const respostaPokemon = await fetch(pokemon.url)

        const dadosPokemon = await respostaPokemon.json()

        const card = document.createElement("div")

        card.classList.add("card")

        card.innerHTML = `

            <img src="${dadosPokemon.sprites.front_default}">

            <h2>${dadosPokemon.name}</h2>

            <p>Altura: ${dadosPokemon.height}</p>

            <p>Peso: ${dadosPokemon.weight}</p>

        `

        cards.appendChild(card)

    })

}