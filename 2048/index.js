var body=document.getElementById('body');
var m=[];
for (i=0;i<16;i++){
    m[i]=document.getElementById(i+'');
    m[i].style.display="block";
    m[i].innerHTML='';
}


var mi=[],mo=[],ms=[],i=0,z=false;


function rand() {
    z=false;
    while (true) {
        i=Math.round(Math.random()*15);
        if (!m[i].innerHTML){
        m[i].innerHTML = (Math.round(Math.random() * 7) > 1) ? 2 : 4;
        break;
        }
    }
    if (mi){
        for (i=0;i<16;i++){
            mi[i]=parseInt(m[i].innerHTML);
            if (!mi[i])mi[i]=0;
        }
    }

    boya();

}

rand();


var j,k;
body.onkeydown=function (e) {
    if (e.code==="Backspace")back();

    // ArrowLeft
    // ArrowLeft
    // ArrowLeft
if (e.code==="ArrowLeft"){

    arraycopys();
        for (i=0;i<16;i++){
            if (i%4===0)j=0;
            if (mi[i]) {
                mi[j+Math.round(i/4-0.3)*4]=mi[i];if (i!==j+Math.round(i/4-0.3)*4){mi[i]=0;z=true;}
                    j++;
            }
        }

    for (i = 0; i < 16; i++) {


        if (i%4!==3)
            if (mi[i] && mi[i+1]===mi[i]){
                mi[i]*=2;
                mi[i+1]=0;z=true;
            }

    }

    for (i=0;i<16;i++){
        if (i%4===0)j=0;
        if (mi[i]) {
            mi[j+Math.round(i/4-0.3)*4]=mi[i];if (i!==j+Math.round(i/4-0.3)*4)mi[i]=0;
            j++;
        }
    }

    for (i=0;i<16;i++){
        if (mi[i]!==0){
            m[i].innerHTML=mi[i];
        }else  m[i].innerHTML='';
    }
    if (z) {
        arraycopy();
    }
    if (tekshir() && z)rand();

}

    // ArrowRight
    // ArrowRight
    // ArrowRight
if (e.code==="ArrowRight"){

    arraycopys();
    for (i=0;i<16;i++){
        k=Math.round(i/4-0.3)*4+3-i%4;

        if (i%4===0)j=3;
        if (mi[k]) {
            mi[j+Math.round(i/4-0.3)*4]=mi[k];if (k!==j+Math.round(i/4-0.3)*4){mi[k]=0;z=true;}
            j--;
        }
    }

    for (i = 0; i < 16; i++) {
        k=Math.round(i/4-0.3)*4+3-i%4;
        if (i%4===0) j=12+Math.round(i/4-0.3);
        if (k%4!==0)
            if (mi[k] && mi[k-1]===mi[k]){
                mi[k]*=2;
                mi[k-1]=0;z=true;
            }

    }

    for (i=0;i<16;i++){
        k=Math.round(i/4-0.3)*4+3-i%4;

        if (i%4===0)j=3;
        if (mi[k]) {
            mi[j+Math.round(i/4-0.3)*4]=mi[k];if (k!==j+Math.round(i/4-0.3)*4){mi[k]=0;z=true;}
            j--;
        }
    }

    for (i=0;i<16;i++){
        if (mi[i]!==0){
            m[i].innerHTML=mi[i];
        }else  m[i].innerHTML='';
    }
    if (z) {
        arraycopy();
    }
    if (tekshir() && z)rand();
}

    // ArrowUp
    // ArrowUp
    // ArrowUp

if (e.code==="ArrowUp"){

    arraycopys();
    for (i=0;i<16;i++){
        k=Math.round(i/4-0.3)+i%4*4;

        if (i%4===0)j=Math.round(i/4-0.3);
        if (mi[k]) {
            mi[j]=mi[k];if (k!==j){mi[k]=0;z=true;}
            j+=4;
        }
    }


    for (i = 0; i < 16; i++) {
        k=Math.round(i/4-0.3)+i%4*4;
        if (i%4===0) j=12+Math.round(i/4-0.3);
        if (k<12)
        if (mi[k] && mi[k+4]===mi[k]){
            mi[k]*=2;
            mi[k+4]=0;z=true;
        }

    }

    for (i=0;i<16;i++){
        k=Math.round(i/4-0.3)+i%4*4;

        if (i%4===0)j=Math.round(i/4-0.3);
        if (mi[k]) {
            mi[j]=mi[k];if (k!==j)mi[k]=0;
            j+=4;
        }
    }



    for (i=0;i<16;i++){
        if (mi[i]!==0){
            m[i].innerHTML=mi[i];
        }else  m[i].innerHTML='';
    }
    if (z) {
        arraycopy();
    }
    if (tekshir() && z)rand();
}

    // ArrowDown
    // ArrowDown
    // ArrowDown

if (e.code==="ArrowDown"){

    arraycopys();
    for (i=0;i<16;i++){
        k=12+Math.round(i/4-0.3)-i%4*4;

        if (i%4===0)j=12+Math.round(i/4-0.3);
        if (mi[k]) {
            mi[j]=mi[k];if (k!==j){mi[k]=0;z=true;}
            j-=4;
        }
    }

    for (i = 0; i < 16; i++) {
        k=12+Math.round(i/4-0.3)-i%4*4;
        if (k>=4)
        if (mi[k] && mi[k-4]===mi[k]){
           mi[k]*=2;
           mi[k-4]=0;z=true;
        }

    }
    for (i=0;i<16;i++){
        k=12+Math.round(i/4-0.3)-i%4*4;

        if (i%4===0)j=12+Math.round(i/4-0.3);
        if (mi[k]) {
            mi[j]=mi[k];if (k!==j)mi[k]=0;
            j-=4;
        }
    }

    for (i=0;i<16;i++){
        if (mi[i]!==0){
            m[i].innerHTML=mi[i];
        }else  m[i].innerHTML='';
    }
    if (z) {
        arraycopy();
    }
    if (tekshir() && z)rand();
}



};

