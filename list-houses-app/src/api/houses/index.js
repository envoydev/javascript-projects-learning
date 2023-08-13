const fetchHousesData = async () => {
  try {
    return await fetch('data/houses.json');
  } catch (error) {
    console.error("There was an error fetching the data", error);
    return [];
  }
};

export default fetchHousesData;