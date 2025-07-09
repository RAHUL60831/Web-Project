
const baseUrl= "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

let input=document.querySelector("#myin");

let dropdown=document.querySelectorAll('.dropdown select')
let btn=document.querySelector('button')
let fromcur=document.querySelector('.from select')
let tocur=document.querySelector('.to select')
let msg=document.querySelector('.result .msg')
for(let select of dropdown){
    
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        
if(select.name==='from'&&currCode==='USD'){

    newOption.selected='select'
}
if(select.name==='to'&&currCode==='BDT'){

    newOption.selected='select'
}
        select.append(newOption)
    }
select.addEventListener('change',(evt)=>{
    updateimage(evt.target)
})
}

const updateimage=(el)=>{

    let currCode=el.value
    let coun=countryList[currCode]
    console.log(el)
    let im=`https://flagsapi.com/${coun}/flat/64.png`
    el.parentElement.querySelector('img').src=im
    
    }
    const updateExchangeRate=async()=>{
        let amount=document.querySelector('input')
        let amtval=amount.value
        
        if (amtval === "" || amtval < 1 ) {
          amtval = 1;
          amount.value = "1";
        }
        console.log(fromcur.value.toLowerCase())
        console.log(tocur.value.toLowerCase())
        let url=`${baseUrl}/${fromcur.value.toLowerCase()}.json`
        let response= await fetch(url);
        console.log(response.status)
        let data = await response.json();
       let rate = data[fromcur.value.toLowerCase()][tocur.value.toLowerCase()];
        console.log(data)
        console.log(rate)
        let finalAmount = amtval * rate;
        msg.innerText=`${amtval} ${fromcur.value} =${finalAmount} ${tocur.value}`
        }


        btn.addEventListener("click", (evt) => {
            evt.preventDefault();
            updateExchangeRate();
          });

          window.addEventListener("load", () => {
            updateExchangeRate();
          });

