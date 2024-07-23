import styled from "styled-components"
import { cores } from "../../styles"

export const Items = styled.ul`
    display: flex;
`

export const Action = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.5s ease;
`

export const Item = styled.li`
    position: relative;
    margin-right: 16px;

    > img {
        border: 2px solid ${cores.branca};
        border-radius: 8px;
        width: 150px;
        height: 150px;
        object-fit: cover;
    }

    &:hover {
        ${Action} {
            opacity: 1;
            transition: opacity 0.5s ease;
        }
    }
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`

export const ModalContent = styled.div`
    max-width: 960px;
    width: 100%;
    background-color: black;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 0 16px;
    position: relative;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
    }

    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px;
        
    > img {
        width: 100%;
    }

    img,
    iframe {
        max-width: 100%;
        
        height: auto;
    }
        iframe {
        width: 100%;
        height: 480px;
        }
    }

    
`
