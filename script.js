

var cnt=0;
var moves=0;
var arr=new Array(16);
arr.fill(-1,0,16)
var j,img1,match=0;


var game=document.getElementById("gameover");
var move=document.getElementById("move");
fun=(i,j)=>{
    document.getElementById(i).style.display="block";
    document.getElementById(j).style.display="none";
}
fun1=(i,j)=>{
    document.getElementById(i).style.display="none";
    document.getElementById(j).style.display="block";
}
start=(i,j)=>{
    document.getElementById(i).style.display="inline-block";
    document.getElementById(i).style.top="0px";

    document.getElementById(j).style.display="none";
}
show=(i)=>{
    var img=document.getElementById(i).firstChild;
    
    if(arr[i]==-1 && cnt<2){
        img.style.display="inline";
        moves+=1;
        move.innerText=moves;

        arr[i]=i;
        cnt+=1
        if(cnt==1){
        img1=img;
        j=i;
        }
        if(cnt==2)
        {
            if(img1.src==img.src){
            match+=1;
            if(match==8)
            {
                document.getElementById("tot").innerHTML="Total Moves : "+moves;

                setTimeout(()=>{ $(images).fadeOut(700);$("#moves").fadeOut(700);},1200);
                setTimeout(()=>{game.style.display="block";},1500);
                

                                 
            }
            }
            else{
            setTimeout(()=>{ $(img1).fadeOut(700);
    $(img).fadeOut(700)},700);
                arr[i]=-1;
                arr[j]=-1;
            }
            setTimeout(()=>{cnt=0},1000)
        }
    }    
}
