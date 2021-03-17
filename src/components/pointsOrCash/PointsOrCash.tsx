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
        const airlineData = myJson.filter(
          (val) => val.tpg_valuation !== '' && val.type === 'airline'
        );
        setData(airlineData);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const [loyaltyProgram, setLoyaltyProgram] = useState({
    name: '',
    tpg_valuation: 0,
  });
  const [ticketCost, setTicketCost] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [ticketFees, setTicketFees] = useState(5.95);
  const [usePoints, setUsePoints] = useState(false);
  const [pointsNeeded, setPointsNeeded] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    if (loyaltyProgram.tpg_valuation > 1 && ticketFees < ticketCost) {
      setUsePoints(true);
    } else {
      setUsePoints(false);
    }
    const points = Math.round(ticketCost / loyaltyProgram.tpg_valuation);
    setPointsNeeded(points);
  };
  const handleLoyaltyChange = (option) => {
    setLoyaltyProgram(option);
    setTicketFees(5.95);
    setTicketCost(0);
    setSubmitted(false);
  };
  const showRecommendation =
    submitted && !Number.isNaN(pointsNeeded) && Number.isFinite(pointsNeeded);
  return (
    <div>
      <form className="cash-form" onSubmit={handleSubmit}>
        <p>Select An Airline Rewards Program</p>
        {data && data.length > 0 && (
          <Select
            options={data}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            defaultValue={loyaltyProgram}
            onChange={handleLoyaltyChange}
            className="form-select"
          />
        )}

        {submitted && !loyaltyProgram.name && (
          <span id="loyalty-error">Please select a Loyalty program</span>
        )}
        <p>Enter Ticket Price</p>
        <CurrencyInput
          className="form-field"
          value={ticketCost}
          onChangeEvent={(e) => setTicketCost(e.target.value)}
        />
        {submitted && !ticketCost && (
          <span id="loyalty-error">Please Enter the Ticket Cost</span>
        )}
        <p>Enter Ticket Fees</p>
        <CurrencyInput
          className="form-field"
          value={ticketFees}
          onChangeEvent={(e) => setTicketFees(e.target.value)}
        />
        <i>
          * Ticket Fees are set to 5.95 by default. Please update with ticket
          Fees.
        </i>
        <button className="form-button" type="submit">
          Calculate
        </button>
        {showRecommendation && (
          <p>
            You need {pointsNeeded} points plus ${ticketFees} for this ticket.
          </p>
        )}

        {showRecommendation &&
          (usePoints ? (
            <p>
              TPG recommends using <b>Points</b> for this ticket
            </p>
          ) : (
            <p>
              TPG recommends using <b>Cash</b> for this ticket
            </p>
          ))}
      </form>
    </div>
  );
};

export default PointsOrCash;
