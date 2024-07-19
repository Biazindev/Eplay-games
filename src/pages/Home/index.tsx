import Banner from "../../components/Banner";
import ProductsList from "../../components/ProductsList";
import Game from "../../models/games";
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'


const promocoes: Game[] = [
    {
        id: 1,
        category: 'acão',
        description: 'Resident Evil 4, e conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival de horror...',
        title: 'Resident Evil 4',
        system: 'Windows',
        image: resident,
        infos: ['10%', 'R$ 250,00'],

    },
    {
        id: 2,
        category: 'acão',
        description: 'Resident Evil 4, e conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival de horror...',
        title: 'Resident Evil 4',
        system: 'PS5',
        image: resident,
        infos: ['5%', 'R$ 290,00'],

    },
    {
        id: 3,
        category: 'acão',
        description: 'Resident Evil 4, e conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival de horror...',
        title: 'Resident Evil 4',
        system: 'Windows',
        image: resident,
        infos: ['10%', 'R$ 250,00'],

    },
    {
        id: 4,
        category: 'acão',
        description: 'Resident Evil 4, e conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival de horror...',
        title: 'Resident Evil 4',
        system: 'Windows',
        image: resident,
        infos: ['10%', 'R$ 250,00'],

    }
]

const emBreve: Game[] = [
    {
        id: 5,
        category: 'RPG',
        description: 'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertaiment',
        title: 'DIABLO IV',
        system: 'Windows',
        image: diablo,
        infos: ['17/05'],

    },
    {
        id: 6,
        category: 'RPG',
        description: 'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertaiment',
        title: 'Zelda',
        system: 'Windows',
        image: zelda,
        infos: ['17/05'],

    },
    {
        id: 7,
        category: 'RPG',
        description: 'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertaiment',
        title: 'Stars Wars',
        system: 'Windows',
        image: starWars,
        infos: ['17/05'],

    },
    {
        id: 8,
        category: 'RPG',
        description: 'Resident Evil 4, e conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival de horror...',
        title: 'Resident Evil 4',
        system: 'Nintendo Switch',
        image: resident,
        infos: ['17/05'],

    }
]

const Home = () => (
    <>
    <Banner />
    <ProductsList title="Promoções" background={'grey'} games={promocoes} />
    <ProductsList title="Em Breve" background={'black'} games={emBreve} />
    </>
)

export default Home