$(document).ready(function(){
 var result=[];
  var ans=0;
var flag=0;
var num='';
var oper=['/','*','+','-'];
var log=[];  
var temp;
/* 
function setFlag(){
  if(flag==1){
    flag=0;
  }else{
    flag=1;
  }
}*/
 function calc(){
  //result.toString();
  
  ans=eval(result.join(''));
 // ans.round(2);
ans = (Math.round( ans * 100 ) / 100).toFixed(2);
  ans=Number(ans);
  //ans = ans.toFixed(2);
  console.log(typeof ans);
  if(ans.toString().length>10){
	$(".output").find("p").html("data limit excedded");
    
  }else{
  log=[];
  log.push(ans);
  result=[];
  result.push(ans);
  //console.log(flag,result);
  flag=1;
  $(".output").find("p").html(result.join(''));
  $(".output").find("span").html(log.join(''));
  
  console.log(result);
  }
}
  
function update(){
  $(".output").find("p").html(result.join(''));
  $(".output").find("span").html(log.join(''));
  if(result.length===0&&log.length===0){
		$(".output").find("p").html(0);
        $(".output").find("span").html(0);
  }
   
}
  
$("button").click(function(){
  
  if(this.id=="="){ 
     calc();
    //$(".output").find("span").html(result.join(''));
	
    //setFlag();
  // update();  
  
  }else if(this.id=="AC"){
       result=[];
	   log=[];
       update(); 
  }else if(this.id=="CE"){   
    result.pop();
	log.pop();
	if(log.length==0){
		if(result.length>0){
			 $(".output").find("p").html(result.join(''));
 			 $(".output").find("span").html(temp);	
		}else{
			update();
		}
	}else{
		update();
	}
  }else if(oper.indexOf(result[result.length-1])>0&&oper.indexOf(this.id)>=0){
    $(".output").find("p").html("Error");
          
  }else if(result.length==0){
     if(oper.indexOf(this.id)>=0){
        $(".output").find("span").html(0);
    }else{
     // result.push(this.id);
	 // log.push(this.id);
	  num=num.concat(this.id);	
		$(".output").find("span").html(num);	
		$(".output").find("p").html(num);
		
	  //$(".output").find("span").html(result.join(''));         
      //update();
    }
    
  }else if(flag===1&&oper.indexOf(this.id)<0&&result.length==1){
      result=[];
	  log=[];
      //setFlag();
      flag=0;
      result.push(this.id);
	  log.push(this.id);
      update(); 
 }else{
    //result.push(this.id);
	if(oper.indexOf(this.id)>=0){
		log.push(num);
		num='';
		result.push(num);
		//temp=log.join('');
		//log=[];
		log.push(this.id);
		update();
		result.push(this.id);
	
		log=[];
		
	}else{
		/*
		if(num.length>=10){
		$(".output").find("p").html("Data limit excedded");
		}else{
			var temp=this.id.toString();
			num.concat(temp);	
			$(".output").find("span").html(num);	
			$(".output").find("p").html(num);		
		}	 
		
		
		
		num.concat(this.id);	
		$(".output").find("span").html(num);	
		$(".output").find("p").html(num);
		*/
		if(num.length>=10){
			$(".output").find("p").html("Data limit excedded");
//			result.push(this.id);
	
		}else{
		log.push(this.id);
		//$(".output").find("span").html(result.join(''));	
		num=num.concat(this.id);	
		$(".output").find("span").html(num);	
		$(".output").find("p").html(num);
		
		console.log(typeof num);
		
		//result[result.length].concat(this.id);
	
		//update();
		
		}
		
	}
    //update();
	
  }
    
    
    
  
});

});