import InfoPkm from "../InfoPkm/InfoPkm";
import ListPkm from "../ListPkm/ListPkm";
import "./App.css";
import React from "react";

export default class App extends React.Component {
    constructor() {
        super();

        this.compteur = 1;

        this.state = {
            compteur: 1
        };
        this.augmenteCompte = this.augmenteCompte.bind(this);
        this.diminueCompte = this.diminueCompte.bind(this);
    }

    augmenteCompte() {
        this.setState({
            compteur: this.state.compteur + 1,
        });
    }

    diminueCompte() {
        console.log("hola")
        this.setState({
            compteur: this.state.compteur - 1,
        });
    }

    render() {
        return (
            <section className="App">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/1280px-International_Pokémon_logo.svg.png"/>
                <InfoPkm compteur={this.state.compteur} augmenteCompte={this.augmenteCompte} diminueCompte={this.diminueCompte}   />
                <ListPkm/>

            </section>
        );
    }
}
