function is_english_char(ch) {
    return "abcdefghijklmnoprstuwxyz".includes(ch);
}

function is_hebrew_char(ch) {
    return "אבגדהוזחטיכךלמםנןסעפףצץקרשת".includes(ch);
}

function convert_text() {
    // Get text in text-box
    let text = document.activeElement.value.toLowerCase();
    let convertedText = "";
    let selected_dict;

    const dict_eng_to_heb = {
        'q': '/', 'w': '\'', 'e': 'ק', 'r': 'ר', 't': 'א', 'y': 'ט', 'u': 'ו', 'i': 'ן', 'o': 'ם', 'p': 'פ',
        'a': 'ש', 's': 'ד', 'd': 'ג', 'f': 'כ', 'g': 'ע', 'h': 'י', 'j': 'ח', 'k': 'ל', 'l': 'ך', ';': 'ף', '\'': ',',
        'z': 'ז', 'x': 'ס', 'c': 'ב', 'v': 'ה', 'b': 'נ', 'n': 'מ', 'm': 'צ', ',': 'ת', '.': 'ץ', '/': '.'
    };

    const dict_heb_to_eng = {
        '/': 'q', '\'': 'w', 'ק': 'e', 'ר': 'r', 'א': 't', 'ט': 'y', 'ו': 'u', 'ן': 'i', 'ם': 'o', 'פ': 'p',
        'ש': 'a', 'ד': 's', 'ג': 'd', 'כ': 'f', 'ע': 'g', 'י': 'h', 'ח': 'j', 'ל': 'k', 'ך': 'l', 'ף': ';', ',': '\'',
        'ז': 'z', 'ס': 'x', 'ב': 'c', 'ה': 'v', 'נ': 'b', 'מ': 'n', 'צ': 'm', 'ת': ',', 'ץ': '.', '.': '/'
    };

    // Find what is the written language
    for (let ch of text) {
        if (is_english_char(ch)) {
            selected_dict = dict_eng_to_heb;
            break;
        } else if (is_hebrew_char(ch)) {
            selected_dict = dict_heb_to_eng;
            break;
        }
    }

    // Convert each character to its counterpart
    for (let ch of text) {
        if (selected_dict[ch] === undefined) {
            convertedText += ch;
        } else {
            convertedText += selected_dict[ch];
        }
    }

    // Replace text in text-box
    document.activeElement.value = convertedText;
}

convert_text();