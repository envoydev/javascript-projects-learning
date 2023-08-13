import { useState } from "react";

import Banner from "./components/Banner/Banner"
import HouseList from "./components/HouseList/HouseList";
import House from "./components/House/House";

const App = () => {
  const [selectedHouse, setSelectedHouse] = useState();

  return (
    <>
      <Banner>
        <div>Providing houses all over the world</div>
      </Banner>
      {selectedHouse ? <House house={selectedHouse} /> : <HouseList setSelectedHouse={setSelectedHouse} />}
    </>
  );
}

export default App;
