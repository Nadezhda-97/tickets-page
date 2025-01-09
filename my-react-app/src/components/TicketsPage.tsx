const TicketsPage = () => {
  //
  return (
    <>
      <header>
        <div>
          <span>✈️</span>
        </div>
      </header>
      <div className="container">
        <div className="sidebar">
          <h2>Валюта</h2>
          <button className="currency-button">РУБ</button>
          <button className="currency-button">USD</button>
          <button className="currency-button">EUR</button>

          <h2>Количество пересадок</h2>
          <label>
            <input type="checkbox" className="transfer-option" checked /> Все
          </label><br />
          <label>
            <input type="checkbox" className="transfer-option" /> Без пересадок
          </label><br />
          <label>
            <input type="checkbox" className="transfer-option" /> 1 пересадка
          </label><br />
          <label>
            <input type="checkbox" className="transfer-option" /> 2 пересадки
          </label><br />
          <label>
            <input type="checkbox" className="transfer-option" /> 3 пересадки
          </label>
        </div>

        <div className="ticket-list">
          <div className="ticket">
            <div className="ticket-info">
                <div>
                    <strong>Авиакомпания:</strong> Аэрофлот<br />
                    <strong>Цена:</strong> 10,000 РУБ
                </div>
                <div>
                    <strong>Дата вылета:</strong> 2025-01-10<br />
                    <strong>Дата прибытия:</strong> 2025-01-10
                </div>
            </div>
            <p>Количество пересадок: 0</p>
            <p><strong>Пункт вылета:</strong> Москва<br /><strong>Пункт прибытия:</strong> Санкт-Петербург</p>
          </div>

          <div className="ticket">
            <div className="ticket-info">
                <div>
                    <strong>Авиакомпания:</strong> S7 Airlines<br />
                    <strong>Цена:</strong> 12,000 РУБ
                </div>
                <div>
                    <strong>Дата вылета:</strong> 2025-01-11<br />
                    <strong>Дата прибытия:</strong> 2025-01-11
                </div>
            </div>
            <p>Количество пересадок: 1</p>
            <p><strong>Пункт вылета:</strong> Москва<br /><strong>Пункт прибытия:</strong> Новосибирск</p>
          </div>

          <div className="ticket">
            <div className="ticket-info">
                <div>
                    <strong>Авиакомпания:</strong> Победа<br />
                    <strong>Цена:</strong> 8,000 РУБ
                </div>
                <div>
                    <strong>Дата вылета:</strong> 2025-01-12<br />
                    <strong>Дата прибытия:</strong> 2025-01-12
                </div>
            </div>
            <p>Количество пересадок: 2</p>
            <p><strong>Пункт вылета:</strong> Москва<br /><strong>Пункт прибытия:</strong> Казань</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketsPage;