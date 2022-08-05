import React from "react";

const Invoice = () => {
  const invoices = [
    {
      id: 1,
      date: "06-04-2022",
      time: "5:45 AM",
      format: "Flip Fusion",
    },

    {
      id: 2,
      date: "06-16-2022",
      time: "5:30 AM",
      format: "Express",
    },

    {
      id: 3,
      date: "06-19-2022",
      time: "12:00 PM",
      format: "Dance Mixx",
    },
  ];
  return (
    <div>
      <h5>Let's Get Paid</h5>
      <div>
        {invoices.map(({ id, date, time, format }) => {
          return (
            <div key={id} className="invoice_item">
              <h3>{date}</h3> <h2>{time}</h2>
              <h2>{format}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Invoice;
