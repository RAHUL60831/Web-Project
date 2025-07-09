const choice= document.querySelectorAll('.choice')
const userN=document.querySelector('#user')
const compN=document.querySelector('#comp')
const msg=document.querySelector('#msg')
const btn=document.querySelector('button')
let uS=0
let cS=0

const compChoice=()=>{

const option=['rock','paper',"scissors"]
const idx=Math.floor(Math.random()*3)

return option[idx]


}
const drawgame=()=>{

console.log("draw game")
msg.innerText=`It was draw`
msg.style.backgroundColor='blue'

}


const playgame=(user)=>{


console.log(user)
const comp=compChoice()
console.log(comp)

if(user===comp){

    drawgame()
}
else{

 let userWin=true
if(user==='rock'){

userWin=comp==='paper'? false:true;



}
else if(user==='paper'){

    userWin=comp==='scissors'? false:true;
    
    
    
    }
   else if(user==='scissors'){

        userWin=comp==='rock'? false:true;
        
        
        
        }


console.log(userWin)
showwin(userWin,user,comp)

}






}

const showwin=(userWin,user,comp)=>{

if(userWin){

msg.innerText=`You win!! ${user} beats ${comp}`


msg.style.backgroundColor='green'
uS++
userN.innerText=`${uS}`

}
else{

msg.innerText=`You lose!! ${comp} beats ${user}`
msg.style.backgroundColor='red'
cS++
compN.innerText=`${cS}`


}





}





choice.forEach((c)=>{

c.addEventListener('click',()=>{
   
    const userid=c.getAttribute('id');

 playgame(userid)


})



})

const restart=()=>{


msg.innerText=`Play your move`

msg.style.backgroundColor='#081b31'
uS=0
 cS=0

compN.innerText=`0`

userN.innerText=`0`

}


btn.addEventListener('click',restart)


























































