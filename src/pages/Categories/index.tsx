import ProductsList from "../../components/ProductsList";
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import { Game } from "../Home";
import { useEffect, useState } from "react";




const Categories = () => {
    const [gamesAcao, setGamesAcao] = useState<Game[]>([])
    const [gamesEsporte, setGamesEsportes] = useState<Game[]>([])
    const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
    const [gamesLuta, setGamesLuta] = useState<Game[]>([])
    const [gamesRpg, setGamesRpg] = useState<Game[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
            .then(res => res.json())
            .then(data => setGamesAcao(data))
            .catch(err => console.error("Failed to fetch upcoming games", err))

            fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
            .then(res => res.json())
            .then(data => setGamesEsportes(data))
            .catch(err => console.error("Failed to fetch upcoming games", err))

            fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
            .then(res => res.json())
            .then(data => setGamesSimulacao(data))
            .catch(err => console.error("Failed to fetch upcoming games", err))

            fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
            .then(res => res.json())
            .then(data => setGamesLuta(data))
            .catch(err => console.error("Failed to fetch upcoming games", err))

            fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
            .then(res => res.json())
            .then(data => setGamesRpg(data))
            .catch(err => console.error("Failed to fetch upcoming games", err))
    })
    return (
        <>
    <ProductsList title="Ação" background={'black'} games={gamesAcao} />
    <ProductsList title="RPG" background={'grey'} games={gamesRpg} />
    <ProductsList title="Esportes" background={'black'} games={gamesEsporte} />
    <ProductsList title="Simulação" background={'grey'} games={gamesSimulacao} />
    <ProductsList title="Luta" background={'black'} games={gamesLuta} />
    </>
    )
}

export default Categories