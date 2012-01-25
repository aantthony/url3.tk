


Array.prototype.transpose = function() {
 
  // Calculate the width and height of the Array
  var a = this,
    w = a.length ? a.length : 0,
    h = a[0] instanceof Array ? a[0].length : 0;
 
  // In case it is a zero matrix, no transpose routine needed.
  if(h === 0 || w === 0) { return []; }
 
  /**
   * @var {Number} i Counter
   * @var {Number} j Counter
   * @var {Array} t Transposed data is stored in this array.
   */
  var i, j, t = [];
 
  // Loop through every item in the outer array (height)
  for(i=0; i<h; i++) {
 
    // Insert a new row (array)
    t[i] = [];
 
    // Loop through every item per item in outer array (width)
    for(j=0; j<w; j++) {
 
      // Save transposed data.
      t[i][j] = a[j][i];
    }
  }
 
  return t;
};


var sin=Math.sin;
var cos=Math.cos;

var ex=[];
var Npre=512;
for(var k=0;k<Npre/2;k++){
    ex.push([cos(2*Math.PI*k/Npre),sin(2*Math.PI*k/Npre)]);
}
function ditfft2(X,N,s,dir,offset){
    if(N==1){
        return [X[offset]];
    }else
    {
        var Y =ditfft2(X,N>>1,s<<1,dir,offset);
        var Y2=ditfft2(X,N>>1,s<<1,dir,offset+s);
        for(var k=0;k<N>>1;k++){
            z=ex[Npre*k/N];
            var tr=z[0]*Y2[k][0]-dir*z[1]*Y2[k][1];
            var ti=z[0]*Y2[k][1]+dir*z[1]*Y2[k][0];
            Y2[k]=[Y[k][0]-tr,Y[k][1]-ti];
            Y[k]= [Y[k][0]+tr,Y[k][1]+ti];
        }
        return Y.concat(Y2);
    }

}


function getimagedata(inputimage) {

 var z =inputimage.data;    var i=0;
 var all=[];
 var d = [];for(var x=0;x<inputimage.width;x++){ var row=[];  for(var y=0;y<inputimage.height;y++){    row.push([   z[i++]      ,0]);       }   d.push(row);    }
 all.push(d);
 i=1;
 d = [];for(var x=0;x<inputimage.width;x++){ var row=[];  for(var x=0;x<inputimage.width;x++){    row.push([   z[i++]      ,0]);       }   d.push(row);    }
  all.push(d);
  i=2;
 d = [];for(var x=0;x<inputimage.width;x++){ var row=[];  for(var y=0;y<inputimage.height;y++){    row.push([   z[i++]      ,0]);       }   d.push(row);    }
  all.push(d);
  return all;
}

function makeimagedata(all,M,N) { var img=[];var i=0;  for(var x=0;x<M;x++){ for(var y=0;y<N;y++){    img.push( Math.sqrt( all[0][x][y][0]*all[0][x][y][0]+ all[0][x][y][1]*all[0][x][y][1] )   );  img.push( Math.sqrt(all[1][x][y][0]*all[1][x][y][0]+ all[1][x][y][1]*all[1][x][y][1]  ));img.push( Math.sqrt(all[1][x][y][0]*all[1][x][y][0]+ all[1][x][y][1]*all[1][x][y][1] ) );   img.push(255);     }       }return img; }



function fft(direction,f,N){
    if(N==undefined){
        N=f.length;
    }
    var unnormalised=ditfft2(f,N,1,direction,0);

    if(direction==1){
        for(var k=0;k<N;k++){
              unnormalised[k][0] /=N;
              unnormalised[k][1] /=N;
        }
    }
        
    return unnormalised;

}
function fft2d(dir,f,N,M){
    //FFT on every row
    
    if(N==undefined){
        N=f.length;
        if(M==undefined){
            M=f[0].length;
        }
    }
    for(var n=0;n<N;n++){
        f[n]=fft(dir,f[n],M);
    }
    //transpose
    f=f.transpose();
    for(var n=0;n<N;n++){
        f[n]=fft(dir,f[n],N);
    }
    return f;
}


