import React, { useState } from "react";
import imgerror from "./asset/error.jpg";
import "./Search.css";

export default function Search() {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const error404 = {
        name: "Error 404",
        imgFront: imgerror,
        hp: "",
        attack: "",
        defense: "",
        specialAttack: "",
        specialDefense: "",
        speed: "",
        type: "",
        abality_1: "",
        abality_2: "",
        height: "",
        weight: "",
    };
    const [search, setSearch] = useState("");
    const [pokemonInfo, setpokemonInfo] = useState("");

    async function searchPkm() {
        console.log(search);
       if(search.length==0){
        setpokemonInfo(error404)
       }
        let pkmId;
        let pkmName;
        if (!isNaN(search)) {
            let response;
            try {
                response = await fetch(url + search);
                if (!response.ok) {
                    setpokemonInfo(error404);
                }
                response = await response.json();
                pkmId = {
                    id: response.id,
                    name: response.name,
                    imgFront: response.sprites.front_default,
                    imgBack: response.sprites.back_default,
                    hp: response.stats[0].base_stat,
                    attack: response.stats[1].base_stat,
                    defense: response.stats[2].base_stat,
                    specialAttack: response.stats[3].base_stat,
                    specialDefense: response.stats[4].base_stat,
                    speed: response.stats[5].base_stat,
                    type: response.types[0].type.name,
                    abality_1: response.abilities[0].ability.name,
                    abality_2:
                        response.abilities[1] === undefined
                            ? "Not available"
                            : response.abilities[1].ability.name,
                    height: (response.height / 10).toFixed(1),
                    weight: (response.weight / 10).toFixed(1),
                };

                console.log(pkmId);
                setpokemonInfo(pkmId);
            } catch (error) {
                console.log(error);
            }
        } else {
            let newSearch = search.trim().toLowerCase();

            let newResponse;
            try {
                newResponse = await fetch(url + search);
                if (!newResponse.ok) {
                    setpokemonInfo(error404);
                }
                newResponse = await newResponse.json();
                pkmName = {
                    id: newResponse.id,
                    name: newResponse.name,
                    imgFront: newResponse.sprites.front_default,
                    imgBack: newResponse.sprites.back_default,
                    hp: newResponse.stats[0].base_stat,
                    attack: newResponse.stats[1].base_stat,
                    defense: newResponse.stats[2].base_stat,
                    specialAttack: newResponse.stats[3].base_stat,
                    specialDefense: newResponse.stats[4].base_stat,
                    speed: newResponse.stats[5].base_stat,
                    type: newResponse.types[0].type.name,
                    abality_1: newResponse.abilities[0].ability.name,
                    abality_2:
                    newResponse.abilities[1] === undefined
                            ? "Not available"
                            : newResponse.abilities[1].ability.name,
                    height: (newResponse.height / 10).toFixed(1),
                    weight: (newResponse.weight / 10).toFixed(1),
                };

                console.log(pkmName,"new reponse");
                setpokemonInfo(pkmName);
                console.log(pokemonInfo,"segunda vez");
            } catch (error) {
                console.log(error);
            }

        }
    }

    if (!pokemonInfo) {
        return (
            <div>
                <section className="search_wrapper">
                    <input
                        id="search"
                        type="text"
                        className="input_search"
                        placeholder="search by name or id"
                        name="search"
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button id="bottone1" onClick={searchPkm}>
                        <strong>search </strong>
                    </button>
                </section>
            </div>
        );
    }
    return (
        <div className="search_wrapper_pokemon">
            <section className="search_wrapper">
                <input
                    id="search"
                    type="text"
                    placeholder="search by name or id"
                    className="input_search"
                    name="search"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button id="bottone1" onClick={searchPkm}>
                    <strong>search</strong>
                </button>
            </section>
            <section className="search__pokemon">
                <div className="pokedex">
                    <div className="card">
                        <div className="card_led">
                            <div className="red"></div>
                            <div className="yellow"></div>
                            <div className="green"></div>
                        </div>
                        <div className="card-image">
                            <img src={pokemonInfo.imgFront} alt="pokemon" />
                        </div>
                        <div className="category"> {pokemonInfo.name}</div>
                    </div>
                    <div className="info_pokemon">
                        <div className="info_pokemon_data">
                            <h3>pokédex data</h3>
                            <div>
                                <p>National Number : {pokemonInfo.id} </p>
                                <p>Type : {pokemonInfo.type} </p>
                                <p>Height : {pokemonInfo.height} m</p>
                                <p>Weight :{pokemonInfo.weight} kg</p>
                                <p>Abilities 1 : {pokemonInfo.abality_1}</p>
                                <p>Abality 2 :{pokemonInfo.abality_2}</p>
                            </div>
                        </div>
                        <div className="info_pokemon_stats">
                            <h3>pokédex Stats</h3>
                            <div>
                                <p>Hp: {pokemonInfo.hp} </p>
                                <p>attack: {pokemonInfo.attack} </p>
                                <p>defense: {pokemonInfo.defense} </p>
                                <p>special Attack: {pokemonInfo.specialAttack}</p>
                                <p> special Defense:{pokemonInfo.specialDefense}</p>
                                <p>speed: {pokemonInfo.speed} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
