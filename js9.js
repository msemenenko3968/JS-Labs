var Time = new Date();
var Hours = Time.getHours();
var Minutes = Time.getMinutes();
var time = Hours + Minutes / 60;
 alert('Time is '+ Hours + ':' + Minutes);
    if (time >= 7 && time < 8){
		    alert('It\'s breakfast time ');
		}	else if(time >= 13 && time < 14) {
		    alert('It\'s lunch time ');
		}   else if(time >= 19 && time < 20) {
		    alert('It\'s dinner time ');
		}
	if (time >= 9 && time < 18){
		    alert('It\'s time to work');
		}	else if(time >= 18 && time < 23) {
		    alert('It\'s time to rest ');
		}   else if(time >= 23 && time < 6.5 ) {
		    alert('It\'s time to sleep ');
		}