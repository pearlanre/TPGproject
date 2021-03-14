import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import CurrencyInput from 'react-currency-input';
import './PointsOrCash.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const PointsOrCash: React.FunctionComponent<Props> = () => {
  const [data, setData] = useState<any[]>([]);
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
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const [loyaltyProgram, setLoyaltyProgram] = useState({
    name: '',
    tpg_valuation: 0,
  });
  const [ticketCost, setTicketCost] = useState('');
  const [points, setPoints] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [pointsPrice, setPointsPrice] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const total =
      parseFloat(String(loyaltyProgram.tpg_valuation)) *
      parseInt(String(points), 10);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setPointsPrice(total);
    setSubmitted(true);
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <div>
      <form className="register-form" onSubmit={handleSubmit}>
        <p>Select rewards Program</p>
        {data && data.length > 0 && (
          <Select
            options={data}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            defaultValue={loyaltyProgram}
            onChange={setLoyaltyProgram}
          />
        )}

        {submitted && !loyaltyProgram && (
          <span id="loyalty-error">Please select a Loyalty program</span>
        )}
        <p>Enter ticker price</p>
        <CurrencyInput
          className="form-field"
          value={ticketCost}
          onChangeEvent={(e) => setTicketCost(e.target.value)}
        />
        {submitted && !ticketCost && (
          <span id="loyalty-error">Please Enter the Ticket Cost</span>
        )}
        <p>How many points do you have ?</p>
        <CurrencyInput
          className="form-field"
          value={points}
          onChangeEvent={(e) => setPoints(e.target.value)}
        />
        {submitted && (
          <span id="loyalty-error">
            The program valuations for {loyaltyProgram.name} has tpg value{' '}
            {loyaltyProgram.tpg_valuation} results to {pointsPrice}
          </span>
        )}
        <button className="form-field" type="submit">
          Calculate
        </button>
        {pointsPrice > ticketCost ? (
          <p>You should use Cash for this ticket</p>
        ) : (
          <p>You should use points for this ticket</p>
        )}
      </form>
    </div>
  );
};

export default PointsOrCash;
