import { useState } from "react";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import { Card } from "./Card";
import { Tab } from "./Tab";
import { Text } from "./Text";
import { Icon } from "./Icon";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { TileLayer } from "react-leaflet/TileLayer";

// import { getDatabase } from "firebase/database";

import "./HomeRoute.css";
import { Button } from "./Button";

// const db = getDatabase(app);

// function writeUserData(userId, name, email, imageUrl) {
//   set(ref(db, "users/" + userId), {
//     username: name,
//     email: email,
//     profile_picture: imageUrl,
//   });
// }

export function HomeRoute({ setRoute }) {
  // const [users, setUsers] = useState([]);
  const [selectedTab, setSelectedTab] = useState(null);

  // useEffect(() => {
  //   const db = getDatabase();
  //   const usersRef = ref(db, "users/");
  //   onValue(usersRef, (snapshot) => {
  //     const data = snapshot.val();
  //     setUsers(Object.values(data));
  //   });
  // }, []);

  return (
    <>
      <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="list-map-container">
        <div className="list">
          <Button color="subtle" className="list-item">
            <img className="list-item-img" alt="Kids Toys" src="./toys.jpeg" />
            <div className="list-item-content">
              <Text color="primary" size="l">
                Restaurant 1
              </Text>
              <span>
                <Icon icon={faStar} />
                <Icon icon={faStar} />
                <Icon icon={faStar} />
                <Icon icon={faStar} />
              </span>
              <div className="list-item-content-description">
                <Text color="primary" size="m">
                  This restaurant is great for family with kids!
                </Text>
              </div>
            </div>
          </Button>
          <Button
            onClick={() => {
              setRoute({ type: "review", id: 1234 });
            }}
            color="subtle"
            className="list-item"
          >
            <img className="list-item-img" alt="Kids Toys" src="./toys.jpeg" />
            Leave review Restaurant 2
          </Button>
          <Button
            onClick={() => {
              setRoute({ type: "restaurant" });
            }}
            color="subtle"
            className="list-item"
          >
            <img className="list-item-img" alt="Kids Toys" src="./toys.jpeg" />
            Go to review Restaurant 3
          </Button>
          <div color="subtle" className="list-item">
            <img className="list-item-img" alt="Kids Toys" src="./toys.jpeg" />
            Restaurant 4
          </div>
          <div color="subtle" className="list-item">
            <img className="list-item-img" alt="Kids Toys" src="./toys.jpeg" />
            Restaurant 5
          </div>
        </div>

        <MapContainer
          id="map"
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              <Icon icon={faCoffee} />
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}
