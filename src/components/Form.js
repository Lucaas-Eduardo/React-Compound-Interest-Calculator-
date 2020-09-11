import React from 'react';

export default function Form({ data, onChangeData }) {
  const { initialInvestment, rateInterest, monthlyPeriod } = data;

  const handleChangeInitialInvestment = (event) => {
    onChangeData(+event.target.value, null, null);
  };
  const handleChangeRateInterest = (event) => {
    onChangeData(null, +event.target.value, null);
  };
  const handleChangeMonthlyPeriod = (event) => {
    onChangeData(null, null, +event.target.value);
  };
  return (
    <div className="center row">
      <div className="col input-field s6 m4 l3">
        <input
          id="inputInitialInvestiment"
          type="number"
          value={initialInvestment}
          onChange={handleChangeInitialInvestment}
          min="100"
          step="100"
        />
        <label htmlFor="inputInitialInvestment" className="active">
          Initial Investment:
        </label>
      </div>
      <div className="col input-field s6 m4 l3">
        <input
          id="inputRateInterest"
          type="number"
          value={rateInterest}
          onChange={handleChangeRateInterest}
          step="0.1"
        />
        <label htmlFor="inputRateInterest" className="active">
          Rate Interest:
        </label>
      </div>
      <div className="col input-field s6 m4 l3">
        <input
          id="inputMonthlyPeriod"
          type="number"
          value={monthlyPeriod}
          onChange={handleChangeMonthlyPeriod}
          min="1"
          step="1"
        />
        <label htmlFor="inputMonthlyPeriod" className="active">
          Monthly Period:
        </label>
      </div>
    </div>
  );
}
