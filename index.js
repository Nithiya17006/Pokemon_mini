async function fetchData() {
    try{
        const pokemonName = document.getElementById("pokemonname").value.toLowerCase();
        const response =await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("COuld not fetch data");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const image = document.getElementById("pokemonSprite");
        image.src = pokemonSprite;
        image.style.display = "block";
    }
    catch(error){
          console.error(error);
    }
}