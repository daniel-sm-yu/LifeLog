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

for (var i=0; i<62; i+=1) {
	var date = i + 1;
	var emotion = Math.floor(Math.random()*8) + 1;
	var rating = Math.floor(Math.random()*10) + 1;
	var high = Math.floor(Math.random()*6) + 1;
	var low = Math.floor(Math.random()*6) + 1;
	
	pixelSheet[i] = new pixel(date, emotion, rating, high, low);
}

























	



// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//     output.innerHTML = this.value;
// }
