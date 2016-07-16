$(document).ready(function(){
var box=400;
var pixel=40;
var color="blue";
var style="normal";
drawgrid(pixel);


function drawgrid(pix)
{
 var size=box/pix;
 var string="";
for(var i=0;i<pix;i++)
  string+="<div class=\"etch\"></div>";
for(var j=0;j<pix;j++)
$(string).appendTo('#main'); 
$("div .etch").css("width",size+"px");
$("div .etch").css("height",size+"px");
//$(".etch").css("border","1px solid red");
$(".etch").css("float","left");
inithover();
}

function inithover()
{
	if(style=="rainbow")
	{
		$(".etch").hover(function(){
           $(this).css("background-color",getRandomColor());
		});
	}
	else
	{
		$(".etch").hover(function(){
           $(this).css("background-color",color);
		});
	}	
}

$("#rainbow").click(function(){
clear();
 style="rainbow";
 var pixx=prompt("Enter pixel size b/w 1 to 128");
 if(pixx<1)
 	pixx=1;
 if(pixx>128)
 	pixx=128;
 drawgrid(pixx);
});

$("#normal").click(function(){
	clear();
 style="normal";
 var pixx=prompt("Enter pixel size b/w 1 to 128");
 if(pixx<1)
 	pixx=1;
 if(pixx>128)
 	pixx=128;
 drawgrid(pixx);
});

$(".blue").click(function(){
 color="blue";
 document.getElementById("picker").innerHTML=color +" color selected";
});

$(".black").click(function(){
 color="black";
 document.getElementById("picker").innerHTML=color +" color selected";
});

$(".yellow").click(function(){
 color="yellow";
 document.getElementById("picker").innerHTML=color +" color selected";
});

$(".red").click(function(){
 color="red";
 document.getElementById("picker").innerHTML=color +" color selected";
});

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function clear() {
		$('.etch').remove();
	};

});
