import HouseRow from "../HouseRow/HouseRow";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import useHouses from "../../hooks/useHouses";
import loadingStatus from "../../helpers/loadingStatus";

const HouseList = ({ setSelectedHouse }) => {

  const { houses, setHouses, loadingState} = useHouses();

  if (loadingState !== loadingStatus.loaded) {
    return <LoadingIndicator loadingState={loadingState} />;
  }

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: "32 Valley Way, New York",
        country: "Switzerland",
        price: 1000000,
      },
    ]);
  };

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map(house => <HouseRow key={house.id} house={house} setSelectedHouse={setSelectedHouse} />)}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>Add</button>
    </>
  );
};

export default HouseList;