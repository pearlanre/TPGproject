import React from 'react';
import { PointsOrCash } from './components/pointsOrCash/PointsOrCash';
import './App.css';

function App(): any {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <div className="App">
      <h1>Cash to Points Calculator</h1>
      <PointsOrCash />
    </div>
  );
}

export default App;
