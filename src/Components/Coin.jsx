import React, { useContext } from "react";

function Coin({ filteredItem }) {
  return (
    <div>
      {filteredItem &&
        filteredItem.map((items) => (
          <div key={items.id} className="ccoin-container">
            <div key={items.id} className="ccoin-row">
              <div className="ccoin">
                <img src={items.image} alt="crypto" />
                <h1>{items.name}</h1>
                <p className="ccoin-symbol">{items.symbol}</p>
              </div>
              <div className="ccoin-data">
                <p className="ccoin-price">{items.current_price}</p>
                <p className="ccoin-volume">{items.market_cap}</p>

                {items.price_change_percentage_24h < 0 ? (
                  <p className="ccoin-percent rred">
                    {items.price_change_percentage_24h.toFixed(2)}%
                  </p>
                ) : (
                  <p className="ccoin-percent ggreen">
                    {items.price_change_percentage_24h.toFixed(2)}%
                  </p>
                )}

                <p className="ccoin-marketcap">Mkt Cap: {items.total_volume}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Coin;
