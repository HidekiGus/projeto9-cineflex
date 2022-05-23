import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Horarios() {

    const [ dados, setDados ] = useState({});
    const [ sessoes, setSessoes ] = useState([]);

    const { idSessoes } = useParams();

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idSessoes}/showtimes`);

        requisicao.then(resposta => {setDados(resposta.data)
                                    setSessoes(resposta.data.days)});
    }, []);


    return (
        <div className="horarios">
            <div className="barra-topo">CINEFLEX</div>
            <div className="titulo-secao">Selecione o horário</div>
            <Horario sessoes={sessoes} />
            <div className="barra-baixo">
                <img src={dados.posterURL} />
                <h1>{dados.title}</h1>
            </div>
        </div>
    );
}

function Horario({ sessoes }) {



    return (
        <>
        {sessoes.length === 0 ? "" :
        sessoes.map((sessao) => (
        <div className="horario">
            <div className="data">
                {sessao.weekday} - {sessao.date}
            </div>
            <div className="horas">
                {sessao.showtimes.map((showtime) => (
                <Link to={`/assentos/${showtime.id}`} style={{ textDecoration: "none" }}>
                    <div className="hora">
                        {showtime.name}
                    </div>
                </Link>
                ))}
            </div>
        </div>
        ))}
        </>
    );
}