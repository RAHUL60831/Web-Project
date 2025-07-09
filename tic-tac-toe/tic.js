let btn1=document.querySelectorAll('.btn1')
let div1=document.querySelector('.msg-con')
let msg=document.querySelector('#msg')
let btn2=document.querySelector('#btn2')
let btn3=document.querySelector('#btn3')
let O=document.querySelector('#O')
let X=document.querySelector('#X')
let a=true;
let sO=0
let sX=0
let b=0
let c=0
btn1.forEach((box)=> {
  
  box.addEventListener('click',()=>{
   
 if(a){

   box.innerText='O';
  a=false;
 
 }
 else{

    box.innerText='X';
    a=true;
    
 }
  console.log(b)
 box.disabled=true 
 check();
   
 

    })

  
     
});

 let winners=[
          
             [0,1,2],
             [0,3,6],
             [0,4,8],
             [1,4,7],
             [2,5,8],
             [2,4,6],
             [3,4,5],
             [6,7,8]
 
 ]

const check=()=>{
b++
c++
console.log('b:',b)
console.log('c:',c)
for(pat of winners){
console.log(pat[0],pat[1],pat[2])
let pos1=btn1[pat[0]].innerText
let pos2=btn1[pat[1]].innerText
let pos3=btn1[pat[2]].innerText
console.log(pos1,pos2,pos3)

if(pos1 !="" && pos2 !="" && pos3 !=""){
  
  console.log('b:',b)
if(pos1===pos2 && pos2===pos3){
  console.log(pos1,pos2,pos3)
   showWin(pos1);
   break;
}
else if(b===9){
  console.log('F')
  msg.innerText=`Lose the game!!!`;
  b=0
  div1.classList.remove("hide");
  disableB();

}
}

else if(b>6){
if((pos1 !="" && pos2 !=""&& pos3==="") ||(pos2 !="" &&pos3 !="" && pos1==="")||(pos1 !="" &&pos3 !="" && pos2==="")){
  console.log('D')
if(pos1===pos2||pos2===pos3||pos1===pos3){
console.log('ABC')
continue;
}

else if(pos1!==pos2||pos2!==pos3||pos1!==pos3){

  console.log('E')
  msg.innerText=`Lose the game!!!`;
  b=0
  div1.classList.remove("hide");
  disableB();


}


}
}

  }



}







const showWin=(win)=>{

console.log('win')
console.log(win)
msg.innerText=`Congratulation! Win the match Mr ${win}`;
div1.classList.remove("hide");
if(win==='O'){
   console.log(win)
sO++
O.innerText=`O:${sO}`

}
else{
sX++
X.innerText=`X:${sX}`


}
disableB();

}

const disableB=()=>{

for(val of btn1){

  val.disabled=true

}



}
const reset=()=>{
a=true;
enableB()
b=0
c=0
div1.classList.add("hide")


}

const enableB=()=>{

   for(val of btn1){
   
     val.disabled=false
     val.innerText=""
   
   }
   
   
   
   }

    
    
    btn2.addEventListener('click',reset)
    btn3.addEventListener('click',reset)
























