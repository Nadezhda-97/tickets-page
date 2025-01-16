import React, { useState, useEffect } from 'react';
import data from './data/tickets.json';
import Logo from './components/Logo';
import Filters from './components/Filters';
import TicketsList from './components/TicketsList';
import './App.css';

const App: React.FC = () => {
  const [currency, setCurrency] = useState<string>('RUB');
  const [stops, setStops] = useState<number[]>([]);
  const [tickets, setTickets] = useState<any[]>([]); //////

  useEffect(() => {
    setTickets(data.tickets);
  }, []);

  return (
    <>
      <Logo />
      <div className="container">
        <div className="filters">
          <Filters currency={currency} setCurrency={setCurrency} stops={stops} setStops={setStops} />
        </div>
        <div className="tickets-list">
          <TicketsList tickets={tickets} currency={currency} stops={stops} />
        </div>
      </div>
    </>
  );
}

export default App;
