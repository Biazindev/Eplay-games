import Game from "../../models/games"
import Products from "../Products"
import { Container, List } from "./styles"

export type Props = {
    title: string
    background: 'grey' | 'black'
    games: Game[]

}

const ProductsList = ({background, title, games}: Props) => (
    <Container background={background}>
        <div className="container">
        <h2>{title}</h2>
            <List>
                {games.map (game => (
                    <Products
                    key={game.id}
                    title={game.title}
                    category={game.category} 
                    system={game.system} 
                    description={game.description} 
                    infos={game.infos} 
                    image={game.image}
                    />
                ))}
            </List>
        </div>
    </Container>
)

export default ProductsList