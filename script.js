$('nav').sticky({topSpacing: 0});

// Pixel Sheet
class pixel {
	constructor(date, emotion, rating, high, low) {
		this.date = date;
		this.emotion = emotion;
		this.rating = rating;
		this.high = high;
		this.low = low;
	}	
};

var pixelSheet = [];

for (var i=0; i<365; i+=1) {
	var date = 365 - i;
	var emotion = Math.floor(Math.random()*8) + 1;
	var rating = Math.floor(Math.random()*10) + 1;
	var high = Math.floor(Math.random()*6) + 1;
	var low = Math.floor(Math.random()*6) + 1;
	
	pixelSheet[i] = new pixel(date, emotion, rating, high, low);
}

var pixelHTML = '';

for (var i=0; i<pixelSheet.length; i+=1) {

	var pixelColor;
	switch(pixelSheet[i].emotion) {
		case 1: pixelColor = "#8B4513"; break;
		case 2: pixelColor = "#DC143C"; break;
		case 3: pixelColor = "#FF6347"; break;
		case 4: pixelColor = "#FFBE00"; break;
		case 5: pixelColor = "#00CC8C"; break;
		case 6: pixelColor = "#00BFFF"; break;
		case 7: pixelColor = "#7B68EE"; break;
		case 8: pixelColor = "#696969"; break;
	}
	
	pixelHTML += '<div class="col-auto card" style="display: inline-block; background-color:' + pixelColor + ';"></div>';
};

pixelHTML += '</div>'

$('#pixelsheet').html(pixelHTML);
// Pixel Sheet End

// Daily Log
$('#log').sticky({topSpacing: 72});
// Daily Log End








		
          
            
          
        












	



// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//     output.innerHTML = this.value;
// }
