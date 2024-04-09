import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setItem(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <CoinContext.Provider value={{ item: item }}>
        {children}
      </CoinContext.Provider>
    </div>
  );
};

export default CoinContext;
