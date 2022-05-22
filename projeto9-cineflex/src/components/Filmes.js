import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams, Link } from "react-router-dom";
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

    const { idSessoes } = useParams();

    return (
        <div className="home">
            <div className="barra-topo">CINEFLEX</div>
            <div className="titulo-secao">Selecione o filme</div>
            <div className="filmes">
                {items.length === 0 ? "": items.map((filme) =>(
                    <Filme foto={filme.posterURL} id={filme.id} alt="" />
                ))}
            </div>
        </div>
    );
}

function Filme({ foto, id }) {
    console.log("Repetido")
    return (
        <>
        <Link to={`/sessoes/${id}`}>
            <div className="filme">
                <img src={foto} />
            </div>
        </Link>
        </>
    );
}

