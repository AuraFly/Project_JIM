import React from "react";

const ReminderList = ({ reminders = [] }) => {
  if (!reminders.length) {
    return <h3 className="text-black">No reminders Yet!</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: "1px dotted #1a1a1a" }}
      >
        reminders
      </h3>
      <div className="flex-row my-4">
        {reminders &&
          reminders.map((reminder) => (
            <div key={reminder._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {reminder.reminderAuthor} remindered{" "}
                  <span style={{ fontSize: "0.825rem" }}>
                    on {reminder.createdAt}
                  </span>
                </h5>
                <p className="card-body">{reminder.reminderText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ReminderList;
