var line = prompt('Введите строку');
	var count = 0; 
	var Longest = 0;
	var Middle = 0, MiddleLen = 0;
	var words = line.split(/[\s?]+/);
    for(var i = 0; i<words.length; i++){
	   if(words[i]!=''){
	    count +=1;                                                                                                                                                                                                                                                        
		}                                                                                            
	}
	
	for(var j = 0; j<count; j++){
      if(words[j].length>Longest){
        Longest = words[j].length;
		}
	}

	var Shortest = words[0].length;
    for (var k = 0; k<count; k++){
      if(words[k].length<Shortest){
	    Shortest = words[k].length;
        }
    }
	var MiddleL=words.map(item => item.length);
	alert(MiddleL);
	for(var g=0;g<count;g++){
	  MiddleLen = MiddleLen + MiddleL[g];
    }
    Middle = MiddleLen/count;	
   // Middle = words.join('').length/count;
  /* var len;
    for (var g = 0; g<count; g++){
      for (var f = 0; f<count; f++){
        len[g] = words[f].length;
      }
    }
				alert(len);
   /* for (var t =0; t<=count ; t++){
	  MiddleL = MiddleL + len[t];
	}
				alert(MiddleL);
	Middle = MiddleL/count;
				alert(Middle);*/
    alert('Max = '+Longest+'\nMin = '+Shortest+'\nMiddle = '+Middle);	