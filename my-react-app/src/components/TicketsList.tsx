import React from "react";
import Ticket from "./Ticket";

interface TicketsListProps {
  tickets: any[]; //////
  currency: string;
  stops: number[];
}

const TicketsList: React.FC<TicketsListProps> = ({ tickets, currency, stops }) => {
  const filteredTickets = tickets.filter(ticket => stops.includes(ticket.stops) || stops.length === 0);
  
  const sortedTickets = filteredTickets.sort((a, b) => a.price - b.price);
  return (
    <>
      {sortedTickets.map(ticket => (
        <Ticket key={ticket.price} ticket={ticket} currency={currency} />
      ))}
    </>
  );
}

export default TicketsList;