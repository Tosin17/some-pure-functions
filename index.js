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

function serializeStr(str) {
  str += '$';
  const summary = [];
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    count += 1;
    if (str[i - 1] && str[i - 1] !== str[i]) {
      summary.push(str[i - 1] + count);
      count = 0;
    }
  }
  
  return summary.join('');
}





