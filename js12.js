var line = prompt('Введите строку');
var lineRev;
line = line.replace(/[' ',.?!:-]/gim,'').toLowerCase();
lineRev=line.split('').reverse().join('');
if(line == lineRev){
	alert('Это строка палиндром');
	}
else {
	alert('Не явялется палиндромом');
	}