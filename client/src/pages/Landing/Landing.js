import React from "react";
import { useQuery } from "@apollo/client";
import ReminderList from "./ReminderList/ReminderList";
import ReminderForm from "./ReminderForm/ReminderForm";

import { QUERY_REMINDERS } from "../../utils/queries";

const Landing = () => {
  const { loading, data } = useQuery(QUERY_REMINDERS);
  const Reminders = data?.Reminders || [];

  return (
    <div>
      <div className="flex-row justify-center">
        <div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 justify-items-center gap-4"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <ReminderForm />
          <div className="col-12 col-md-8 mb-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ReminderList
                Reminders={Reminders}
                title="Some Feed for Reminder(s)..."
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