function ffft(direction,N,f){
    var F=[];
    var E=[];
    var O=[];
    
    E=sub_dft(direction,N,f,2,0);
    O=sub_dft(direction,N,f,2,1);
    for(var k=0;k<N/2;k++){
        var x=cos(2*Math.PI*k/N);
        var y=-sin(2*Math.PI*k/N);
        //O = p + q.i
        //z = (x+yi)(p+q.i)
        //  = x.p + x.q.i + y.i.p - y.q
        //  = x.p - y.q +i(x.q + y.p)
        F.push([E[k][0]+x*O[k][0]-y*O[k][1],E[k][1]+x*O[k][1]+y*O[k][0]]);
    }
    for(var k=N/2;k<N;k++){
        var sk =k-N/2;
        var x=cos(2*Math.PI*sk/N);
        var y=-sin(2*Math.PI*sk/N);
    
        F.push([E[sk][0]-x*O[sk][0]+y*O[sk][1],E[sk][1]-x*O[sk][1]-y*O[sk][0]]);
    }

    return F;
}

function sub_dft(direction,N,f,nth,offset){
    var F=[];
    for(var k=0;k<N;k++){
        var re=0;
        var im=0;
        for(var n=offset;n<N;n+=nth){
        
            var theta=(2*Math.PI*k*n/N);
            var p=cos(theta);
            var q=direction*sin(theta);
            
            re+=f[n][0]*p-f[n][1]*q;
            im+=f[n][0]*q+f[n][1]*p;
            
        }
        if(direction==1){
            re/=N;
            im/=N;
        }
        F.push([re,im]);
    }
    return F;
}



function dft(direction,N,f){
    var F=[];
    for(var k=0;k<N;k++){
        var re=0;
        var im=0;
        for(var n=0;n<N;n++){
        
            var theta=(2*Math.PI*k*n/N);
            var p=cos(theta);
            var q=direction*sin(theta);
            
            re+=f[n][0]*p-f[n][1]*q;
            im+=f[n][0]*q+f[n][1]*p;
            
        }
        if(direction==1){
            re/=N;
            im/=N;
        }
        F.push([re,im]);
    }
    return F;
}



