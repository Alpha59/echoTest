"use strict";

module.exports = {
    'FalseAlarmIntent': function() {
        var message = 'This is a False Alarm';
        this.emit(':tell', message);
    }
};