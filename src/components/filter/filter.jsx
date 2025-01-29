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
            <label htmlFor="city">Location</label>
            <input type="text" id="city" placeholder="city location" />
          </div>
          <div className="item">
            <label htmlFor="city">Location</label>
            <input type="text" id="city" placeholder="city location" />
          </div>
          <div className="item">
            <label htmlFor="city">Location</label>
            <input type="text" id="city" placeholder="city location" />
          </div>
          <div className="item">
            <label htmlFor="city">Location</label>
            <input type="text" id="city" placeholder="city location" />
          </div>
          <div className="item">
            <label htmlFor="city">Location</label>
            <input type="text" id="city" placeholder="city location" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
