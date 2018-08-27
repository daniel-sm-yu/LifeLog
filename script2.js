// Daily Log
$('#logbox').sticky({topSpacing: 75});

var logsArray = document.getElementsByClassName("card")

for (var i=0; i<logsArray.length; i+=1) {
	 
	logsArray[i].addEventListener("mouseover", function( event ) {   
    	var logHTML = "";
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
    	logHTML += '<h4 class="font-weight-light text-center" style="font-size: 2vw;"> On <strong>' + monthHTML + " " + dayHTML +'</strong>, ';
// Date End

// Emotion
		var emotionHTML;
		var emotionColor;

		switch(pixelSheet[this.id].emotion) {
			case 1: emotionHTML = "bored"; emotionColor = "#CD853F"; break;
			case 2: emotionHTML = "angry"; emotionColor = "#FC6161"; break;
			case 3: emotionHTML = "excited"; emotionColor = "#FC9C48"; break;
			case 4: emotionHTML = "happy"; emotionColor = "#FCD848"; break;
			case 5: emotionHTML = "sick"; emotionColor = "#48FCA2"; break;
			case 6: emotionHTML = "sad"; emotionColor = "#48EAFC"; break;
			case 7: emotionHTML = "annoyed"; emotionColor = "#B06EF2"; break;
			case 8: emotionHTML = "stressed"; emotionColor = "#C2C5CC"; break;
		}
		

    	logHTML += 'You were feeling <strong>' + emotionHTML + '</strong>. ';
    	$('#logbox').css({"background-color": emotionColor});
// Emotion End
    	
    	logHTML += 'You had a <strong>' + pixelSheet[this.id].rating + ' out of 10 </strong> kind of day. ';

// Highlight
		var highHTML;
		switch(pixelSheet[this.id].high) {
			case 1: highHTML = "meeting up with your friends from middle school and seeing how much everyone has changed"; break;
			case 2: highHTML = "getting that interview for your dream co-op job"; break;
			case 3: highHTML = "finally booking your trip to California for this Winter"; break;
			case 4: highHTML = "surprising your parents after telling them you wouldn't be home for another month"; break;
			case 5: highHTML = "relaxing and playing board games with your friends at the local cafe"; break;
			case 6: highHTML = "walking around downtown and giving sandwiches and coffee to the homeless"; break;
		}
    	logHTML += 'The highlight of your day was <strong>' + highHTML + '</strong>. '; 	
// Highlight End
    	
// Loqlight
    	var lowHTML;
    	switch(pixelSheet[this.id].low) {
    		case 1: lowHTML = "getting food poisoning a street vendor in chinatown"; break;
    		case 2: lowHTML = "dropping your phone while running up the stairs and cracking it"; break;
    		case 3: lowHTML = "wasting half of this month's data because you forgot to turn on my wifi"; break;
    		case 4: lowHTML = "not warm up before working out and pulling a hamstring"; break;
    		case 5: lowHTML = "getting an allergic reaction from some random plant"; break;
    		case 6: lowHTML = "getting a haircut that turned out to be way too short"; break;
    	}
    	logHTML += 'The lowlight of your day was <strong>' + lowHTML+ '</strong>.</h4>'; 	
// Lowlight End

    	$('#logs').html(logHTML);
	})
}

// Daily Log End

