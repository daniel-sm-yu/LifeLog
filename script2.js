// Daily Log
$('#logs').sticky({topSpacing: 25});

// $('#dailylog').hover(function() {
// 	var logHTML = '';
// 	console.log("ere");
// 	$('.logs').html(logHTML);
// });

var logsArray = document.getElementsByClassName("pixel")

for (var i=0; i<logsArray.length; i+=1) {
	 console.log("numofarrayitems");
	logsArray[i].addEventListener("mouseover", function( event ) {   
    console.log("xox");
	})
}

   

// Daily Log End

