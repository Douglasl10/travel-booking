import { useEffect, useState } from "react";
import { Button } from "../Search/styles";
import { Box, BoxButton, Card, CardsBox, Text, Wrap, Title } from "./styles";

const Booking = () => {
    const [bookings, setBookings] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("bookings") || "[]");
        } catch {
            return null;
        }
    });
    console.log(bookings);

    useEffect(() => {
        localStorage.setItem("bookings", JSON.stringify(bookings));
    }, [bookings]);

    function handleCancel(bookingId) {
        if(!confirm('Deseja cancelar esta reserva?')) return;

        setBookings(prev => prev.filter(b => b.bookingId !== bookingId));
    }

    return (
        <Wrap>
            <Title>Minhas reservas</Title>
            {bookings.length === 0 && <Text>Voce não tem reservas.</Text>}
            {bookings.map(b => (
                <Card key={b.bookingId}>
                    <Box>
                        <CardsBox><strong>{b.airline}</strong> - {b.from} → {b.to}</CardsBox>
                        <CardsBox>{b.depart} • {b.time} • R$ {b.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</CardsBox>
                    </Box>
                    <BoxButton>
                        <Button onClick={() => handleCancel(b.bookingId)}>Cancelar</Button>
                    </BoxButton>
                </Card>
            ))}
        </Wrap>
    )
}

export default Booking;