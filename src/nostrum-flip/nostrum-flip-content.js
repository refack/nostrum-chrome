var heb_char_to_eng = {
	'/':'q',
    "'":'w',
    'ק':'e',
    'ר':'r',
	'א':'t',
	'ט':'y',
	'ו':'u',
	'ן':'i',
	'ם':'o',
	'פ':'p',
	'ש':'a',
	'ד':'s',
	'ג':'d',
	'כ':'f',
	'ע':'g',
	'י':'h',
	'ח':'j',
	'ל':'k',
	'ך':'l',
	'ף':';',
	'ז':'z',
	'ס':'x',
	'ב':'c',
	'ה':'v',
	'נ':'b',
	'מ':'n',
	'צ':'m',
	'ת':',',
	'ץ':'.',
    '.':'/',
    '?':"'"
}
var eng_char_to_heb = {
    'q':'/',
	'w':"'",
    'e':'ק',
	'r':'ר',
	't':'א',
	'y':'ט',
	'u':'ו',
	'i':'ן',
	'o':'ם',
	'p':'פ',
	'a':'ש',
	's':'ד',
	'd':'ג',
	'f':'כ',
	'g':'ע',
	'h':'י',
	'j':'ח',
	'k':'ל',
	'l':'ך',
	';':'ף',
	'z':'ז',
	'x':'ס',
	'c':'ב',
	'v':'ה',
	'b':'נ',
	'n':'מ',
	'm':'צ',
	',':'ת',
    '.':'ץ',
    "'":'?',
	'/':'.'
}


function count_heb_chars(str)
{
    return count_chars_in_dict(str, heb_char_to_eng);
}


function count_eng_chars(str)
{
    return count_chars_in_dict(str, eng_char_to_heb);
}


function count_chars_in_dict(str, dict)
{
    var accum = 0;
    for (var i in str) {
        var cur_char = str[i];
        accum += Boolean(dict[cur_char]);
    }
    return accum;
}


function flip_heb_chars(str)
{
    return flip_chars_by_dict(str, heb_char_to_eng);
}


function flip_eng_chars(str)
{
    return flip_chars_by_dict(str, eng_char_to_heb);
}


function flip_chars_by_dict(str, dict)
{
    var accum = [];
    for (var i in str) {
        var cur_char = str[i];
        var new_char = dict[cur_char] || cur_char;
        accum.push(new_char);
    }
    return accum.join('');
}


function flip_chars() {
    var active = document.activeElement;
    var str = active.value;
    var hebs = count_heb_chars(str);
    var engs = count_eng_chars(str);
    if (hebs > engs) {
        var new_str = flip_heb_chars(str);
    } else {
        var new_str = flip_eng_chars(str);
    }
    active.value = new_str;
}


function flip_chord(e) {
    if (e.altKey && e.shiftKey && e.keyCode == 69) {
        flip_chars();
    }
}


window.addEventListener('keydown', flip_chord);