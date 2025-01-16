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
    <div className="checkbox-container">
      <h3>Количество пересадок</h3>
      {[0, 1, 2, 3].map(stop => (
        <div key={stop}>
          <input
            type="checkbox"
            id={`stop-${stop}`}
            className="checkbox-input"
            checked={stops.includes(stop)}
            onChange={() => handleStopsChange(stop)}
          />
          <label htmlFor={`stop-${stop}`} className="checkbox-label">
            <span className="checkbox-square"></span>
            {stop === 0 ? 'Без пересадок' : `${stop} пересадка(и)`}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Stops;