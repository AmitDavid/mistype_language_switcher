function isEnglishChar(ch) {
    return "abcdefghijklmnoprstuwxyz".includes(ch);
}

function isHebrewChar(ch) {
    return "אבגדהוזחטיכךלמםנןסעפףצץקרשת".includes(ch);
}

function convertText() {
    // Get text in text-box
    let text = document.activeElement.value;
    let isInnerHTML = false;

    if (text === undefined) {
        isInnerHTML = true;
        text = document.activeElement.textContent;
    }

    text = text.toLowerCase();

    let convertedText = "";
    let selectedDict;

    const dictEngToHeb = {
        'q': '/', 'w': '\'', 'e': 'ק', 'r': 'ר', 't': 'א', 'y': 'ט', 'u': 'ו', 'i': 'ן', 'o': 'ם', 'p': 'פ',
        'a': 'ש', 's': 'ד', 'd': 'ג', 'f': 'כ', 'g': 'ע', 'h': 'י', 'j': 'ח', 'k': 'ל', 'l': 'ך', ';': 'ף', '\'': ',',
        'z': 'ז', 'x': 'ס', 'c': 'ב', 'v': 'ה', 'b': 'נ', 'n': 'מ', 'm': 'צ', ',': 'ת', '.': 'ץ', '/': '.'
    };

    const dictHebToEng = {
        '/': 'q', '\'': 'w', 'ק': 'e', 'ר': 'r', 'א': 't', 'ט': 'y', 'ו': 'u', 'ן': 'i', 'ם': 'o', 'פ': 'p',
        'ש': 'a', 'ד': 's', 'ג': 'd', 'כ': 'f', 'ע': 'g', 'י': 'h', 'ח': 'j', 'ל': 'k', 'ך': 'l', 'ף': ';', ',': '\'',
        'ז': 'z', 'ס': 'x', 'ב': 'c', 'ה': 'v', 'נ': 'b', 'מ': 'n', 'צ': 'm', 'ת': ',', 'ץ': '.', '.': '/'
    };

    // Find what is the written language
    for (let ch of text) {
        if (isEnglishChar(ch)) {
            selectedDict = dictEngToHeb;
            break;
        } else if (isHebrewChar(ch)) {
            selectedDict = dictHebToEng;
            break;
        }
    }

    // Convert each character to its counterpart
    for (let ch of text) {
        if (selectedDict[ch] === undefined) {
            convertedText += ch;
        } else {
            convertedText += selectedDict[ch];
        }
    }

    // Change first character to uppercase
    convertedText = convertedText.charAt(0).toUpperCase() + convertedText.slice(1);

    // Replace text in text-box
    if (isInnerHTML) {
        document.activeElement.textContent = convertedText;
    } else {
        document.activeElement.value = convertedText;
    }
}

convertText();