import ReactDOM from "react-dom";
import React from "react";

import "./styles/reset.css";
import "./styles/style.css";

function App() {

    return (
        <>
            <div className="home">
                <div className="barra-topo">CINEFLEX</div>
                <div className="titulo-secao">Selecione o filme</div>
                <div className="filmes">
                    <div className="filme">A</div>
                    <div className="filme">A</div>
                    <div className="filme">A</div>
                    <div className="filme"></div>
                    <div className="filme"></div>
                </div>
            </div>
        </>
    );

}

ReactDOM.render(<App />, document.querySelector(".root"));