
$(document).ready(function(){
	/*$("img").click(function(){
		console.log(this.src);
	});*/
	var max=10;
	var start=0;
	var end=4;	
	for(var i=0;i<5;i++){
		var temp=i.toString();
		document.getElementById(temp).src="images/"+temp+".jpg";
	}
	$("#next").click(function(){
		
		if(start<7){
			start++;
			var t=start;
			for(var i=0;i<5;i++){
				var temp=i.toString();
				var temp2=t.toString();
				document.getElementById(temp).src="images/"+temp2+".jpg";
				t++;	
			}
			t=start+2;
			t=t.toString();
			document.getElementById("main").src="images/"+t+".jpg";
		}
	});
	$("#prev").click(function(){
		if(start>0){
			start--;
			var t=start;
			for(var i=0;i<5;i++){
				var temp=i.toString();
				var temp2=t.toString();
				document.getElementById(temp).src="images/"+temp2+".jpg";
				t++;	
			}
			
			t=start+2;
			t=t.toString();
			document.getElementById("main").src="images/"+t+".jpg";
		}
	});
});