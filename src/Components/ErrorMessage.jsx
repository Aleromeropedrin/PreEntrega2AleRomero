import React from 'react';

const ErrorMessage = ({ message, onClose }) => {
  return (
    <div className="error-message">
      <p>{message}</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default ErrorMessage;
