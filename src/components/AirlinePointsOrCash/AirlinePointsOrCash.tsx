import React from 'react';

import { ILoyalty } from '../../interfaces/ILoyalty';
import { PointsOrCash } from '../../utilities/pointsOrCash/PointsOrCash';
import './AirlinePointsOrCash.css';

interface Props {
  data: ILoyalty;
}

export const AirlinePointsOrCash: React.FunctionComponent<Props> = ({
  data,
}: Props) => {
  return (
    <div className="airline-component">
      <p className="airline-title">Select An Airline Rewards Program</p>
      <PointsOrCash data={data} program="Ticket" />
    </div>
  );
};

export default AirlinePointsOrCash;
