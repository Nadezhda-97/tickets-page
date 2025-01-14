import React from "react";

interface Props {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

interface TicketProps {
  ticket: Props; //////? переименовать свойство
  currency: string; //// мб это число
}

const Ticket: React.FC<TicketProps> = ({ ticket, currency }) => {
  const convertCurrency = (price: number): number => {
    switch (currency) {
      case 'РУБ':
        return price;
      case 'USD':
        return price / 75; // Примерный курс
      case 'EUR':
        return price / 90; // Примерный курс
      default:
        return price;
    }
  };

  return (
    <>
      <h3>{ticket.carrier}</h3>
      <button>Купить за {convertCurrency(ticket.price).toFixed(2)} {currency}</button>
      <p>
        {ticket.departure_time} - {ticket.arrival_time}
      </p>
      <p>{ticket.origin}, {ticket.origin_name} - {ticket.destination}, {ticket.destination_name}</p>
      <p>{ticket.departure_date} - {ticket.arrival_date}</p>
      <p>Количество пересадок: {ticket.stops}</p>
    </>
  )
};

export default Ticket;