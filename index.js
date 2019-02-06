'use strict';

const l = console.log;

const str = 'C is for cookie, that\'s good enough for me';

// Input :String --> 'C is for cookie, that\'s good enough for me'
// Output :String --> 'C 15 for cook13, 7h47'5 good 3nough for m3​​​​​'
function leet(str) {

    const leetObjMapping = {
        'a': 4,
        'A': 4,
        'e': 3,
        'E': 3,
        'i': 1,
        'I': 1,
        'o': 0,
        'O': 0,
        's': 5,
        'S': 5,
        't': 7,
        'T': 7,
        'b': 5,
        'D': 5
    }
    
    let newStr = '';

    // For each xter in string, if it exists in the `letObjMapping` 
    // then store its map value in a new string, else just concatenante
    // it to the newString
    for (let c of str) {
        newStr += (leetObjMapping[c]) ? leetObjMapping[c] : c;
    }

    return newStr;
}

// Log to console
l(leet(str));


// Input --> 'hhhhhqqlllllllhhhppp'
// Output --> 'h5q2l7h3p3,'
function summarizeSerially(str) {
    const arr = [];

    // Compose input into ['hhhhh', 'qq', 'lllllll', 'hhhppp']
    // And store in `lettersArr` 
    str.split('').reduce((acc, val) => {
        if (acc === val) {
            arr.push(acc);
        } else {
            arr.push(',',val);
        }
        return val;
    }, '');

    const lettersArr = arr.join('').split(',');
    
    // Summarize ['hhhhh', 'qq', 'lllllll', 'hhhppp'] into h5q2l7h3p3
    let summary = '';
    for (letters of lettersArr) {
        if (letters.length !== 0) {
            summary += `${letters.substring(0, 1)}${letters.length}`
        }
    }

    return summary;
}

// Log to console
l(summarizeSerially('hhhhhqqlllllllhhhppp'));




