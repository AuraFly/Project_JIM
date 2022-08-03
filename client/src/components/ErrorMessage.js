import React from 'react';
import { Alert } from "react-bootstrap";


const ErrorMessage = ({ varient = "info", children}) => {
  return (
    <Alert varient={varient} style={{ fontsize: 20 }}>
        <strong>{children}</strong>
    </Alert>
  );
};

export default ErrorMessage;