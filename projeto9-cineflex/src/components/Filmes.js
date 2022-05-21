export default function Filmes({ fotos }) {
    return (
        <div className="filmes">
            {fotos.map((foto) => <Filme foto={foto} />)}
        </div>
    );
}

function Filme({ foto }) {
    return (
        <div className="filme">
            <img src={foto} />
        </div>
    );
}