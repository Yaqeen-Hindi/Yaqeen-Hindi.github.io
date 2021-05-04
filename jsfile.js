function validateForm()
{
	 var x = document.forms["myForm"];
  var text = "";
  var i;
  for (i = 0; i < x.length-4 ;i++) 
  {
	  if(i==1||i==2||i==5||i==6||i==7)
	  {
         if(x.elements[i].value=="")
           {
			  x.elements[i].style.borderColor = "red";
              text += x.elements[i].name +"\n";
			  
           }
		   else
			 x.elements[i].style.borderColor = "";

	  }
  }
  if(text=="")
	 alert("Successfully completed \n");
else 
	alert("please enter value : "+"\n"+text);

return false;
}

function myFunction(x)
{
		x.style.borderColor="";

		 var y = document.forms["myForm"];
		 
		 var z;
         var i;
  for (i = 0; i < y.length-4 ;i++)
  {
     if(i==1||i==2||i==5||i==6||i==7)
	 {
		 if(y.elements[i].id==x.id)
		 {
			 if(y.elements[z].value=="")
			 {
				 x.style.borderColor="red";

				 alert("please enter "+" "+y.elements[z].name+"\n");
			 }
			else{
			 
			   y.elements[i].style.borderColor="";
			 
		     }

		 }
		 
		 z=i;
	 }
  }	  

}

function blurFunction(x) {
  if(x.value=="")
  {
   x.style.borderColor = "red";
   }
   else
      x.style.borderColor = "";

}
function  save1()
{
	var z = document.forms["myForm"];
	var x=  document.getElementById("email").value;
	var y="";
     if(z.elements[1].value!=""&&z.elements[2].value!=""&&z.elements[5].value!=""&&z.elements[6].value!=""&&z.elements[7].value!="")
	 {
		
     	for(var i=0;x[i]!="@";i++)
		y+=x[i];
	
	   alert('"The application of'+" "+y+" "+'is saved!"');
	
	 }
	 else
	 alert('"Save failed"');

	

	
}
function chekEmail()
{
	var x=  document.getElementById("email").value;
	
    if(x!="")
	{
		var i,j;
	for( i=0;x[i]!='@'&&i<x.length;i++);
	if(x[i]=='@')
	{
		
			for( i;x[i]!='.'&&i<x.length;i++);
		
            if(x[i]==".")
			{
				i++;
		      var w="com";
		     for( j=0;j<w.length&&i<x.length&&w[j]==x[i];j++,i++);
			  
		     if(w[j]!=x[i])
		     {
			   alert("Please enter a valid email forr example wwwww@gmail.com or wwwww@yahoo.com or....");
              document.getElementById("email").value=" ";

		      }
			}
			else
			{
				alert("Please enter a valid email for examplee wwwww@gmail.com or wwwww@yahoo.com or.... ");
              document.getElementById("email").value=" ";
			}
		
	}
	else
	{
		alert("Please enter a valid email for example wwwww@gmail.com or wwwww@yahoo.com or....");
            document.getElementById("email").value=" ";
	}
	
		
	}
	
}
 function newFunction()
 {
     document.getElementById("myForm").reset();
 }
 
 function chekdate() {
var d = new Date();
var n ="";
n+=d.getFullYear()+1;
n+="-";
if(d.getMonth()+1<10)
n+="0";
n+=d.getMonth()+1;
n+="-";
if(d.getUTCDate()<10)
n+="0";

n+=d.getUTCDate();
  var x = document.getElementById("birthday").max=n;
}
 
