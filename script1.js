var quotes=[
			"aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa.",
	    	"bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb.",
	    	"ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc.",
	    	"ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd.",
	    	"eee eee eee eee eee eee eee eee eee eee eee eee eee eee eee eee",

	];
  var randomNumber = Math.floor(Math.random()*(quotes.length));
	function newQuote() {
	  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  }

  function redFunc(){
		document.getElementById("quoteDisplay").style.color = "yellow";
		document.getElementById("quoteDisplay").style.backgroundColor = "red";
        document.getElementById("quoteDisplay").style.borderColor = "blue";
	}
	
	function greenFunc(){
		document.getElementById("quoteDisplay").style.color = "black";
        document.getElementById("quoteDisplay").style.backgroundColor = "green";
        document.getElementById("quoteDisplay").style.borderColor = "red";
	}
	function blueFunc(){
		document.getElementById("quoteDisplay").style.color = "yellow";
        document.getElementById("quoteDisplay").style.backgroundColor = "blue";
        document.getElementById("quoteDisplay").style.borderColor = "black";
	}
	function yellowFunc(){
		document.getElementById("quoteDisplay").style.color = "red";
        document.getElementById("quoteDisplay").style.backgroundColor = "yellow";
        document.getElementById("quoteDisplay").style.borderColor = "green";
	}
 
 function myFunction() {
    var x = document.getElementById("myForm").value;
    var y = parseInt(x);
    
    var b = 0;
    var a = document.getElementById("dropdown").value;
    if(a == "2")
    	b = y*2.2046;
    else
    	b = y/2.2046;
	
	b = parseFloat(Math.round(b * 100) / 100).toFixed(3);
    if(a === "2")
   document.getElementById("result").innerHTML = b+" pounds";
   else if(a === "3")
   document.getElementById("result").innerHTML = b+" kilograms";
   
}


function seriesFunction() {
				var str = document.getElementById("series_p").value;
				var res = str.split(",");
				for(var i = 0; i < res.length; i++)
					res[i] = parseInt(res[i]);
			   var max = res[0], min = res[0], avg = 0, sum = 0, rev = "";
			   for(var i = 0; i < res.length; i++)
			   {
					if(res[i] > max)
						max = res[i];
					if(res[i] < min)
						min = res[i];
					sum+=parseInt(res[i]);
			   }
			   avg = sum/res.length;
			   avg = avg.toFixed(3);
			   for(var i = res.length-1; i >= 0; i--)
			   {
					if(i > 0)
						rev+=res[i]+", ";
					else
						rev+=res[i];
			   }
				document.getElementById("max").innerHTML = "Max: "+max;
				document.getElementById("min").innerHTML = "Min: "+min;
				document.getElementById("sum").innerHTML = "Sum: "+sum;
				document.getElementById("average").innerHTML = "Average: "+avg;
				document.getElementById("reverse").innerHTML = "Reverse Order : "+rev;
}

function eraseText() {
			document.getElementById("output").value = "";
	}
	
function capitalize()   {
		if (document.getElementById("cap").value=="Capitalize"){
				var upperstring=document.getElementById('output').value.toUpperCase();
				document.getElementById('output').value=upperstring;
				document.getElementById("cap").value="Lowercase";
			}
			else{
				var lowerstring=document.getElementById('output').value.toLowerCase();
				document.getElementById('output').value=lowerstring;
				document.getElementById("cap").value="Capitalize";
			}
}

function sortArray(){
	var array=(document.getElementById("output").value).split("\n");
	array.sort();
	array = array.filter(el => el.trim());
	document.getElementById('output').value=array.join("\n");
}

function reverseArray(){
	var array=(document.getElementById("output").value).split("\n");
	var newarray=[];

	for(i=0;i<array.length;i++){
		var line=array[i].split("");
		newarray.push(line.reverse().join("").toString());
	}
	document.getElementById('output').value=newarray.join("\n");
}

function stripBlank(){
	var array=(document.getElementById("output").value).split("\n");
	array = array.filter(el => el.trim());
	for(var i = 0; i < array.length; i++)
    {
		array[i] = array[i].trim();
    }
	document.getElementById('output').value=array.join("\n");
}

function addNumbers(){
	var array=(document.getElementById("output").value).split("\n");
	var newarray=[];
	for(i=0;i<array.length;i++){
		var line=array[i].split(" ");
		line.unshift(Math.floor(i + 1));
		newarray.push(line.join(" ").toString());
	}
	document.getElementById('output').value=newarray.join("\n");
}

function shuffle(){
	var array=(document.getElementById("output").value).split("\n");
	for(i=array.length-1;i>0;i--){
		var j=Math.floor(Math.random()*(i+1));
		var temp=array[i];
		array[i]=array[j];
		array[j]=temp;
	}
	document.getElementById('output').value=array.join("\n");
}