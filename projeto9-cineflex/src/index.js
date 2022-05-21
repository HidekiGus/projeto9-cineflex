import ReactDOM from "react-dom";
import React from "react";

import "./styles/reset.css";
import "./styles/style.css";

import foto1 from "./img/foto1.png";
import foto2 from "./img/foto2.png";

import Filmes from "./components/Filmes";

function App() {

    const tabela = [
        [foto1],
        [foto2],
        [foto2],
        [foto1],
        [foto2],
        [foto1],
        [foto1],
        [foto1],
        [foto2],
        [foto2],
        [foto1],
        [foto2],
        [foto1],
        [foto1]
    ]

    return (
        <>
            <div className="home">
                <div className="barra-topo">CINEFLEX</div>
                <div className="titulo-secao">Selecione o filme</div>
                <Filmes fotos={tabela} />
            </div>
        </>
    );

}

ReactDOM.render(<App />, document.querySelector(".root"));