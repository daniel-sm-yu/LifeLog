// Daily Log
$('#logbox').sticky({topSpacing: 75});
$('#logs').sticky({topSpacing: 150});

// $('#dailylog').hover(function() {
// 	var logHTML = '';
// 	console.log("ere");
// 	$('.logs').html(logHTML);
// });

var logsArray = document.getElementsByClassName("pixel")

for (var i=0; i<logsArray.length; i+=1) {
	 
	logsArray[i].addEventListener("mouseover", function( event ) {   
    	var logHTML = '<br><br>';
// Date
    	var entryDate = pixelSheet[this.id].date;
    	var monthHTML;
    	var dayHTML;

    	if (entryDate<32) {
    		monthHTML = "January";
    		dayHTML = entryDate;
    	}
    	else if (entryDate<60) {
    		monthHTML = "Feburary";
    		dayHTML = entryDate - 31;
    	}
    	else if (entryDate<91) {
    		monthHTML = "March";
    		dayHTML = entryDate - 59;
    	}
    	else if (entryDate<121) {
    		monthHTML = "April";
    		dayHTML = entryDate - 90;
    	}
    	else if (entryDate<152) {
    		monthHTML = "May";
    		dayHTML = entryDate - 120;
    	}
    	else if (entryDate<182) {
    		monthHTML = "June";
    		dayHTML = entryDate - 151;
    	}
    	else if (entryDate<213) {
    		monthHTML = "July";
    		dayHTML = entryDate - 181;
    	}
    	else if (entryDate<244) {
    		monthHTML = "August";
    		dayHTML = entryDate - 212;
    	}
    	else if (entryDate<274) {
    		monthHTML = "September";
    		dayHTML = entryDate - 243;
    	}
    	else if (entryDate<305) {
    		monthHTML = "October";
    		dayHTML = entryDate - 273;
    	}
    	else if (entryDate<335) {
    		monthHTML = "November";
    		dayHTML = entryDate - 304;
    	}
    	else if (entryDate<366) {
    		monthHTML = "December";
    		dayHTML = entryDate - 334;

    	}
    	logHTML += '<h4 class="font-weight-light text-justify"> On ' + monthHTML + " " + dayHTML +', ';
// Date End

// Emotion
		var emotionHTML;
		var emotionColor;

		switch(pixelSheet[this.id].emotion) {
			case 1: emotionHTML = "Bored"; emotionColor = "#CD853F"; break;
			case 2: emotionHTML = "Angry"; emotionColor = "#FC6161"; break;
			case 3: emotionHTML = "Excited"; emotionColor = "#FC9C48"; break;
			case 4: emotionHTML = "Happy"; emotionColor = "#FCD848"; break;
			case 5: emotionHTML = "Sick"; emotionColor = "#48FCA2"; break;
			case 6: emotionHTML = "Sad"; emotionColor = "#48EAFC"; break;
			case 7: emotionHTML = "Annoyed"; emotionColor = "#B06EF2"; break;
			case 8: emotionHTML = "Stressed"; emotionColor = "#C2C5CC"; break;
		}
		

    	logHTML += 'You Were Feeling ' + emotionHTML + '. ';
    	$('#logbox').css({"background-color": emotionColor});
// Emotion End
    	logHTML += 'You had a ' + pixelSheet[this.id].rating + ' out of 10 kind of day. ';

// Highlight
    	logHTML += 'The highlight of your day was ' + pixelSheet[this.id].high + '. '; 	
// Highlight End
    	
// Loqlight
    	logHTML += 'The lowlight of your day was ' + pixelSheet[this.id].low + '.</h4>'; 	
// Lowlight End

    	




    	$('#logs').html(logHTML);
	})
}

   

// Daily Log End

