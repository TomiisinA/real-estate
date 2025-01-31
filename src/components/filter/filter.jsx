import "./filter.scss";
function Filter() {
  return (
    <div className="filter">
      <div>
        <h1>
          Search results for <b>London</b>
        </h1>
        <div className="top">
          <div className="item">
            <label htmlFor="city">Location</label>
            <input type="text" id="city" placeholder="city location" />
          </div>
        </div>
        <div className="bottom">
          <div className="item">
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
              <option value="any">Any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="property">Property</label>
            <select name="" id="">
              <option value="any">Any</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="value">Land</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="minPrice">MinPrice</label>
            <input
              type="number"
              id="minPrice"
              name="minprice"
              placeholder="any"
            />
          </div>
          <div className="item">
            <label htmlFor="bedroom">MaxPrice</label>
            <input
              type="text"
              id="maxPrice"
              name="maxPrice"
              placeholder="any"
            />
          </div>
          <div className="item">
            <label htmlFor="bedroom">Bedroom</label>
            <input
              type="text"
              id="bedroom"
              placeholder="bedroom"
              name="bedroom"
            />
          </div>
          <button>
            <img src="/search.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
