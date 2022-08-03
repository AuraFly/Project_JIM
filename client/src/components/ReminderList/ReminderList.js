import React from 'react';
import MainPage from '../MainPage/MainPage';



const ReminderList = ({ reminders = [] }) => {
  if (!reminders.length) {
    return <h3>No reminders Yet</h3>;
  }

  return (
    <MainPage title="Reminder List"> My Reminders </MainPage>

    
  );
};

export default ReminderList;
