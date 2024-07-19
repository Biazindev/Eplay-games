import { Container, FooterSection, Link, Links, Sectiontitle } from "./styles"

    const currentYear = new Date().getFullYear()
    const Footer = () => (
        <Container>
            <div className="container">
                <FooterSection>
                    <Sectiontitle>Categorias</Sectiontitle>
                        <Links>
                            <li>
                                <Link>Ação</Link>
                            </li>
                            <li>
                                <Link>Aventura</Link>
                            </li>
                            <li>
                                <Link>Esportes</Link>
                            </li>
                            <li>
                                <Link>Simulação</Link>
                            </li>
                            <li>
                                <Link>Estratégia</Link>
                            </li>
                            <li>
                                <Link>FPS</Link>
                            </li>
                            </Links>
                            </FooterSection>
                            <FooterSection>
                                <Sectiontitle>Acesso Rápido</Sectiontitle>
                                <Links>
                                    <li>
                                        <Link>Novidades</Link>
                                    </li>
                                    <li>
                                        <Link>Promoções</Link>
                                    </li>
                                    <li>
                                        <Link>Em Breve</Link>
                                    </li>
                                </Links>
                            </FooterSection>
                <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
            </div>
        </Container>
    )

    export default Footer