import React from 'react';

import { ILoyalty } from '../../interfaces/ILoyalty';
import { PointsOrCash } from '../../utilities/pointsOrCash/PointsOrCash';

interface Props {
  data: ILoyalty;
}

export const HotelsPointsOrCash: React.FunctionComponent<Props> = ({
  data,
}: Props) => {
  return (
    <div>
      <p>Select A Hotel Rewards Program</p>
      <PointsOrCash data={data} program="Hotel" />
    </div>
  );
};

export default HotelsPointsOrCash;
