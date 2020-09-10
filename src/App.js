import React, { useState, useEffect } from 'react';
import Form from './components/Form';

export default function App() {
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [monthlyPeriod, setmonthlyPeriod] = useState(1);
  const [rateInterest, setRateInterest] = useState(1);
  const [installments, setInstallments] = useState([]);
  useEffect(() => {
    calculateInstallments(initialInvestment, monthlyPeriod, rateInterest);
  }, [initialInvestment, monthlyPeriod, rateInterest]);

  const calculateInstallments = (
    initialInvestment,
    monthlyPeriod,
    rateInterest
  ) => {
    const newInstallments = [];
    let currentId = 1;
    let currentValue = initialInvestment;
    let percentage = 0;

    for (let i = 1; i <= monthlyPeriod; i++) {
      const percentValue = (currentValue * rateInterest) / 100;

      currentValue =
        rateInterest >= 0
          ? currentValue + percentValue
          : currentValue - percentValue;

      percentage = (currentValue / initialInvestment - 1) * 100;

      newInstallments.push({
        id: currentId++,
        value: currentValue,
        difference: currentValue - initialInvestment,
        percentage,
        proffit: rateInterest > 0,
      });
    }
    setInstallments(newInstallments);
  };

  return (
    <div className="container">
      <h1 className="center">React Compound Interest</h1>
      <div style={styles.nameContainerStyle}>
        <Form
          value={initialInvestment}
          id={'inputInitalInvestment'}
          label={'Initial Investment:'}
          onChange={(value) => setInitialInvestment(value)}
        />
        <Form
          value={rateInterest}
          id={'inputRateInterest'}
          label={'Rate Interest:'}
          onChange={(value) => setRateInterest(value)}
        />
        <Form
          value={monthlyPeriod}
          id={'inputLenghtOfTime'}
          label={'Lenght Of Time:'}
          onChange={(value) => setmonthlyPeriod(value)}
        />
      </div>
    </div>
  );
}

const styles = {
  nameContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5px',
    marginLeft: '10px',
  },
};
