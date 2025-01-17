import React from "react";
import { useTranslation } from 'react-i18next';
import getTransferText from "../utils/getTransferText";

interface StopsProps {
  stops: number[];
  setStops: (stops: number[]) => void;
}

const Stops: React.FC<StopsProps> = ({ stops, setStops }) => {
  const { t } = useTranslation();

  const stopsCount: number[] = [0, 1, 2, 3];
  const allChecked: boolean = stops.length === stopsCount.length;

  const handleAllStopsChange = () => {
    if (allChecked) {
      setStops([]);
    } else {
      setStops([...stopsCount]);
    }
  };

  const handleStopsChange = (stopsCount: number) => {
    if (stops.includes(stopsCount)) {
      setStops(stops.filter(stop => stop !== stopsCount));
    } else {
      setStops([...stops, stopsCount]);
    }
  };

  return (
    <div className="checkbox-container">
      <h3>{t('choose_transfers')}</h3>
      <input
          type="checkbox"
          id="allChecked"
          className="checkbox-input"
          checked={allChecked}
          onChange={handleAllStopsChange}
        />
      <label htmlFor="allChecked" className="checkbox-label">
        <span className="checkbox-square"></span>
        {t('select_all')}
      </label>
      {stopsCount.map(stop => (
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
            {getTransferText(stop, t)}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Stops;
