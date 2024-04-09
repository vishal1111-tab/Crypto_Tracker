import React, { useContext, useEffect, useState } from "react";
import CoinContext from "./Store/CoinStore";
import Coin from "./Coin";
function Search() {
  const { item } = useContext(CoinContext);

  const [search, setSearch] = useState("");
  const [filteredItem, setFilteredItem] = React.useState(null);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    // Filter the items based on the search term
    const data = item.filter((items) =>
      items.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredItem(data);
  }, [search, item]);

  return (
    <div>
      <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">Search a currency</h1>
          <form>
            <input
              className="coin-input"
              type="text"
              placeholder="Search"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>

      <Coin filteredItem={filteredItem}></Coin>
    </div>
  );
}

export default Search;
