import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './App.css';
import { ILoyalty } from './interfaces/ILoyalty';
import { AirlinePointsOrCash } from './components/AirlinePointsOrCash/AirlinePointsOrCash';
import { HotelsPointsOrCash } from './components/HotelsPointsOrCash/HotelsPointsOrCash';

function App(): any {
  const [airlineData, setAirlineData] = useState<ILoyalty>({
    name: '',
    type: '',
    tpg_valuation: 0,
  });
  const [hotelData, setHotelData] = useState<ILoyalty>({
    name: '',
    type: '',
    tpg_valuation: 0,
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAccordion, setShowAccordion] = useState(false);
  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        const airlineFilter = myJson.filter(
          (val) => val.tpg_valuation !== '' && val.type === 'airline'
        );
        const hotelFilter = myJson.filter(
          (val) => val.tpg_valuation !== '' && val.type === 'hotel'
        );
        setAirlineData(airlineFilter);
        setHotelData(hotelFilter);
      });
  };
  const options = [
    { id: 0, name: 'Air Tickets' },
    { id: 1, name: 'Hotels' },
  ];
  const handleSelection = (option) => {
    setSelectedOption(option.id);
    setShowAccordion(true);
  };
  useEffect(() => {
    getData();
  }, []);
  // @ts-ignore
  return (
    <div className="App">
      <h1 className="tpg_title">Cash to Points Calculator</h1>
      <p>Select Air Tickets or Hotels</p>
      <Select
        defaultValue={selectedOption}
        onChange={handleSelection}
        options={options}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
      />
      {showAccordion &&
        (selectedOption === 1 ? (
          <HotelsPointsOrCash data={hotelData} />
        ) : (
          <AirlinePointsOrCash data={airlineData} />
        ))}
    </div>
  );
}

export default App;
