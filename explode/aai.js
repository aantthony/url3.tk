var that=(function(){
	var ctx;
	var width;
	var height;
	var canvas;
	var px=[];
	var py=[];
	var vx=[];
	var vy=[];
	var lx=[];
	var ly=[];
	var t=[];
	var pc=1000;
    
    
    var opensockets=0;
function ajax(x,y,callback){
	opensockets++;
	var http;
	if(window.XMLHttpRequest){http=new XMLHttpRequest();}
		else{http=new ActiveXObject("Microsoft.XMLHTTP"); }
	http.onreadystatechange=function(){
		if(http.readyState==4){
			opensockets--;
			var obj;
			if(window.JSON){
				obj=JSON.parse(http.responseText);
			}else{
				obj=eval("("+http.responseText+")");
			}
			if(callback){callback(obj);}
		}
	};
	http.open("POST","?a",true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send("x="+x+"&y="+y);
}
    var cd=document.getElementById("c");
    var cvalue=~~cd.childNodes[0].nodeValue;
    var rvalue=cvalue;
    function step(){
        cvalue+=0.3*(rvalue-cvalue);
        cd.childNodes[0].nodeValue=Math.round(cvalue);
        setTimeout(step,100);
    }
    var topush=0;
    function inc(n){
    if(n>rvalue){ 
        rvalue=n;
    }
    }
	var free=[];
	var themes=[["#ff0000","#ff6000","#ff9c00","#ffde00","#fffae3","#ffc257"],["#33cccc","#9bf2ff","#6ec0e6","#3075b6","#99c2eb","#bfe9ff"],["#efffbf","#e6ffbf","#71bf25","#48ff00","#78d47c","#81dcd4"],["#f0f","#c0c","#a0c","#a04","#209","#ca0"],["#bbffab","#ffffdc","#ffe7dc","#dcf7ff","#dabbf7","#f5bbf7"],["#8b37a6","#7d021f","#3a99bc","#d4ffb2","#ff5a00","#ffffff"]];
	var c=[];
    for(var i=0;i!=pc;i++){
        free[i]=1;    
    }
    function net_loop(){
    
        ajax(topush,topush^(1+13*~~(secure+Math.random()*1000)),inc);
        topush=0;
        setTimeout(net_loop,3000);
    }
    var secure="Don't hack this unless you really have nothing better to do.".length
	function gameinit(x,y){
    
		var colors=themes[~~(Math.random()*themes.length)];
        var nc=0;
		for(var i=0;i!=pc;i++){
			if(free[i]==1 || free[i]==undefined){
            
			nc++;
            
			c[i]=colors[i%colors.length];
			px[i]=lx[i]=x;
			py[i]=ly[i]=y;
			var theta=Math.random()*Math.PI*2;
			var mag=(Math.random()*34)+1;
			vx[i]=mag*Math.sin(theta);
			vy[i]=mag*Math.cos(theta);
			t[i]=1;
            
			if(x==y & !x){
				vx[i]=vy[i]=-20;
			}
		}
			free[i]=0;
		}
        if(x==y & !x){
				nc=0;
        }
        topush+=nc;
        rvalue+=nc;
	}
	function keydown(e){
		return;
		var assigned=keymap[e.keyCode];
		if(assigned!=undefined){
			keys[assigned]=1;
		}
	}
	function keyup(e){
		return;
		var assigned=keymap[e.keyCode];
		if(assigned!=undefined){
			keys[assigned]=0;
		}
	}
	
	function draw(once){
		
		ctx.clearRect(0,0,width,height);	
        
            ctx.lineWidth=0.5;
                	
		for(var i=0;i<pc;i++){
            if(!lx[i]){
                lx[i]=px[i];
                ly[i]=py[i];
            }
			if(!free[i]){
			
			vy[i]+=2;
				if(px[i]<0 || px[i]>width){
					free[i]=1;
				}
				if(py[i]<0 || py[i]>height){
					free[i]=1;
				}
				t[i]+=0.1;
			//ctx.lineWidth=1/(t[i]);
			ctx.strokeStyle=c[i];
			py[i]+=vy[i];
			px[i]+=vx[i];
			ctx.beginPath();
			ctx.moveTo(lx[i],ly[i]);
			ctx.lineTo(px[i],py[i]);
			ctx.stroke();
			
			lx[i]=px[i];
			ly[i]=py[i];
		}
		}
		
		
		if(!once){
			setTimeout(draw,0,false);
            
		}
	}
    var first=true;
	function init(){
		window.onresize=function(){
			canvas.width=width=window.innerWidth;
			canvas.height=height=window.innerHeight;
			draw(true);
		}
		window.onkeydown=keydown;
		window.onkeyup=keyup;
		canvas.width=width=window.innerWidth;
		canvas.height=height=window.innerHeight;
		window.onmousedown=function(e){
            if(first){
                document.getElementById("info").style.display="none";
                first=false;
            }
			gameinit(e.x || e.clientX,e.y || e.clientY);
		}
		gameinit(0,0);
        step();
        //net_loop();
		draw(false);
	}
	var that = {
		"ver":1,
        "debug":function(){return [px,py];},
		"init":function(c){
			canvas=c;
			if(canvas.getContext){
				width=canvas.width;
				height=canvas.height;
				canvas.style.background="#000";
				ctx=canvas.getContext("2d");
				init();
			}else{
				return alert("Not supported in lame browsers!");
			}
		}
	};
	
	return that;
})();

that.init(document.getElementById("canvas"));