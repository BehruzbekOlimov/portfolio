var canvas=document.getElementById('canvas');
var value=document.getElementById('slider');
var slider=document.getElementById('asos');
var s_r=document.getElementById('asosr');
var s_g=document.getElementById('asosg');
var s_b=document.getElementById('asosb');
var s_a=document.getElementById('asosa');
var v_r=document.getElementById('sliderr');
var v_g=document.getElementById('sliderg');
var v_b=document.getElementById('sliderb');
var v_a=document.getElementById('slidera');
var easer=document.getElementById('easer');
var ok=document.getElementById('ok');
var w=document.getElementById('width');
var h=document.getElementById('height');
s_r.style.top="78vh";
s_g.style.top="85vh";
s_b.style.top="92vh";
s_a.style.top="68vh";
value.style.left="20px";
var ea=true;

var context=canvas.getContext('2d');
canvas.width=1362;
canvas.height=653;

context.strokeStyle="#171616";

context.font="32px Arial";
var b=false,z=false;
var  x,y;
slider.onmousedown=function () {
    z=true;
    };
slider.onmouseup=function () {
    z=false
    };
slider.onmouseleave=function () {
    z=false
    };
var  l=parseInt(value.style.left)/3;
slider.onmousemove=function (ev) {
    if (z && ev.pageX-31<129 && ev.pageX-31>1){

        value.style.left=ev.pageX-33+"px";
        l=parseInt(value.style.left)/3;
    }
};
v_r.style.left="0px";
v_g.style.left="0px";
v_b.style.left="0px";
v_a.style.left="127px";
s_r.onmousedown=function () {
    z=true;
    };
s_r.onmouseup=function () {
    z=false
    };
s_r.onmouseleave=function () {
    z=false
    };

s_r.onmousemove=function (ev) {
    if (z && ev.pageX-31<130 && ev.pageX-31>1){
        // "#"+parseInt(v_r.style.left)+parseInt(v_g.style.left)+ev.pageX;
        v_r.style.left=ev.pageX-33+"px";
        document.getElementById('rang').style.backgroundColor="rgba("+parseInt(v_r.style.left)*2+" , "+parseInt(v_g.style.left)*2+" , "+parseInt(v_b.style.left)*2+" , "+parseInt(v_a.style.left)/127+")";
        if (ea)
        context.strokeStyle=document.getElementById('rang').style.backgroundColor;
        else context.strokeStyle="#ffffff"

    }
};
s_g.onmousedown=function () {
    z=true;
    };
s_g.onmouseup=function () {
    z=false
    };
s_g.onmouseleave=function () {
    z=false
    };

s_g.onmousemove=function (ev) {
    if (z && ev.pageX-31<130 && ev.pageX-31>1){
        // "#"+parseInt(v_r.style.left)+parseInt(v_g.style.left)+ev.pageX;
        v_g.style.left=ev.pageX-33+"px";
        document.getElementById('rang').style.backgroundColor="rgba("+parseInt(v_r.style.left)*2+" , "+parseInt(v_g.style.left)*2+" , "+parseInt(v_b.style.left)*2+" , "+parseInt(v_a.style.left)/127+")";
        if (ea)
            context.strokeStyle=document.getElementById('rang').style.backgroundColor;
        else context.strokeStyle="#ffffff"
    }
};
s_b.onmousedown=function () {
    z=true;
    };
s_b.onmouseup=function () {
    z=false
    };
s_b.onmouseleave=function () {
    z=false
    };
s_b.onmousemove=function (ev) {
    if (z && ev.pageX-31<130 && ev.pageX-31>1){
        // "#"+parseInt(v_r.style.left)+parseInt(v_g.style.left)+ev.pageX;
        v_b.style.left=ev.pageX-33+"px";
        document.getElementById('rang').style.backgroundColor="rgba("+parseInt(v_r.style.left)*2+" , "+parseInt(v_g.style.left)*2+" , "+parseInt(v_b.style.left)*2+" , "+parseInt(v_a.style.left)/127+")";
        if (ea)
            context.strokeStyle=document.getElementById('rang').style.backgroundColor;
        else context.strokeStyle="#ffffff"
    }
};
s_a.onmousedown=function () {
    z=true;
    };
s_a.onmouseup=function () {
    z=false
    };
s_a.onmouseleave=function () {
    z=false
    };

s_a.onmousemove=function (ev) {
    if (z && ev.pageX-31<130 && ev.pageX-31>1){
        // "#"+parseInt(v_r.style.left)+parseInt(v_g.style.left)+ev.pageX;
        v_a.style.left=ev.pageX-33+"px";
        document.getElementById('rang').style.backgroundColor="rgba("+parseInt(v_r.style.left)*2+" , "+parseInt(v_g.style.left)*2+" , "+parseInt(v_b.style.left)*2+" , "+parseInt(v_a.style.left)/127+")";
        if (ea)
            context.strokeStyle=document.getElementById('rang').style.backgroundColor;
        else context.strokeStyle="#ffffff"
    }
};
var count=0;
canvas.onmousedown=function (ev) { b=true;count=0; x=ev.offsetX;y=ev.offsetY;context.moveTo(x,y);};
canvas.onmouseup=function () { b=false; context.beginPath(); };
canvas.onmouseleave=function () { b=false; context.beginPath();};

    canvas.onmousemove=function (ev) {


        if ((b || ev.ctrlKey) ){
           if (ea) {
               context.moveTo(x, y);
               context.lineTo(ev.offsetX, ev.offsetY);
               context.stroke();
               context.lineWidth = l;
           }
           else {
               context.clearRect(ev.offsetX-l/2, ev.offsetY-l/2,l,l);
           }
            context.beginPath();
            context.lineJoin="round";
            context.lineCap="round";
            // if (count===0)

            x=ev.offsetX;y=ev.offsetY;



        }count++;
    };

document.getElementById('btn').onclick=function() {

    context.clearRect(0,0,canvas.width,canvas.height);
};
document.getElementById('btn1').onclick=function() {

    if (document.getElementById('box').style.display==="none")document.getElementById('box').style.display="flex";
    else document.getElementById('box').style.display="none";

};
ok.onclick=function() {
canvas.width=w.value;
canvas.height=h.value;
    l=parseInt(value.style.left)/3;
    context.strokeStyle=document.getElementById('rang').style.backgroundColor;
};
easer.onclick=function (ev) {
   document.getElementById('rang').style.backgroundColor="rgba("+parseInt(v_r.style.left)*2+" , "+parseInt(v_g.style.left)*2+" , "+parseInt(v_b.style.left)*2+" , "+parseInt(v_a.style.left)/127+")";
  ea=!ea;
    if (ea){
        context.strokeStyle=document.getElementById('rang').style.backgroundColor;
    easer.style.backgroundColor="rgba(0, 15, 255, 0.4)";
    }
    else{ context.strokeStyle="#ffffff"; easer.style.backgroundColor="rgba(230,130,0,.8)";}
};
