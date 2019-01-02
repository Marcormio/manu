//CREA DAG
document.getElementById("crea").addEventListener("click", function(){
    document.getElementById("crea").innerHTML = "Hello World";
}); 

//OPEN FILE and parse to JSON
document.getElementById('file').onchange = function(){
	
	var file = this.files[0];

	var reader = new FileReader();
	reader.onload = function(progressEvent){
  		var vertici = []
  		var archi = []
    	// Entire file
    	console.log(this.result);

    	// By lines
    	var lines = this.result.split('\n');
    	for(var line = 2; line < lines.length-3; line++){
    		console.log(lines[line]);
    		var str = lines[line];
			var patt1 = /([0-9]|[A-Z])\w*/g;
  			var result = str.match(patt1);
  			vertici.push(result[0])
  			vertici.push(result[1])
    	}
    	console.log(vertici)
  	};
	reader.readAsText(file);
};
