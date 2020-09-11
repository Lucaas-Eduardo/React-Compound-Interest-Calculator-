import React from 'react';

export default function Installment({
  id,
  value,
  proffit,
  percentage,
  difference,
}) {
  console.log(value);
  return (
    <div style={styles.nameStyle}>
      <span>{`parcela: ${id}`}</span>
      <span>{value}</span>
      <span>{percentage}</span>
      <span>{difference}</span>
    </div>
  );
}

const styles = {
  nameStyle: {
    border: '1px solid lightgray',
    borderRadius: '4px',
    marginRight: '5px',
    marginBottom: '5px',
    padding: '5px',
  },
};
