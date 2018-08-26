// Daily Log
$('#logs').sticky({topSpacing: 72});

var logsArray = document.getElementsByClassName("card");

for (var i=0; i<logsArray.length; i+=1) {
	logsArray[i].addEventListener("mouseover", function(event) {   
    alert("xox");
	})
}

   

// Daily Log End

