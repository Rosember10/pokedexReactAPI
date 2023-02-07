import "./ListPkm.css";
import React from "react";

export default class ListPkm extends React.Component {
    constructor() {
        super();

        this.state = { pokemon: [] };
    }

    async componentDidMount() {
        let response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=251"
        );
        let data = await response.json();

        let pokemonData = await Promise.all(
            data.results.map(async (onePkm) => {
                let pkmResponse = await fetch(onePkm.url);
                return await pkmResponse.json();
            })
        );

        this.setState({
            pokemon: pokemonData,
        });
    }

    render() {
        let oPokemon = this.state.pokemon.map((pkm, i) => {
            return (
                <section className="one_pkm">
                    <header>
                        <h2>{pkm.name} </h2>
                    </header>
                    <div className="one_pkm_img">
                        <img src={pkm.sprites.front_default} alt="pokemon" />
                        <img src={pkm.sprites.back_default} alt="My Image" />
                    </div>
                    <div className="pkm_type">
                        <p>type - {pkm.types[0].type.name} </p>
                    </div>
                </section>
            );
        });

        return (
            <div>
                <h2>list</h2>
                <section className="list_pkm">{oPokemon}</section>
            </div>
        );
    }
}
