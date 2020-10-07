var a = prompt('Введите массу 1-ой гантели:');
	var b = prompt('Введите массу 2-ой гантели:');
	var c = prompt('Введите массу 3-ей гантели:');
	var A = +a;
	var B = +b;
	var C = +c;
	var sum = (A+B+C);
	var min, max;
	  if (A<B){
	    min = A;}
	  else {
	    min = B;}
	  if (C<min){
	    min = C;}
	  if (A>B){
	    max = A;}
	  else {
	    max = B;}
	  if (C>max){
	    max = C;}
	alert('Сумма масс равна '+(sum)+'\nСамая лёгкая гантеля весит '+(min)+'\nСамая тяжёлая гантеля весит '+(max));