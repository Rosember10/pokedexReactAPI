import "./InfoPkm.css";
import React from "react";

export default class InfoPkm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = { pokemon: [] };
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.compteur);
        if (this.props.compteur !== prevProps.compteur) {
            this.componentDidMount();
        }
    }

    async componentDidMount() {
        let response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/" + this.props.compteur
        );

        let data = await response.json();

        this.setState({
            pokemon: {
                id: data.id,
                name: data.name,
                imgFront: data.sprites.front_default,
                imgBack: data.sprites.back_default,
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                specialAttack: data.stats[3].base_stat,
                specialDefense: data.stats[4].base_stat,
                speed: data.stats[5].base_stat,
                type: data.types[0].type.name,
                abality_1: data.abilities[0].ability.name,
                abality_2: data.abilities[1].ability.name === null ? "Not available":data.abilities[1].ability.name,
                height: (data.height / 10).toFixed(1),
                weight: (data.weight / 10).toFixed(1),
            },
        });
    }

    render() {
        console.log(this.state.pokemon.weight);
        let oPokemon = this.state.pokemon;

        //console.log(oPokemon);

        return (
            <div className="pokedex">
                <div className="card">
                    <div className="card_led">
                        <div className="red"></div>
                        <div className="yellow"></div>
                        <div className="green"></div>
                    </div>
                    <div className="card-image">
                        <img src={oPokemon.imgFront} alt="My Image" />
                    </div>
                    <div className="category"> {oPokemon.name}</div>
                    <div className="heading">
                        <button className="button-12" onClick={this.props.diminueCompte}>Previous</button>
                        <button className="button-12" onClick={this.props.augmenteCompte}>Next</button>
                    </div>
                </div>
                <div className="info_pokemon">
                    <div className="info_pokemon_data">
                        <h3>pokédex data</h3>
                        <div>
                            <p>National Number : {oPokemon.id} </p>
                            <p>Type : {oPokemon.type} </p>
                            <p>Height : {oPokemon.height} m</p>
                            <p>Weight : {oPokemon.weight} kg</p>
                            <p>Abilities 1 : {oPokemon.abality_1} </p>
                            <p>Abality 2 : {oPokemon.abality_2} </p>
                        </div>
                    </div>
                    <div className="info_pokemon_stats">
                        <h3>pokédex Stats</h3>
                        <div>
                            <p>Hp: {oPokemon.hp} </p>
                            <p>attack: {oPokemon.attack} </p>
                            <p>defense: {oPokemon.defense} </p>
                            <p>special Attack: {oPokemon.specialAttack} </p>
                            <p>special Defense: {oPokemon.specialDefense} </p>
                            <p>speed: {oPokemon.speed} </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
