// chromeAPI.js (a separate module)
export function setAlarmAndNotification(task, time, setMessage) {
    const alarmName = 'reminder';
    const alarmTime = new Date(time).getTime();
    const currentTime = new Date().getTime();
  
    if (alarmTime > currentTime) {
      // Clear any existing alarm with the same name
      chrome.alarms.clear(alarmName);
  
      // Create a new alarm
      chrome.alarms.create(alarmName, { when: alarmTime });
  
      const notificationOptions = {
        type: 'basic',
        title: 'Reminder',
        message: task,
        iconUrl: 'icon.png', // Replace with the path to your icon
      };
  
      chrome.notifications.create('', notificationOptions, () => {
        setMessage('Reminder sent.');
      });
    } else {
      setMessage('Please choose a future time for the reminder.');
    }
  }
  