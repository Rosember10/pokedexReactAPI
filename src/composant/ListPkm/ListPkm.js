import "./ListPkm.css";
import React from "react";

export default class ListPkm extends React.Component {
    constructor() {
        super();

        this.state = {
            pokemon: [],
            input: ''
        };
        this.searchListPkm = this.searchListPkm.bind(this);
    }

    async componentDidMount() {
        let response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=6"
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


    handleChange = (e) => {

        this.setState({ input: e.target.value });
    }


    async searchListPkm() {

        let id = this.state.input
        console.log(id);

        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=" + id);
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
                        <img src={pkm.sprites.back_default} alt="pokemon" />
                    </div>
                    <div className="pkm_type">
                        <p>type - {pkm.types[0].type.name} </p>
                    </div>
                </section>
            );
        });

        return (
            <div className="list_wrapper">
                <section className="search_wrapper">
                    <input
                        id="search"
                        type="number"
                        className="input_search"
                        placeholder="Number of pokemon to display"
                        name="search"
                        value={this.state.input}
                        onChange={this.handleChange}
                    />

                    <button id="bottone1" onClick={this.searchListPkm}>
                        <strong>search </strong>
                    </button>
                </section>
           
                    <section className="list_pkm">{oPokemon}</section>
           
            </div>
        );
    }
}