function boya() {
    for (i=0;i<16;i++){

        if (m[i].innerHTML==='')m[i].style.backgroundColor="#BFB1A1";
        else if (parseInt(m[i].innerHTML)===2)m[i].style.backgroundColor="#EFE5DB";
        else  if (parseInt(m[i].innerHTML)===4)m[i].style.backgroundColor="#ece9ae";
        else if (parseInt(m[i].innerHTML)===8)m[i].style.backgroundColor="#F4B37F";
        else if (parseInt(m[i].innerHTML)===16)m[i].style.backgroundColor="#F4965C";
        else if (parseInt(m[i].innerHTML)===32)m[i].style.backgroundColor="#F47F59";
        else if (parseInt(m[i].innerHTML)===64)m[i].style.backgroundColor="#F16032";
        else if (parseInt(m[i].innerHTML)===128)m[i].style.backgroundColor="#EDCE71";
        else if (parseInt(m[i].innerHTML)===256)m[i].style.backgroundColor="#ede871";
        else if (parseInt(m[i].innerHTML)===512)m[i].style.backgroundColor="#edec68";
        else if (parseInt(m[i].innerHTML)===1024)m[i].style.backgroundColor="#e5ef53";
        else if (parseInt(m[i].innerHTML)===2048)m[i].style.backgroundColor="#edc640";
        else if (parseInt(m[i].innerHTML)===4096)m[i].style.backgroundColor="#FF3D3D";
        else m[i].style.backgroundColor="#3D3A33";


        j=parseInt(m[i].innerHTML);
        if (j>4)m[i].style.color="#FAF7F3";
        else m[i].style.color="#000000";

    }
}

function tekshir() {
    for (i = 0; i <16 ; i++) {
        if (!m[i].innerHTML ){
            return true;
        }
        if (i===15){

            for (i = 0; i < 16; i++) {
                if (i%4!==3)
                    if (mi[i+1]===mi[i]){return false;}
                if (i%4!==0)
                    if (mi[i-1]===mi[i]){return false;}
                if (i<12)
                    if (mi[i+4]===mi[i]){return false;}
                if (i>=4)
                    if (mi[i-4]===mi[i]){return false;}

                if (i===15){
                    document.getElementById('over').style.opacity='1';return false;
                }
            }
        }
    }
}
function arraycopy() {
    for (var l = 0; l < mi.length; l++) {
        mo[l]=ms[l];
    }
}
function arraycopys() {
    for (var l = 0; l < mi.length; l++) {
        ms[l]=mi[l];
    }
}

function restart() {
    for (i=0;i<16;i++){
    m[i].innerHTML='';
}
    rand();
    boya();
}
function back() {
    for (i=0;i<16;i++){
       if (!mo[i]) m[i].innerHTML='';
       else m[i].innerHTML=mo[i];
       mi[i]=mo[i];
    }

    boya();

}
