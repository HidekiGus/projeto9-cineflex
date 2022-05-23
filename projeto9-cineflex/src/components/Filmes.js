import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Filmes() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");


        requisicao.then(resposta => setItems(resposta.data));

    }, []);

    return (
        <div className="home">
            <div className="barra-topo">CINEFLEX</div>
            <div className="titulo-secao">Selecione o filme</div>
            <ContainerFilmes>
                {items.length === 0 ? "": items.map((filme) =>(
                    <Filme foto={filme.posterURL} id={filme.id} alt="" />
                ))}
            </ContainerFilmes>
        </div>
    );
}

function Filme({ foto, id }) {
    return (
        <>
        <Link to={`/sessoes/${id}`}>
            <Foto src={foto} />
        </Link>
        </>
    );
}

const ContainerFilmes = styled.div`
    width: 100%;
    height: auto;

    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const Foto = styled.img`
    width: 41vw;
    height: fit-content;

    border: 8px solid #FFFFFF;
    border-radius: 3px;

    margin: 2vw;

    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
`;