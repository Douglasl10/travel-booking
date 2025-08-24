import { useEffect, useState } from "react";
import { Button, Form, Input, List, Wrap } from "./styles";
import getFlights from "../../utils/mockFlights";
import FlightCard from "../../components/FlightCard";
import { Text, Title } from "../Home/styles";


const Search = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [result, setResult] = useState([]);
    const [bookings, setBookings] = useState(() => {
        try {return JSON.parse(localStorage.getItem("bookings")) || [];}
        catch {return [];}
    });

    useEffect(() => {
        localStorage.setItem("bookings", JSON.stringify(bookings));
    }, [bookings]);

    function handleSearch(e) {
        e.preventDefault();

        const found = getFlights({from, to, date});
        setResult(found);
    }

    function handleBook(flight) {
    
        const newBooking = {...flight, bookingId: `${flight.id}-${Date.now()}`};
            setBookings(prev => [...prev, newBooking]);
        alert("Reserva realizada com sucesso! Veja em Minha Reservas");
    }

    return (
        <Wrap>
            <Title>Buscar Voo</Title>
            <Form onSubmit={handleSearch}>
                <Input value={from} onChange={e => setFrom(e.target.value)} placeholder="Origem"/>
                <Input value={to} onChange={e => setTo(e.target.value)} placeholder="Destino"/>
                <Input value={date} onChange={e => setDate(e.target.value)} placeholder="Data"/>
                <Button type="submit">Buscar</Button>
            </Form>

            <List>
                {result.length === 0 && <Text>Nenhum voo encontrado.</Text>}
                {result.map(flight => (
                    <FlightCard key={flight.id} flight={flight} onBook={handleBook} />
                ))}
            </List>
        </Wrap>
    );
};

export default Search;
