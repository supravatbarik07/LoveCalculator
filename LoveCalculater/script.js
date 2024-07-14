const fname=document.getElementById("yourName");
const lname=document.getElementById("loveName");
const blove=document.querySelector(".btn1");
const reset=document.querySelector(".btn2")
function luck(){
    document.querySelector(".error").innerHTML="";//remove the previous error massage.

    if(fname.value.trim() ==="" || lname.value.trim()===""){
        document.querySelector(".error").innerHTML="please fill the both field"
        return; // Exit the function if validation fails
    }
    const num=Math.floor(Math.random()*101)

    // console.log(num)
    const backImage=document.querySelector(".result")
    if(num>=85 && num <=100){
      const img1="./assets/1.gif"
      backImage.style.backgroundImage= `url(${img1})`;
      document.querySelector("p.add").innerHTML="Wow you are very lucky"
    }
    else if(num>=70 && num <85){
        const img1="./assets/2.gif"
      backImage.style.backgroundImage= `url(${img1})`;
        document.querySelector("p.add").innerHTML="Your partner loves you so much"
    }
    else if(num>=50 && num<70){
        const img1="./assets/3.gif"
      backImage.style.backgroundImage= `url(${img1})`;
        document.querySelector("p.add").innerHTML="You both are owsm"
    }
    else{
        const img1="./assets/4.gif"
      backImage.style.backgroundImage= `url(${img1})`;
        document.querySelector("p.add").innerHTML="Your  not made for each other"
    }
}
blove.addEventListener('click',luck)

function tryAgain(){
    fname.value=""
    lname.value=""
    // document.querySelector(".add").classList.remove("add")
    // document.querySelector(".result").classList.remove("result") 
    // document.querySelector(".error").classList.remove("error")  
}

reset.addEventListener('click',tryAgain)

