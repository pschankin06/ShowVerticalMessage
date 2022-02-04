'use strict';

function showVerticalMessage(message) {
    let newMessage = '';

    if (message[0] === 'м') {
        message = message[0].toUpperCase() + message.slice(1);
    }
    if (message.length > 10) {
        message = message.slice(0, 10);
    }
    for (let char of message) {
        newMessage += char + '\n';
    }
    console.log(newMessage);
}

showVerticalMessage('марафон');
showVerticalMessage('не марафон');
showVerticalMessage('не марафон и несколько лишних символов');