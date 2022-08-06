import React from "react";
import InvoiceImg from "../../images/Invoice.png"
import "./index.css";

export default function Invoice () {
  return (
    <div>
      <img src={InvoiceImg} className="pic" alt="invoice image" />
    </div>
  );
};



