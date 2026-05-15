const cards = document.getElementById("cards")

async function carregarRickMorty(){

    const resposta = await fetch("https://rickandmortyapi.com/api/character")

    const dados = await resposta.json()

    const personagens = dados.results

    cards.innerHTML = ""

    personagens.slice(0, 6).forEach(function(personagem){

        const card = document.createElement("div")

        card.classList.add("card")

        card.innerHTML = `

            <img src="${personagem.image}">

            <h2>${personagem.name}</h2>

            <p>Status: ${personagem.status}</p>

            <p>Espécie: ${personagem.species}</p>

            <p>Gênero: ${personagem.gender}</p>

        `
        cards.appendChild(card)

    })

}