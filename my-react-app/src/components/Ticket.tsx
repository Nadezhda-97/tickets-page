import React from "react";
import getCarrierLogo from "../utils/getCarrierLogo";
import formatDate from "../utils/formatDate";
import '../Ticket.css';

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
  currency: string;
}

const Ticket: React.FC<TicketProps> = ({ ticket, currency }) => {
  const convertCurrency = (price: number): number => {
    switch (currency) {
      case 'РУБ':
        return price;
      case 'USD':
        return Math.round((price / 75)) // Примерный курс
      case 'EUR':
        return Math.round((price / 90)); // Примерный курс
      default:
        return price;
    }
  };

  return (
    <div className="ticket">
      <div className="ticket-left">
        <img
          src={getCarrierLogo(ticket.carrier)}
          alt={`${ticket.carrier} logo`}
          className="airline-logo"
        />
        <button className="buy-button">
          <div>
            Купить 
          </div>
          <div>
            за {convertCurrency(ticket.price)} {currency}
          </div>
        </button>
      </div>
      <div className="ticket-center">
        <div className="departure">
          <p className="flight-time">{ticket.departure_time}</p>
          <p className="flight-location">{ticket.origin}, {ticket.origin_name}</p>
          <p className="flight-date">{formatDate(ticket.departure_date)}</p>
        </div>
        <div className="arrow">{ticket.stops} пересадок</div>
        <div className="arrival">
          <p className="flight-time">{ticket.arrival_time}</p>
          <p className="flight-location">{ticket.destination_name}, {ticket.destination}</p>
          <p className="flight-date">{formatDate(ticket.arrival_date)}</p>
        </div>
      </div>
    </div>
  )
};

export default Ticket;