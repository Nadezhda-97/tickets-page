import './App.css';

import React, { useState, useEffect } from 'react';
import data from './data/tickets.json';
import Filters from './components/Filters';
import TicketsList from './components/TicketsList';

const App: React.FC = () => {
  const [currency, setCurrency] = useState<string>('RUB');
  const [stops, setStops] = useState<number[]>([]);
  const [tickets, setTickets] = useState<any[]>([]); //////

  useEffect(() => {
    setTickets(data.tickets);
  }, []);

  return (
    <>
      <Filters currency={currency} setCurrency={setCurrency} stops={stops} setStops={setStops} />
      <TicketsList tickets={tickets} currency={currency} stops={stops} />
    </>
  )
}

export default App;

/* 
{
      "origin": "VVO",
      "origin_name": "Владивосток",
      "destination": "TLV", //место назначения
      "destination_name": "Тель-Авив", //название места назначения
      "departure_date": "12.05.18", //дата отправления
      "departure_time": "16:20", //время отправления
      "arrival_date": "12.05.18", // дата прибытия
      "arrival_time": "22:10", //время прибытия
      "carrier": "TK", //перевозчик, авиакомпания
      "stops": 3, //количество пересадок
      "price": 12400
    },
*/
