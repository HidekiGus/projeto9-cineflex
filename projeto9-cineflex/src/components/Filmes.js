import ReactDOM from "react-dom";
import React, { Link, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import axios from "axios";

export default function Filmes() {

    const [items, setItems] = useState([]);
    const [dados, setDados] = useState([]);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");


        requisicao.then(resposta => setItems(resposta.data));

    }, []);

    function enviar() {
        console.log("clicado")
    }


    return (
        <div className="home">
            <div className="barra-topo">CINEFLEX</div>
            <div className="titulo-secao">Selecione o filme</div>
            <div className="filmes">
                {items.map((filme) =>(
                    <Filme foto={filme.posterURL} alt="" />
                ))}
            </div>
        </div>
    );
}

function Filme({ foto }) {
    console.log("Repetido")
    return (
        <div className="filme">
            <img src={foto} />
        </div>
    );
}

