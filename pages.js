function pages(n){
document.body.onload=function(){
	setTimeout(function(){
		var faders=document.getElementsByClassName("fade");
for(i=0;i<faders.length;i++){
	faders[i].style.top="0px";
	faders[i].style.opacity=1.0;
}
},2500);
var width=window.innerWidth;
var height=window.innerHeight;
var pages_elem=document.getElementById("pages");

var data=[];
for(i=0;i<n;i++){
	pages_elem.appendChild(document.createElement("div"));
    data.push({"filename":"Unknown",size:0});
}

var pages=document.getElementById("pages").childNodes;
var did=undefined;
var filename=document.getElementById("filename");
var filesize=document.getElementById("filesize");
for(i=0;i<pages.length;i++){
	pages[i].x=100+(Math.random()*(width-200));
	pages[i].y=Math.random()*500-500-120;
	pages[i].r=Math.random()*360;
	pages[i].vy=0.2;
	pages[i].num=i;
	pages[i].onmousedown=function(e){
    
		did=e.target.num;
        filename.firstChild.nodeValue=data[did].filename;
        filesize.firstChild.nodeValue=data[did].size;
        //info.style.opacity=1.0;
	};
}
document.body.onmousemove=function(e){
	
	if(did!=undefined){
		pages[did].x=e.x-64;
		pages[did].y=e.y-64;
	}
};
var info=document.getElementById("info");
document.body.onmouseup=function(){
	did=undefined;
    info.style.opacity=0;
};
var interval=0;
if(/webkit/i.test(navigator.userAgent)){
    interval=100;
}
function animate(){
	var i;
	for(i=0;i<pages.length;i++){
		var t=new Date()-0;
		//var r=360*Math.sin(1+Math.sin(i+1)*0.0001*t-i);
		
		
		
		
		if(pages[i].y>height-120 || pages[i].num==did){
			pages[i].vy*=0.01;
			pages[i].g=0;
		}else{
			pages[i].vy+=5;
			pages[i].x+=6*Math.sin(0.001*t+i*8/(i*i+1));
			pages[i].r+=Math.cos(Math.sin(i+1)*t*0.0001*Math.sin(i+1)*0.0001);
		}
		pages[i].y+=pages[i].vy;
		pages[i].style.webkitTransform="translate("+pages[i].x+"px,"+pages[i].y+"px) rotate("+pages[i].r+"deg) ";
	}
    
	setTimeout(animate,interval);
}
animate();
};}