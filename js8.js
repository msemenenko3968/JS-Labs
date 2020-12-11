var words = prompt('vvedite posledovatelnost slow cheres probel');
       words = words.split(' ');
       for (var i=0;i<words.length;i++){
	    words[i] = words[i].replace('а', 'о');
		while (words[i].indexOf('а') != -1){
		  words[i] = words[i].replace('а', '');
		}
       }
	  alert(words);