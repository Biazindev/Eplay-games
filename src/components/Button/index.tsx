import { Children } from 'react'
import { ButtonContainer, ButtonLink } from './styles'
import { title } from 'process'

type Props = {
    type: 'button' | 'link'
    title: string
    to?: string
    onClick?: () => void
    children: string
}

const Button = ({type, title, to, onClick, children}: Props) => {
    if(type === 'button') {
        <ButtonContainer type='button' title={title} onClick={onClick}>
            {children}
        </ButtonContainer>
    }
    return (
        <ButtonLink to={to as string} title={title}>
        {children}
        </ButtonLink>
    )
}

export default Button