const Mock = [
    { id: 'f1', airline: 'Azul', from: 'São Paulo', to: 'Rio de Janeiro', depart: '2025-09-10', time: '09:00', price: 150 },
    { id: 'f2', airline: 'Latam', from: 'São Paulo', to: 'Salvador', depart: '2025-09-11', time: '12:30', price: 320 },
    { id: 'f3', airline: 'Gol', from: 'Rio de Janeiro', to: 'Natal', depart: '2025-09-12', time: '07:45', price: 280 },
    { id: 'f4', airline: 'Azul', from: 'São Paulo', to: 'Porto Alegre', depart: '2025-09-11', time: '18:20', price: 220 },
    { id: 'f5', airline: 'Latam', from: 'Salvador', to: 'São Paulo', depart: '2025-09-15', time: '06:00', price: 300 },
];

const getFlights = (params) => {
    const fromStr = typeof params.from === "string" ? params.from.toLowerCase() : "";
    const toStr = typeof params.to === "string" ? params.to.toLowerCase() : "";

    return Mock.filter(f => {
        const condFrom = !fromStr || f.from.toLowerCase().includes(fromStr);
        const condTo = !toStr || f.to.toLowerCase().includes(toStr);
        const condDate = !params.date || f.depart === params.date;
        return condFrom && condTo && condDate;
    })
};

export default getFlights;
