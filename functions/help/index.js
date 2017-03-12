"use strict"

const appId = "amzn1.ask.skill.340707d1-0eef-4abb-bd23-1aceb99e3372";
const Alexa = require('alexa-sdk');
const newSessionHandlers = require('handlers/new-session');
const amazonHandlers = require('handlers/amazon');
const customHandlers = require('handlers/custom');

exports.handle = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = appId;
    alexa.dynamoDBTableName = 'customAppUsersTable';
    alexa.registerHandlers(newSessionHandlers, amazonHandlers, customHandlers);
    alexa.execute();
};