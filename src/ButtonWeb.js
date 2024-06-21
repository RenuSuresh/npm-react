import React from 'react';

export function ButtonWeb({ onClick, label }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}
