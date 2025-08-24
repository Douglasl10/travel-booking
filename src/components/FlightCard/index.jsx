import { Action, Button, Card, From, Info, Depart, Price } from "./styles";


const FlightCard = ({ flight, onBook }) => {
    return (
        <Card>
            <Info>
                <From><strong>{flight.airline}</strong> → {flight.from} → {flight.to} </From>
                <Depart>{flight.depart} • {flight.time}</Depart>
                <Price>R$ {flight.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</Price>
            </Info>
            <Action>
                <Button onClick={() => onBook(flight)}>Agendar</Button>
            </Action>
        </Card>
    );
};

export default FlightCard;
