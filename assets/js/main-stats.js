/*
    Clicar em um card da lista de pokémon (li) faz abrir um card com os stats dele
*/

const stat = document.getElementById('stat')

pokemonList.addEventListener('click', () => {

    pokeApi.getPokemonStats().then(() => {
        const htmlStat = (pokemon) => {
            `<section id="stat" class="content stats">
                <h1>Tá funcionando</h1>
                    <img src="./assets/images/back-arrow.png" alt="back arrow">
                    <img src="./assets/images/pokeball.png" alt="pokeball image" class="pokeball-image">
    
                    <span class="name">${pokemon.name}</span>
                    <span class="number">${pokemon.number}</span>
                    <span class="type ${type}">${type}</span>
    
                    <div class="about">
                        <div class="weight">
                            <img src="./assets/images/weight.png">
                            <p class="weight">${pokemon.stats.weight}kg
                            <span>Weight</span>
                        </div>
    
                        <div class="height">
                            <img src="./assets/images/height.png">
                            <p class="height">0,${pokemon.height}cm
                            <span>Height</span>
                        </div>
    
                        <div class="moves">
                            <p>${pokemon.moves.move.name}</p>
                        </div>
                    </div>
            </section>`.join('')
        }
        stat.innerHTML = htmlStat
    })
}

)
