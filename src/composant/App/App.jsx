import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Link , NavLink} from 'react-router-dom';
import InfoPkm from "../InfoPkm/InfoPkm";
import ListPkm from "../ListPkm/ListPkm";
import React from "react";
import Accueil from "../Accueil/Accueil";

export default class App extends React.Component {
    constructor() {
        super();

        this.compteur = 1;

        this.state = {
            compteur: 1,
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
        console.log("hola");
        this.setState({
            compteur: this.state.compteur - 1,
        });
    }

    render() {
        return (
            <section className="App">
                <Router id="App">
                    <Link to="/">
                    <img  className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/1280px-International_Pokémon_logo.svg.png" alt="logo"/>
                    </Link>
                    <nav className="nav_pkm">
                    <NavLink className="button-12" to="/listpkm" > Pokémon liste</NavLink>
                    <NavLink className="button-12" to="/pokedex"  > pokedex</NavLink>
                    </nav>
                    <Routes>
                        <Route path="/" element={ <Accueil/>} />
                        <Route path="/pokedex" element={ <InfoPkm  compteur={this.state.compteur} augmenteCompte={this.augmenteCompte} diminueCompte={this.diminueCompte}/>}  />
                        <Route path="/listpkm" element={ <ListPkm/>}/>
                    </Routes>
                </Router>
                
              
            </section>
        );
    }
}
