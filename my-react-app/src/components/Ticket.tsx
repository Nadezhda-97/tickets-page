import React from "react";
import { useTranslation } from 'react-i18next';

import getCarrierLogo from "../utils/getCarrierLogo";
import formatDate from "../utils/formatDate";
import convertCurrency from "../utils/conversCurrency";
import getTransferText from "../utils/getTransferText";
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
  const { t } = useTranslation();

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
            {t('button_buy')}
          </div>
          <div>
            {t('button_for')} {convertCurrency(ticket.price, currency)} {currency}
          </div>
        </button>
      </div>
      <div className="ticket-center">
        <div className="departure">
          <p className="flight-time">{ticket.departure_time}</p>
          <p className="flight-location">{ticket.origin}, {ticket.origin_name}</p>
          <p className="flight-date">{formatDate(ticket.departure_date)}</p>
        </div>
        <div className="arrow">{getTransferText(ticket.stops, t)}</div>
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