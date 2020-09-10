import React, { useState } from 'react';
import Form from './components/Form';

export default function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [lengthOfTime, setlengthOfTime] = useState(0);
  const [rateInterest, setRateInterest] = useState(0);

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
          onChange={(value) => setInitialInvestment(value)}
        />
        <Form
          value={lengthOfTime}
          id={'inputLenghtOfTime'}
          label={'Lenght Of Time:'}
          onChange={(value) => setInitialInvestment(value)}
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
