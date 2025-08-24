import { CTA, Promo, PromoGrid, Title, Wrap, Text} from "./styles"


const Home = () => {
    const promos = [
        { id: 1, city: 'Rio de Janeiro', price: 99, subtitle: 'Fim de semana' },
        { id: 2, city: 'Salvador', price: 199, subtitle: 'Praias' },
        { id: 3, city: 'Porto Alegre', price: 149, subtitle: 'Cultura' },
        { id: 4, city: 'Natal', price: 129, subtitle: 'Festa junina' },
        { id: 5, city: 'Curitiba', price: 169, subtitle: 'Cidade dos sonhos' },
        { id: 6, city: 'Fortaleza', price: 199, subtitle: 'Praias' },
    ]

    return (
        <>
            <Wrap>
                <Title>Ofertas Imperdiveis</Title>
                <Text>Escolha um destino e clique em "Ver voos" para pesquisar</Text>

                <PromoGrid>
                    {promos.map(p => (
                        <Promo key={p.id}>
                            <h3>{p.city}</h3>
                            <p>{p.subtitle}</p>
                            <strong>R$ {p.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>
                            <div>
                                <CTA to="/search">Ver voos</CTA>
                            </div>
                        </Promo>
                    ))}
                </PromoGrid>
            </Wrap>
        </>
    )
}

export default Home
