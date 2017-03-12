"use strict";

var AWS = require('aws-sdk');

module.exports = {
    'FalseAlarmIntent': function() {
        var that = this;
        var sns = new AWS.SNS();
        this.attributes['previous'] = this.attributes['now'] ? this.attributes['now'] : 0;
        this.attributes['now'] = this.attributes['previous'] + 1;
        sns.publish({
            'PhoneNumber': '+14843549199',
            'Message': `This is false alarm number: ${that.attributes['now']}`
        }, function(err, data){
            if ( err ){
                that.emit(':tell', "False Alarm message failure" + JSON.stringify(err));
            } else {
                that.emit(':tell', "False Alarm message Success");
            }
        });
    }
};