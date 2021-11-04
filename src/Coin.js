import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  price,
  volume,
  symbol,
  priceChange,
  marketcap,
  coinrank,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="" className="coin-image" />
          <h2>{name}</h2>
          <p className="coin-symbol">{symbol}</p>
          <p className="coin-rank"># {coinrank}</p>
        </div>
        <div className="coin-data">
          <div className="coin-data-col">
            <h2>Price:</h2>
            <p className="coin-price">${price}</p>
          </div>
          <div className="coin-data-col">
            <h2>Volume:</h2>
            <p className="coin-volume">${volume.toLocaleString()}</p>
          </div>
          <div className="coin-data-col">
            <h2>Change in 24h:</h2>
            {priceChange < 0 ? (
              <p className="coin-percent red p-animation">
                {priceChange.toFixed(2)}%
              </p>
            ) : (
              <p className="coin-percent green p-animation">
                {priceChange.toFixed(2)}%
              </p>
            )}
          </div>
          <div className="coin-data-col">
            <h2>Mkt. Cap:</h2>
            <p className="coin-marketcap">${marketcap.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Coin;
