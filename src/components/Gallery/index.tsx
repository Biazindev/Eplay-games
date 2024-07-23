import Section from "../Section"
import zelda from '../../assets/images/zelda.png'
import hogwarts from '../../assets/images/hogwarts.png'
import { Action, Item, Items, Modal, ModalContent } from './styles'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/fechar.png'
import { useState } from "react"
import { GalleryItem } from "../../pages/Home"

const mock: GalleryItem[] = [
    {
        type: 'image',
        url: zelda,
    },
    {
        type: 'image',
        url: hogwarts,
    },
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/VCY-zBOt-IA?si=Mh112YmijxFlATyn',
    },
];

type Props = {
    defaultCover: string
    name: string
    items: GalleryItem[]
}

interface ModalState extends GalleryItem {
    isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        type: 'image',
        url: ''
    })

    const getMediaCover = (item: GalleryItem) => {
        if (item.type === 'image') return item.url
        return defaultCover
    }

    const getMediaIcon = (item: GalleryItem) => {
        if (item.type === 'image') return zoom
        return play
    }

    const closeModal =() => (
        setModal({
            isVisible: false,
            type: 'image',
            url: ''
        })
    )

    return (
        <>
            <Section title={"Galeria"} background={"black"}>
                <Items>
                    {items.map((media, index) => (
                        <Item key={media.url} onClick={() => {
                            setModal({
                                isVisible: true,
                                type: media.type,
                                url: media.url
                            })
                            }}>
                            <img src={getMediaCover(media)} alt={`media ${index + 1} de ${name}`} />
                            <Action>
                                <img src={getMediaIcon(media)} alt='clique para maximizar a mídia' />
                            </Action>
                        </Item>
                    ))}
                </Items>
            </Section>
            {modal.isVisible && (
                <Modal>
                    <ModalContent className="container">
                        <header>
                            <h4>{name}</h4>
                            <img 
                                src={close} 
                                alt="Icone de fechar" 
                                onClick={() => {
                                    closeModal()
                                }} 
                            />
                        </header>
                        <div className="image-container">
                            {modal.type === 'image' ? (
                                <img src={modal.url} alt="Imagem do Homem-Aranha" />
                            ) : (
                                <iframe frameBorder={0} src={modal.url} title="Video Player" />
                            )}
                        </div>
                    </ModalContent>
                </Modal>
            )}
        </>
    )
}

export default Gallery
