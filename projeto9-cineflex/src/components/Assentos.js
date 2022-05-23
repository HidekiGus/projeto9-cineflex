import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function EscolherAssentos() {

    const [ assentos, setAssentos ] = useState([]);

    const { idSessao } = useParams();

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        requisicao.then(resposta => setAssentos(resposta.data.seats));
    }, [])

    console.log(assentos)

    return (
        <>
        <EscolhaAssentos>
            <div className="barra-topo">CINEFLEX</div>
            <div className="titulo-secao">Selecione o(s) assento(s)</div>
            <Assentos>
                <ListaAssento assentos={assentos}/>
            </Assentos>
        </EscolhaAssentos>
        </>
    );
}

function ListaAssento({ assentos }) {

    

    return (
        <>
        {assentos.length === 0 ? "" :
        assentos.map((assento, index) => {
            
            let disponivel = null;
            
            if (assento.isAvailable === true) {
                disponivel = true;
            } else {
                disponivel = false;
            }
            return (<Assento key={index} disponivel={disponivel} lugar={assento.name}></Assento>)
            })}
        </>
    );
}

function Assento({ disponivel, lugar }) {

    const [ selecionado, setSelecionado ] = useState(false);

    function checar() {
        (disponivel === true ? setSelecionado(!selecionado) : alert("Nananinanao"));
    }

    return (
        <Assentoxa onClick={checar} disponivel={disponivel} selecionado={selecionado}>
            {lugar}
        </Assentoxa>
    )

}

const EscolhaAssentos = styled.div`
    width: 100%;
    height: fit-content;


    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
`

const Assentos = styled.div`
    width: 92%;
    height: fit-content;

    display: flex;
    flex-wrap: wrap;
    align-items: space-around;
    justify-content: space-around;

`

const Assentoxa = styled.div`
    width: 26px;
    height: 26px;

    font-size: 11px;

    border-radius: 12px;
    border: 1px solid ${props => props.disponivel === true ? (props.selecionado === true ? "#45BDB0" : "#808F9D") : "#F7C52B"};

    background-color: ${props => props.disponivel === true ? (props.selecionado === true ? "#8DD7CF" : "#C3CFD9") : "#FBE192"};

    margin: 2vw 1vw;

    display: flex;
    align-items: center;
    justify-content: center;
`