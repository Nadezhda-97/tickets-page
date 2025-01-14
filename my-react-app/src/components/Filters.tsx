import React from "react";
import Currency from "./Currency";
import Stops from "./Stops";

interface FiltersProps {
  currency: string;
  setCurrency: (currency: string) => void;
  stops: number[];
  setStops: (stops: number[]) => void;
}

const Filters: React.FC<FiltersProps> = ({ currency, setCurrency, stops, setStops }) => {
  return (
    <>
      <Currency currency={currency} setCurrency={setCurrency}/>
      <Stops stops={stops} setStops={setStops}/>
    </>
  )
};

export default Filters;