function importgaussian(){
that.load(function(x,N){return 0.8*Math.exp(-Math.pow(x-0/2,2)*Math.PI/N)+0.8*Math.exp(-Math.pow(x-N,2)*Math.PI/N);})
}
function importsine(){
that.load(function(x,N){return sin(2*Math.PI*x/N);})
}
function importbox(){
that.load(function(x,N){ return ((Math.abs(x)>N/16)?0:0.4)+ ((Math.abs(N-x)>N/16)?0:0.4);   });
}
function importinterference(){
that.load(function(x,N){ return ((x>N/16 || x<N/32)?0:0.8) + (((N-x)>N/16 || (N-x)<N/32)?0:0.8);   });
}
function importdelta(){
that.load(function(x){return x==0; });
}
function importshah(){
that.load(function(x,N){return 0.8*(x%(N/16)==0); });
}
function square(letter){
that.transform(letter,function (a,N){
    for(var i=0;i<N;i++){
        // z = (x+yi)(x+yi)
        //   = x.x + 2x.y.i - y.y
        //   = x.x - y.y + i(2.x.y)
        a[i]=[a[i][0]*a[i][0]-a[i][1]*a[i][1],2*a[i][0]*a[i][1]];
    }
return a;
});

}
function integrate(letter){
that.transform(letter,function (z,N){
    for(var i=0;i<N;i++){
    var j=i;
    //z=(x+yi)/(k.i) *(0-k.i)/(0-k.i)
    //z = (x+yi)(-k.i)/(  k*k   )
    //z = (-x.k.i - y.k)/(k*k)
    //z = (-x.i/k - y/k)
    //z = -y/k + i(-x/k)
    //z = y/k + i(x/j)
    if(j==0){
        z[i]=[0,0];
    }else{
    
    z[i]=[z[i][1]/j,-z[i][0]/j];
    }
        
    }
return z;
});


}
function diff(letter){
that.transform(letter,function (z,N){
    for(var i=0;i<N;i++){
    var y=i;
        z[i]=[-y*z[i][1],y*z[i][0]];
    }
return z;
});


}
function scaleq(letter){
var x =prompt("Scale by");
if(!x){return;}
var y=0;
scale(letter,[x,y]);}
function scale(letter,z){
that.transform(letter,function (a,N){
    for(var i=0;i<N;i++){
    // = (x+y.i)(p+q.i))
    // = x.p + x.q.i + y.i.p - y.q
    // = x.p - y.q + i(x.q + y.p)
        a[i]=[z[0]*a[i][0]-z[1]*a[i][1],z[0]*a[i][1]+z[1]*a[i][0]];
    }
return a;
});

}
function reciprocal(letter){
that.transform(letter,function (a,N){
    for(var i=0;i<N;i++){
    
    // z = 1/(x+yi) . (x-yi)/(x-yi)
    // z = (x-yi)/( (x+yi)(x-yi)  )
    // z = (x-yi)/(x*x +y*y)
    
    if(a[i][0]*a[i][0]+a[i][1]*a[i][1]==0){a[i][0]=0.001;}
    var mag=a[i][0]*a[i][0]+a[i][1]*a[i][1];
    
    a[i][0]=a[i][0]/mag;
    a[i][1]=-a[i][1]/mag;
    
    }
return a;
});

}

