import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Installment from './components/Installment';
import Installments from './components/Installments';

export default function App() {
  //Definição dos 4 estados com hooks
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [monthlyPeriod, setmonthlyPeriod] = useState(1);
  const [rateInterest, setRateInterest] = useState(1);
  const [installments, setInstallments] = useState([]);

  //Monitoramento dos inputs
  useEffect(() => {
    calculateInstallments(initialInvestment, monthlyPeriod, rateInterest);
  }, [initialInvestment, monthlyPeriod, rateInterest]);

  //Calculo do juros e Criação das parcelas
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
      const percentValue = (currentValue * Math.abs(rateInterest)) / 100;

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

  //Monitorar a mudança de dados
  const handleChangeData = (newValue, newInterest, newPeriod) => {
    if (newValue !== null) {
      setInitialInvestment(newValue);
      return;
    }

    if (newInterest !== null) {
      setRateInterest(newInterest);
      return;
    }
    setmonthlyPeriod(newPeriod);
  };

  return (
    <div className="container">
      <h1 className="center">React Compound Interest</h1>

      <Form
        data={{ initialInvestment, rateInterest, monthlyPeriod }}
        onChangeData={handleChangeData}
      />

      <Installments>
        {installments.map(({ id, value, difference, proffit, percentage }) => {
          return (
            <Installment
              key={id}
              id={id}
              value={value}
              difference={difference}
              proffit={proffit}
              percentage={percentage}
            />
          );
        })}
      </Installments>
    </div>
  );
}
