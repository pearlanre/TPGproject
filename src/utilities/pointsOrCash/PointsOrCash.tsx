import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import CurrencyInput from 'react-currency-input';
import './PointsOrCash.css';
import { ILoyalty } from '../../interfaces/ILoyalty';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  data: ILoyalty;
  program: string;
}
export const PointsOrCash: React.FunctionComponent<Props> = (props: Props) => {
  const [loyaltyProgram, setLoyaltyProgram] = useState({
    name: '',
    tpg_valuation: 0,
  });
  const [programCost, setProgramCost] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [programFees, setProgramFees] = useState(5.95);
  const [usePoints, setUsePoints] = useState(false);
  const [pointsNeeded, setPointsNeeded] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    if (loyaltyProgram.tpg_valuation > 1 && programFees < programCost) {
      setUsePoints(true);
    } else {
      setUsePoints(false);
    }
    const points = Math.round(programCost / loyaltyProgram.tpg_valuation);
    setPointsNeeded(points);
  };
  const handleLoyaltyChange = (option) => {
    setLoyaltyProgram(option);
    setProgramFees(5.95);
    setProgramCost(0);
    setSubmitted(false);
  };
  const showRecommendation =
    submitted && !Number.isNaN(pointsNeeded) && Number.isFinite(pointsNeeded);
  return (
    <div>
      <form className="cash-form" onSubmit={handleSubmit}>
        {props.data && (
          <Select
            options={props.data}
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
        <p>Enter {props.program} Price</p>
        <CurrencyInput
          className="form-field"
          value={programCost}
          onChangeEvent={(e) => setProgramCost(e.target.value)}
        />
        {submitted && !loyaltyProgram.name && (
          <span id="loyalty-error">Please Enter the {props.program} Cost</span>
        )}
        <p>Enter {props.program} Fees</p>
        <CurrencyInput
          className="form-field"
          value={programFees}
          onChangeEvent={(e) => setProgramFees(e.target.value)}
        />
        <i>
          * Program Fees are set to 5.95 by default. Please update with{' '}
          {props.program} Fees.
        </i>
        <button className="form-button" type="submit">
          Calculate
        </button>
        {showRecommendation && (
          <p>
            You need {pointsNeeded} points plus ${programFees} for this{' '}
            {props.program}.
          </p>
        )}

        {showRecommendation &&
          (usePoints ? (
            <p>
              TPG recommends using <b>Points</b> for this {props.program}.
            </p>
          ) : (
            <p>
              TPG recommends using <b>Cash</b> for this {props.program}.
            </p>
          ))}
      </form>
    </div>
  );
};

export default PointsOrCash;
