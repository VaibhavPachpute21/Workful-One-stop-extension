import React, { useState } from 'react';
import { setAlarmAndNotification } from './chromeAPI'; // Adjust the path to your module

const Reminder = () => {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSetReminder = () => {
    setAlarmAndNotification(task, time, setMessage);
  };

  return (
    <div>
      <h1>Reminder App</h1>
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="datetime-local"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={handleSetReminder}>Set Reminder</button>
      <p>{message}</p>
    </div>
  );
};

export default Reminder;
