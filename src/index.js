"use strict"

const appId;
const Alexa = require('alexa-sdk');
const newSessionHandlers = require('handlers/new-session');
const amazonHandlers = require('handlers/amazon');
const customHandlers = require('handlers/custom');


exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = appId;
    alexa.dynamoDBTableName = 'customAppUsersTable';
    alexa.registerHandlers(newSessionHandlers, amazonHandlers, customHandlers);
    alexa.execute();
};