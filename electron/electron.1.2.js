
var electron = (function (){
var that = {};


var c=document.createElement("canvas");
c.onmousedown=function(){click=true};

c.style.position="absolute";
c.style.top=0;
c.style.left=0;
document.body.style.webkitUserSelect="none";
document.body.style.MozUserSelect="none";
document.body.style.userSelect="none";

document.body.style.khtmlUserSelect="none";

c.id="c";
c.width=window.innerWidth;
c.height=window.innerHeight;
c.style.cursor="crosshair";
c.appendChild(document.createTextNode("You browser does not support the html5 canvas tag"));
document.body.appendChild(c);
document.body.style.margin="0px";
document.body.style.padding="0px";//right to the edges
document.body.style.overflow="hidden";//no scrollbars

var ready=false;
var width;
var height;
var draw;
var mx=0.5;//mouse x and mouse y
var my=0.5;
var lmx=mx;
var lmy=my;
var ctx;
window.onresize=function()
{
    c.width=window.innerWidth;
    c.height=window.innerHeight;
    width=c.width;
    height=c.height;wchanged=true;
    if(draw&&ready){draw();}
}

window.onresize();//make sure it begins at the right size
if(c.getContext) {ctx=c.getContext("2d");}
else
{

if(G_vmlCanvasManager)
{
G_vmlCanvasManager.initElement(c);
if(c.getContext) {ctx=c.getContext("2d");}


}

}

document.body.onmousemove=function(e){

mx=(e.x===undefined?e.clientX:e.x)/width;
my=(e.x===undefined?e.clientY:e.y)/width;
}

var buffer=[];
var bufferlen=100;
var rt2=Math.sqrt(2);
var c_s=1/bufferlen;//very slow
var b=0;
for(var i=0;i<bufferlen;i++){buffer.push([0.5,0.5]);}
that.ftl=false;
var ftl=false;
that.stop=function(){running=false;};
that.start=function(){running=true;};
that.pause=function(){running=!running;};
var t=0;
var isosc=0;
var firefox=/[Ff]irefox/.test(navigator.userAgent);
firefox=true;//DEBUG
var first=true;
function ctxlineTo(a,b){
if(!firefox){
return ctx.lineTo(a,b);
}
if(!isNaN(a)){
    if(!isNaN(b)){
        if(a!=Infinity){
            if(b!=Infinity){
                if(first){
                    ctx.moveTo(a,b);
                }
                else {
                    ctx.lineTo(a,b);
                }
                first=false;
            }
        }
    }
}

}
var running=true;
function draw(repeat){
	isosc=that.osc;
	ftl=that.ftl;
    var cx=lmx;
    var cy=lmy;
    if(running){
    
    
	b++;
	if(b>=bufferlen){
		b=0;
	}
	
	cx=mx;
	cy=my;
    
    if(isosc==1){
		cx=0.5;
		cy=(height/width/2)+3*c_s*Math.sin(t+=0.2);
	}
	else if(isosc==2){
		cx=0.5+3*c_s*Math.cos(t+=0.2);
		cy=(height/width/2)+3*c_s*Math.sin(t);
	}
	else if(isosc==3){
		cx=0.5;
		t+=0.01;
		cy=(height/width/2)+0.4*(Math.abs(t-~~(t+0.5))-0.25);
	}
    
    
	}
	
	if(!ftl){
	var speed=(cx-lmx)*(cx-lmx)+(cy-lmy)*(cy-lmy);
	if(speed>c_s*c_s){
		var theta=Math.atan2(cy-lmy,cx-lmx);
		cx=lmx+c_s*Math.cos(theta);
		cy=lmy+c_s*Math.sin(theta);
	}
	}
	buffer[b]=[cx,cy];
	lmx=cx;
	lmy=cy;
	ctx.scale(width,width);
	ctx.lineWidth=0.001;
	ctx.clearRect(0,0,width,height);
	
	
	ctx.strokeStyle="black";
	ctx.beginPath();first=true;
	//ctx.moveTo(0,0.5);
	for(var x=-0.99;x<1;x+=0.01){
		var timedelay=~~(Math.abs(x)/c_s);
		//timedelay=0;
		var index=(bufferlen+bufferlen+b-timedelay)%bufferlen;
        if(index>0 && index<bufferlen){
		ctxlineTo(x+buffer[index][0],buffer[index][1]);}
	}
	//ctxlineTo(1,buffer[index][1]);
	ctx.stroke();
	
	ctx.beginPath();first=true;
	//ctx.moveTo(0.5,0);
	for(var y=-0.99;y<1;y+=0.01){
		var timedelay=~~(Math.abs(y)/c_s);
		//timedelay=0;
		var index=(bufferlen+bufferlen+b-timedelay)%bufferlen;
        if(index>0 && index<bufferlen){
		ctxlineTo(buffer[index][0],y+buffer[index][1]);}
	}
	//ctxlineTo(buffer[index][0],1.0);
	ctx.stroke();
	
    
	ctx.beginPath();first=true;
	
	//ctx.moveTo(0,0);
	for(var y=-rt2/2+0.01;y<rt2/2;y+=0.01*rt2/2){
		var dist=rt2*(y);
		var timedelay=~~(Math.abs(dist)/c_s);
		//timedelay=0;
		var index=(bufferlen+bufferlen+b-timedelay)%bufferlen;
		if(index<bufferlen && index>0){
		ctxlineTo(y+buffer[index][0],y+buffer[index][1]);
		}
	}
	//ctxlineTo(buffer[index][0]+0.5,1.0);
	ctx.stroke();
	
    ctx.beginPath();first=true;
    for(var y=-rt2/2+0.01;y<rt2/2;y+=0.01*rt2/2){
		var dist=rt2*(y);
		var timedelay=~~(Math.abs(dist)/c_s);
		//timedelay=0;
		var index=(bufferlen+bufferlen+b-timedelay)%bufferlen;
		if(index<bufferlen && index>0){
		ctxlineTo(y+buffer[index][0],-y+buffer[index][1]);
		}
	}
	//ctxlineTo(buffer[index][0]+0.5,0.0);
	ctx.stroke();
	
	
	
	ctx.fillStyle="#07c";
	
	
	ctx.beginPath();
    if(!isNaN(cx)){
        if(!isNaN(cy)){
	ctx.arc(cx, cy, 0.01, 0, Math.PI*2, true); 
    }
    }
	ctx.closePath();
	ctx.fill();
	
	
	
	
	
	
	ctx.scale(1/width,1/width);
	if(repeat===true){
		setTimeout(function(){draw(true);},0);
	}
}

ready=true;
draw(true);
return that;

})();
document.body.onkeydown=function(e){
if(e.which===32){electron.pause();}

}
