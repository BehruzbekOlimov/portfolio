let clock=document.getElementById('soat');
let hour=document.getElementById('s');
let min=document.getElementById('m');
let sec=document.getElementById('sec');
let sifr=document.getElementById('sifr');

for (let i=1;i<=12;i++){
    let hour=document.createElement('div');
    hour.id='hour'+i;
    hour.style.fontSize='24px';
    hour.style.position='absolute'
    hour.innerText = i;
    hour.style.width='40px';
    hour.style.color='orangered';
    hour.style.fontFamily='Bold';
    hour.style.textAlign='center';
    hour.style.top=Math.round(Math.sin(2*Math.PI/12*(i-3))*170+184)+"px"
    hour.style.left=Math.round(Math.cos(2*Math.PI/12*(i-3))*170+178)+"px"
    clock.appendChild(hour);
}
for (let i=1;i<=60;i++){
    let point=document.createElement('div');
    point.style.borderRadius='50%';
    point.style.position='absolute';
    let r=((i%5===0)?8:4);
    point.style.width=r+'px';
    point.style.height=r+'px';
    point.style.backgroundColor='#ffff00';
    point.style.top=Math.round(Math.sin(2*Math.PI/60*i)*150+198-r/2)+"px"
    point.style.left=Math.round(Math.cos(2*Math.PI/60*i)*150+198-r/2)+"px"
    clock.appendChild(point);
}
setInterval(function (){
    let time=new Date();
    let c_hour=time.getHours();
    let c_min=time.getMinutes();
    let c_sec=time.getSeconds();
    sec.style.transform='rotate('+6*c_sec+'deg)';
    min.style.transform='rotate('+6*c_min+'deg)';
    hour.style.transform='rotate('+(30*c_hour+c_min/2)+'deg)';
    sifr.innerText=`${((c_hour.toString().length===1)?'0':'')+c_hour}:${((c_min.toString().length===1)?'0':'')+c_min}:${((c_sec.toString().length===1)?'0':'')+c_sec}`;
},100);