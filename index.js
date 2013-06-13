'use strict';

// Dependencies
require('colors');

// Decoration
var line = '██████████████████████████████'.rainbow;
var out = '_-::>  '.rainbow;

// Handle begin messaging
exports.begin = function () {
    console.log('\nWELCOME TO PA11Y'.rainbow);
    console.log(line + '\n');
};

// Handle a log message
exports.log = function (msg) {
    console.log(out + msg.yellow + ' ');
};

// Handle a debug message
exports.debug = function (msg) {
    console.log(out + msg.grey + ' ');
};

// Handle an error
exports.error = function (msg) {
    console.error(out + msg.red + ' ');
};

// Handle results
exports.handleResult = function (result) {
    console.log('\n' + line + '\n');
    if (!result.isPerfect) {
        console.log(out + (result.count.error + ' ERRORS').cyan);
        console.log(out + (result.count.warning + ' WARNINGS').cyan);
        console.log(out + (result.count.notice + ' NOTICES').cyan);
    } else {
        console.log(out + 'NO ERRORS! You\'re a star! ');
    }
};

// Handle end messaging
exports.end = function () {
    console.log('\n' + line + '\n');
};
