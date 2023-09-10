function createAlarm() {
    chrome.alarms.create(
        "scheduledNotification",
        {
            delayInMinutes: 1,
            periodInMinutes: 60
        }
    );
}

function clearAlarm() {
    chrome.alarms.clear("scheduledNotification", () => {
      console.log("Alarm cleared");
    });
  }

chrome.alarms.onAlarm.addListener(
    () => {
        chrome.notifications.create(
            {
                type: "basic",
                iconUrl: "icon.png",
                title: "Important",
                message: "It's time to take a break from work. Stretch, relax, and recharge for a few minutes. Your well-being matters!",
                silent: false
            },
            () => { }
        )
    },
)
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        if (request.time){
            createAlarm();
        }else if (request.clearAlarm) {
            clearAlarm();
          }

        sendResponse({success: true});
    }
);

