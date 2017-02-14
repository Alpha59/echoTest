"use strict";

const states = require('states');

module.exports = {
    'NewSession': function() {
        if(Object.keys(this.attributes).length === 0) { // If there is nothing in the DynamoDB for this user
            this.attributes['endedSessionCount'] = 0;
            this.attributes['gamesPlayed'] = 0;
        }
        this.handler.state = states.STARTMODE;
        this.emit(':ask', 'Welcome to High Low guessing game. You have played '
            + this.attributes['gamesPlayed'].toString() + ' times. would you like to play?',
            'Say yes to start the game or no to quit.');
    }
};