function clean(letter){
that.transform(letter,function (a,N){
    max=0.2;
    if(letter=="b"){max=N/16;};
    for(var i=0;i<N;i++){
        if(Math.abs(a[i][0])<max){a[i][0]=0;}
        if(Math.abs(a[i][1])<max){a[i][1]=0;}
    }
return a;
});

}
function importcustom(){
var str=prompt("function(x,N) = ");
if(!str){return;}
var fn=eval("(function(x,N){with(Math){return ((("+str+")))}})");
that.load(fn);
}
var that=(function(){
var that={"ver":1,"a":function(){return a;},"b":function(){return b;}
,

"fft":function(){return fft;},
"test":function(){

//function getimagedata(inputimage) 
//function makeimagedata(dr,dg,db) 

var imgd = ctx1.getImageData(0, 0, 128, 128);
var spatial=getimagedata(imgd);
//spatial=fft2d(-1,spatial);
var z = makeimagedata(spatial,spatial,spatial,imgd.width,imgd.height);

var pix = imgd.data;
for (var i = 0, n = pix.length; i < n; i += 4) {
    pix[i  ] = z[i  ];
    pix[i+1] = z[i+1];
    pix[i+2] = z[i+2];
    pix[i+3]=255;
}
ctx1.putImageData(imgd, 128, 0);



},
"getbmax":function(){return getbmax;},
"load":function(x,y){
    if(y===undefined){
        y=function(){return 0;}
    }
    if(x===undefined){
        x=function(){return 0;}
    }
    for(var i=0;i<N;i++){
        a[i][0]=x(i,N);
        a[i][1]=y(i,N);
    }
    
    b=fft(-1,a,N);
    getbmax();
    ca=cb=true;

},
"transform":function(letter,x){
    if(x===undefined){
        x=function(){return [0,0];}
    }
    if(letter=="a"){
    a=x(a,N);
    b=fft(-1,a,N);
    }else{
    b=x(b,N);
    a=fft(1,b,N);
    }
    getamax();
    getbmax();
    ca=cb=true;

},
"pass":function (letter,passmode){
band=passmode;
cb=true;
},"canvas":function(){return [ctx1,ctx2];}
,"stopselect":function(cancel){
if(band!==undefined){

 var freqmode=false;
         var dx=ax-ox;
        var dy=ay-oy;
        var start,end;
        if(Math.abs(dy)>Math.abs(dx)){
        
        start=oy;
        end=ay;
        
        if(start<end){var tend=end;end=start;start=tend;}
        }else{
        freqmode=true;
        start=ox;
        end=ax;
        
        if(start>end){var tend=end;end=start;start=tend;}
        }
        var letter="b";
        if(clicka){letter="a";}
        if(!freqmode){
        
           var min=(-2.0*start/height+1.0)*371.2*bmax/height;
           var max=(-2.0*end/height+1.0)*371.2*bmax/height;
           if(clicka){
            min=(-2.0*start/height+1.0);
            max=(-2.0*end/height+1.0);
           }
          if(band==1){
that.transform(letter,function (z,N){

    for(var i=0;i<N;i++){
        if(z[i][0]>max){z[i][0]=max;}
        if(z[i][0]<min){z[i][0]=min;}
        if(z[i][1]>max){z[i][1]=max;}
        if(z[i][1]<min){z[i][1]=min;}
        
    }
return z;
});}else{
that.transform(letter,function (z,N){

    for(var i=0;i<N;i++){
        if(z[i][0]<max){
            if(z[i][0]>min){
                z[i][0]=0;
            }
        }
         if(z[i][1]<max){
            if(z[i][1]>min){
                z[i][1]=0;
            }
        }
        
        
    }
return z;
});}


           
        }else{
        var min=~~(start*N/width);
        var max=~~(end*N/width);
        
        if(band==2){
that.transform(letter,function (z,N){

    for(var i=min;i<max;i++){
    z[(i+N/2)%N]=[0,0];
    }
return z;
});

}else{
that.transform(letter,function (z,N){

    for(var i=0;i<min;i++){
    z[(i+N/2)%N]=[0,0];
    }
    for(var i=max;i<N;i++){
    z[(i+N/2)%N]=[0,0];
    }
return z;
});

}
           
        }
        

band=undefined;ca=cb=true;


}
}

};
var click=false;
var band=undefined;
var canvas1=document.getElementById("canvas1");
var canvas2=document.getElementById("canvas2");
document.body.style.background="black url(bg.png)";
var ax,ay,bx,by;
ax=ay=bx=by=undefined;
var width=canvas1.width;
var height=canvas1.height;
var ctx1,ctx2;
if(canvas1.getContext) {ctx1=canvas1.getContext("2d");ctx2=canvas2.getContext("2d");}
else
{
if(G_vmlCanvasManager)
{
G_vmlCanvasManager.initElement(canvas1);
G_vmlCanvasManager.initElement(canvas2);
if(canvas1.getContext) {ctx=canvas1.getContext("2d");}
if(canvas2.getContext) {ctx=canvas2.getContext("2d");}
}
}

var clicka=false;
var clickb=false;
function movemouse(e,s,imag,scale,xshift){
var nax=e.layerX;
if(imag){imag=1;}else{imag=0;}
	var nay=(-2.0*e.layerY/height+1.0)*scale;//1.45*N*bmax/height
    var iv;
    var iu=~~(nax*N/width);
    if(ax===undefined){
        iv=iu;
    }else{
        iv=~~(ax*N/width);
    }
    var r=false;
    if(iv>iu){
        var tempiv=iv;
        iv=iu;
        iu=tempiv;
        tempiv=nay;
        nay=ay;
        ay=tempiv;
        r=true;
    }
    if(iu==iv){
        s[(iv+xshift)%N][imag]=nay;
    }else{
    for(var i=iv;i<=iu;i++){
        s[(i+xshift)%N][imag]=ay+(nay-ay)*(i-iv)/(iu-iv);
    }
    }
    ax=nax;
    if(!r){ay=nay;}
    
}
canvas1.onmousemove=function(e){

    if(clicka){
    if(band!=undefined){
    ax=e.layerX;
    ay=e.layerY;
    ca=true;
    }else{
	movemouse(e,a,(e.altKey||e.shiftKey||e.metaKey||e.ctrlKey),1,N/2);
    ca=true;
    b=fft(-1,a,N);
    getbmax();
    cb=true;
    }
    }
}

canvas1.onmousedown=function(e){
	clicka=true;
    clickb=false;
    ox=e.layerX;
    oy=e.layerY;
    canvas1.onmousemove(e);
}
canvas2.onmousemove=function(e){

    if(clickb){
    if(band!=undefined){
    ax=e.layerX;
    ay=e.layerY;
    cb=true;
    }
    else{
	movemouse(e,b,(e.altKey||e.shiftKey||e.metaKey||e.ctrlKey),371.2*bmax/height,N/2);
    cb=true;
    a=fft(1,b,N);
    getamax();
    ca=true;
    }
    }

}

canvas2.onmousedown=function(e){
	clickb=true;
    clicka=false;
    ox=e.layerX;
    oy=e.layerY;
    canvas2.onmousemove(e);
}
canvas1.onmouseup=document.body.onmouseup=canvas2.onmouseup=function(){
that.stopselect();
clicka=clickb=false;ax=bx=ox=oy=undefined;
getamax();getbmax();ca=cb=true;
}
var a=[];
var b=[];
var N=512;
for(var i=0;i<N;i++){
    a.push([cos(2*Math.PI*i/N),sin(2*Math.PI*i/N)]);
}
b=fft(-1,a,N);
var ca=true;
var cb=true;

var bmax=N;
var amax=N;
function getamax(){
amax=N*N/1000;
   for(var i=0;i<N;i++){
        var t=a[i][0]*a[i][0]+a[i][1]*a[i][1];
        if(t>amax){
            amax=t;
        }
    
    }
    return amax=Math.sqrt(amax);
}
function getbmax(){
bmax=N*N/1000;
   for(var i=0;i<N;i++){
        var t=b[i][0]*b[i][0]+b[i][1]*b[i][1];
        if(t>bmax){
            bmax=t;
        }
    
    }
    return bmax=Math.sqrt(bmax);
}
    getamax();
    getbmax();
    var ox=undefined;
    var oy=undefined;
function draw(once){
	if(!ctx1){return;}
    if(ca){
	ctx1.clearRect(0,0,width,height);
    
    ctx1.beginPath();
    ctx1.strokeStyle="#ccc";
    ctx1.moveTo(0,0.5*height-0.5*height*Math.sqrt(a[0][0]*a[0][0] + a[0][1]*a[0][1]));
	for(var i=0;i<N;i++){
    var id=(i+N/2)%N;
        ctx1.lineTo(i*width/N,0.5*height-0.5*height*Math.sqrt(a[id][0]*a[id][0] + a[id][1]*a[id][1]));
    
    }
    ctx1.stroke();
    
    
    ctx1.beginPath();
    ctx1.strokeStyle="#07c";
    ctx1.moveTo(0,0.5*height-0.5*height*a[0][0]);
	for(var i=0;i<N;i++){
        ctx1.lineTo(i*width/N,0.5*height-0.5*height*a[(i+N/2)%N][0]);
    
    }
    ctx1.stroke();
    
    ctx1.beginPath();
    ctx1.strokeStyle="#800";
    ctx1.moveTo(0,0.5*height-0.5*height*a[0][1]);
	for(var i=0;i<N;i++){
        ctx1.lineTo(i*width/N,0.5*height-0.5*height*a[(i+N/2)%N][1]);
    
    }
    ctx1.stroke(); 
    
    if(band!=undefined && clicka){
        var freqmode=false;
        ctx1.fillStyle="rgba(0,0,0,0.3)";
        if(ox===undefined){
         ctx1.fillRect(0,0,start,height);
            ctx1.fillRect(0,0,width,height);
        }else{
        var dx=ax-ox;
        var dy=ay-oy;
        var start,end;
        if(Math.abs(dy)>Math.abs(dx)){
        
        start=oy;
        end=ay;
        }else{
        freqmode=true;
        start=ox;
        end=ax;
        }
        if(start>end){var tend=end;end=start;start=tend;}
        if(freqmode){
            ctx1.fillRect(0,0,start,height);
            ctx1.fillRect(end,0,width-end,height);
        }else{
            ctx1.fillRect(0,0,width,start);
            ctx1.fillRect(0,end,width,height-end);
            
        }
        }
    
    }
        ca=false;
    }
    if(cb){
	ctx2.clearRect(0,0,width,height);
    
    yscale=0.8*height/bmax;
    ctx2.lineWidth=0.5;
    ctx2.strokeStyle="#c8c8c8";
    for(var y=0;;y+=N/8){
        var yp=0.5*height-0.5*yscale*y;
        if(y>10*N){break;}
        if(yp<0){break;}
        
        
        ctx2.beginPath();
        ctx2.moveTo(0,yp);
        ctx2.lineTo(width,yp);
        ctx2.stroke();
        
        yp=0.5*height+0.5*yscale*y;
        ctx2.beginPath();
        ctx2.moveTo(0,yp);
        ctx2.lineTo(width,yp);
        ctx2.stroke();
    }
    ctx2.lineWidth=1;
    ctx2.beginPath();
    ctx2.strokeStyle="#ccc";
    ctx2.moveTo(0,0.5*height-0.5*yscale*Math.sqrt(b[0][0]*b[0][0] + b[0][1]*b[0][1]));
	for(var i=0;i<N;i++){
    var id=(i+N/2)%N;
        ctx2.lineTo(i*width/N,0.5*height-0.5*yscale*Math.sqrt(b[id][0]*b[id][0] + b[id][1]*b[id][1]));
    
    }
    ctx2.stroke();
    
    ctx2.beginPath();
    ctx2.strokeStyle="#07c";
    ctx2.moveTo(0,0.5*height-0.5*yscale*b[0][0]/N);
	for(var i=0;i<N;i++){
        ctx2.lineTo(i*width/N,0.5*height-0.5*yscale*b[(i+N/2)%N][0]);
    
    }
    ctx2.stroke();
    ctx2.beginPath();
    ctx2.strokeStyle="#800";
    ctx2.moveTo(0,0.5*height-0.5*yscale*b[0][1]/N);
	for(var i=0;i<N;i++){
        ctx2.lineTo(i*width/N,0.5*height-0.5*yscale*b[(i+N/2)%N][1]);
    
    }
    ctx2.stroke();
    if(band!=undefined && clickb){
        var freqmode=false;
        ctx2.fillStyle="rgba(0,0,0,0.3)";
        if(ox===undefined){
         ctx2.fillRect(0,0,start,height);
            ctx2.fillRect(0,0,width,height);
        }else{
        var dx=ax-ox;
        var dy=ay-oy;
        var start,end;
        if(Math.abs(dy)>Math.abs(dx)){
        
        start=oy;
        end=ay;
        }else{
        freqmode=true;
        start=ox;
        end=ax;
        }
        if(start>end){var tend=end;end=start;start=tend;}
        if(freqmode){
            ctx2.fillRect(0,0,start,height);
            ctx2.fillRect(end,0,width-end,height);
        }else{
            ctx2.fillRect(0,0,width,start);
            ctx2.fillRect(0,end,width,height-end);
            
        }
        }
    
    }
    
        cb=false;
    }
	if(!once){
	setTimeout(draw,0)};
}
draw();
return that;
})();