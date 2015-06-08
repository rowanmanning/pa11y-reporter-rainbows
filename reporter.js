'use strict';

var chalk = require('chalk');

var start = rainbow('►►►► ');
var quietStart = rainbow('∙∙∙∙ ');
var typeStarts = {
    error: start + chalk.red('ERROR: '),
    notice: start + chalk.cyan('NOTICE: '),
    warning: start + chalk.yellow('WARNING: ')
};

module.exports = {
    begin: reportBegin,
    error: reportError,
    debug: reportDebug,
    info: reportInfo,
    results: reportResults
};

function reportBegin () {
    console.log(rainbow('▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚'));
    console.log(chalk.red('▌') + chalk.cyan(' WELCOME TO PA11Y ') + chalk.yellow('▐'));
    console.log(rainbow('▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞'));
    console.log('');
}

function reportError (message) {
    if (/^error:/i.test(message)) {
        console.error(message);
    }
    else {
        console.error(start + chalk.red('ERROR: ' + message));
    }
}

function reportDebug (message) {
    console.log(start + chalk.gray('DEBUG: ' + message));
}

function reportInfo (message) {
    console.log(start + message);
}

function reportResults (results) {
    if (results.length === 0) {
        return console.log('\n' + chalk.green('NO ERRORS! You\'re a star!') + '\n');
    }
    results.forEach(reportResult);
    console.log(chalk.magenta([
        '',
        '                     /',
        '                .,. /',
        '              ,ttttn     ' + chalk.red(results.filter(isError).length + ' ERRORS'),
        '   ,,.__    .,XXX"nI)     ' + chalk.yellow(results.filter(isWarning).length + ' WARNINGS'),
        '  X  XXXXXXXXXXXXX ""      ' + chalk.cyan(results.filter(isNotice).length + ' NOTICES'),
        '  .X XXXXXXXXXXXXXXxx',
        ' "  .XX"XX      X  ./',
        '    *X\' (X      X  "',
        '     X   ")      X',
        '     X,   \'"     \'"'
    ].join('\n')));
}

function reportResult (result) {
    console.log(
        '\n' +
        (typeStarts[result.type]) + result.message +
        '\n' +
        quietStart + chalk.gray(result.code) +
        '\n' +
        quietStart + chalk.gray(result.context.replace(/\s+/g, ' '))
    );
}

function isError (result) {
    return (result.type === 'error');
}

function isNotice (result) {
    return (result.type === 'notice');
}

function isWarning (result) {
    return (result.type === 'warning');
}

function rainbow (string) {
    var colors = [
        'red',
        'yellow',
        'green',
        'cyan',
        'blue',
        'magenta'
    ];
    var cursor = 0;
    return string.split('').map(function (character) {
        character = chalk[colors[cursor]](character);
        if (cursor < (colors.length - 1)) {
            cursor += 1;
        }
        else {
            cursor = 0;
        }
        return character;
    }).join('');
}
