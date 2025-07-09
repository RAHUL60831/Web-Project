let inout=document.querySelector('.inout');
let btn=document.querySelectorAll("button")

function deleteAll(){
    inout.value=""
  

}
function del(){
 
//cursor Select
let startP=inout.selectionStart
let endP=inout.selectionEnd  
//value delete
inout.value=inout.value.substring(0,startP-1)+inout.value.substring(endP)

//cursor Select After deleting value
inout.setSelectionRange(startP-1,startP-1);

//cursor focusing
    inout.focus()
   



}

function answer(){
let str=inout.value
let result =eval(str)
inout.value=result
}


for(let b of btn){
b.addEventListener("click",()=>{

if(b.innerText==='del'){
del()
}
else if(b.innerText==='='){
    answer()
    }
else if(b.innerText !=='c'&& b.innerText!=='del'&& b.innerText!=='='){
    let value =b.innerText




     cursor(value)

}
else if(b.innerText==='c'){
    deleteAll()
    
    }

})

}


function cursor(a){


//cursor Select
    let startP=inout.selectionStart
    let endP=inout.selectionEnd
//value add
inout.value=inout.value.substring(0,startP)+a+inout.value.substring(endP)
//cursor Select After adding value
inout.setSelectionRange(startP+a.length,startP+a.length);
    
   //cursor focusing
        inout.focus()
       
}




















