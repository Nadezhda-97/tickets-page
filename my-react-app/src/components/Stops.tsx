import React from "react";

interface StopsProps {
  stops: number[];
  setStops: (stops: number[]) => void;
}

const Stops: React.FC<StopsProps> = ({ stops, setStops }) => {
  const handleStopsChange = (stopsCount: number) => {
    if (stops.includes(stopsCount)) {
      setStops(stops.filter(stop => stop !== stopsCount));
    } else {
      setStops([...stops, stopsCount]);
    }
  };

  return (
    <>
      <h3>Количество пересадок</h3>
      {[0, 1, 2, 3].map(stop => (
        <label key={stop}>
          <input
            type="checkbox"
            checked={stops.includes(stop)}
            onChange={() => handleStopsChange(stop)}
          />
          {stop === 0 ? 'Без пересадок' : `${stop} пересадок`}
        </label>
      ))}
    </>
  );
};

export default Stops;