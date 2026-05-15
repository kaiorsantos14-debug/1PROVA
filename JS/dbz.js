const cards = document.getElementById("cards")

async function carregarPersonagens(){

    const resposta = await fetch("https://dragonball-api.com/api/characters")

    const dados = await resposta.json()

    const personagens = dados.items

    cards.innerHTML = ""

    personagens.slice(0, 6).forEach(function(personagem){

        const card = document.createElement("div")

        card.classList.add("card")

        card.innerHTML = `

            <img src="${personagem.image}">

            <h2>${personagem.name}</h2>

            <p>Raça: ${personagem.race}</p>

            <p>Ki: ${personagem.ki}</p>

            <p>Gênero: ${personagem.gender}</p>

        `
        cards.appendChild(card)

    })

}