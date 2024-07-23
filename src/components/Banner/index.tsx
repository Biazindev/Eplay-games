import { Imagem, Precos, Titulo } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home/index'
import { formataPreco } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
        .then((res) => res.json())
        .then((data) => setGame(data))
        .catch((err) => console.error("Failed to fetch upcoming games", err))
    }, 3000)
    return () => clearTimeout(timer);
  }, [])

    if(!game) {
      return (
        <h3>Loading...</h3>
      )
    }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            Por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button 
        type="link" 
        to={`/products/${game.id}`} 
        title="Clique aqui para aproveitar essa oferta">
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
