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

function leet(str) {
    let newStr = '';
    
    for (let c of str) {
        newStr += (leetObjMapping[c]) ? leetObjMapping[c] : c;
    }

    return newStr;
}

function formatStr(str) {  
    str.split('').reduce((acc, val) => {
        if (acc === val) {
            arr.push(acc);
        } else {
            arr.push(',',val);
        }
        return val;
    }, '');

    return arr.join('').split(',');
}

function summarizeSerially(str) {
    const arr = [];
    
    let summary = '';
    for (letters of formatStr(str)) {
        if (letters.length !== 0) {
            summary += `${letters.substring(0, 1)}${letters.length}`
        }
    }

    return summary;
}





