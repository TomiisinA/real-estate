import { Popup, Marker } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span className="bed">{item.bedroom} bedroom</span>
            <b>${item.price} </b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
