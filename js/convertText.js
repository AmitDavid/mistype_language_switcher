var text = document.activeElement.value.toLowerCase();
var convertedText = "";

dict_eng_to_heb = {
    'q': '/', 'w':'\'', 'e': 'ק', 'r': 'ר', 't': 'א', 'y': 'ט', 'u': 'ו', 'i': 'ן', 'o': 'ם', 'p': 'פ',
    'a': 'ש', 's': 'ד', 'd': 'ג', 'f': 'כ', 'g': 'ע', 'h': 'י', 'j': 'ח', 'k': 'ל', 'l': 'ך', ';':'ף',  '\'': ',',
    'z': 'ז', 'x': 'ס', 'c':'ב', 'v':'ה', 'b':'נ', 'n':'מ', 'm':'צ', ',':'ת', '.':'ץ', '/':'.'
}

dict_heb_to_eng = {
    '/': 'q', '\'':'w', 'ק': 'e', 'ר': 'r', 'א': 't', 'ט': 'y', 'ו': 'u', 'ן': 'i', 'ם': 'o', 'פ': 'p',
    'ש': 'a', 'ד': 's', 'ג': 'd', 'כ': 'f', 'ע': 'g', 'י': 'h', 'ח': 'j', 'ל': 'k', 'ך': 'l', 'פ':';', ',': '\'',
    'ז': 'z', 'ס': 'x', 'ב':'c', 'ה':'v', 'נ':'b', 'מ':'n', 'צ':'m', 'ת':',', 'ץ':'.', '.':'/',
}

for (let ch of text) {
    if (lay[ch] === undefined) {
        convertedText += ch;
    } else {
        convertedText += lay[ch];
    }

}

document.activeElement.value = convertedText

