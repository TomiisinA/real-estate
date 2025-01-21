import "./searchBar.scss";
import { useState } from "react";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxprice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" placeholder="location" name="location" />
        <input
          type="number"
          placeholder="Min Price"
          name="minPrice"
          min={0}
          max={1000000}
        />
        <input
          type="number"
          placeholder="Max Price"
          name="maxPrice"
          min={0}
          max={1000000}
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
