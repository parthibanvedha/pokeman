// get html elements to dom
const output = document.querySelector(".row")


// logic for onclick event 
async function getInfo(){
    const noOfPokemons = document.getElementById("num").value
    async function Pokemons(){
        // User can set number of pokemons
        for(let i=1; i<=noOfPokemons; i++){         
            await getPokemonApi(i)
        }
    }

    // Logic for fetching api
    async function getPokemonApi(id){
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();

            // getting output to brwoser
            document.getElementById("num").value = "";
            const div = document.createElement('div');
            div.className="col-lg-4 col-md-6 col-sm-12"
            div.innerHTML=`
            <div class="card border-primary" style="width: 18rem;">
            <div class="card-header">
            <b>${data.name}</b>
            </div>
            <div class="pokemon-img">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="${data.name}">
            </div>
            <div class="card-body" id="pokemon-info">
                <p><strong>Number: </strong> ${data.id} </p>
                <p><strong>Ability: </strong> ${data.abilities[0].ability.name} </p>
                <p><strong>Moves: </strong> ${data.moves[0].move.name} </p>
                <p><strong>Weight: </strong> ${data.weight} </p>
            </div>
            </div>
            `
            output.appendChild(div)
        } catch (error) {
            alert("Refresh the page or API connection lost")
        }
    }
    
    Pokemons();
}