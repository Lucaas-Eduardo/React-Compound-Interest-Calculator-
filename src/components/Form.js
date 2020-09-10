import React from 'react';

export default function Form({ value, onChange, id, label }) {
  const handleChange = (event) => {
    onChange(+event.target.value);
  };
  return (
    <div className="input-field">
      <input id={id} type="number" value={value} onChange={handleChange} />
      <label htmlFor="{id}" className="active">
        {label}
      </label>
    </div>
  );
}
