console.log('Chrome:', chrome);
console.log('Notifications API:', chrome.notifications);


document.addEventListener('DOMContentLoaded', function () {
    const notifyButton = document.getElementById('notifyButton');

    notifyButton.addEventListener('click', function () {
        console.log("first")
        sendHelloWorldNotification();
    });
});

function sendHelloWorldNotification() {
    console.log("first")
    const notificationOptions = {
        type: 'basic',
        title: 'Hello World',
        message: 'Hello, World!',
        iconUrl: 'icon.png',
    };

    // Create the notification
    try {
        chrome.notifications.create('', notificationOptions, function () {
        console.log('Hello World notification created');
    });
    } catch (error) {
        console.log(error)
        
    }
}

chrome.alarms.onAlarm.addListener(
    () => {
        chrome.notifications.create(
            // "drink_water",
            {
                type: "basic",
                iconUrl: "icon.png",
                title: "Stay Hydrated",
                message: "Have a sip of water human!",
                silent: false
            },
            () => { }
        )
    },
)
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        if (request.time)
            createAlarm();

        sendResponse(() => {
            return false
        });
    }
);

function createAlarm() {
    chrome.alarms.create(
        "drink_water",
        {
            delayInMinutes: 1,
            periodInMinutes: 1
        }
    );
}