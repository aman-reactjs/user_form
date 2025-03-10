

let btn = document.querySelector("#btn");
let search = document.querySelectorAll(".input");
let password2 = document.querySelector("#password2");
let userName = document.querySelector("#userName");
let mobile = document.querySelector("#mobile");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let showHidden = document.querySelector("#showHidden");

search.forEach((input,index)=>{
input.addEventListener("keypress",(event)=>{
    if(event.key==="Enter"){
        event.preventDefault();
        let nextInput = search[index+1];
        if(nextInput){
            nextInput.focus();
      }
      } else{
            document.querySelector("#btn").click();
        }
    
});
});


btn.addEventListener("click",(event)=>{
    event.preventDefault();

   if(userName.value==="" || mobile.value===""||email.value===""||password.value===""||password2.value===""){
    alert("This can't be Empty")
    return false;
   }
   if(password2.value!== password.value){
    alert("password are not matching");
    return false;
   }
   if(mobile.value.length!==10|| isNaN(mobile.value)){
    alert("Mobile number is not 10 digit");
    return false;
   } 
    alert("you are successfully submit")


    document.querySelectorAll(".input").forEach(input => input.value = "");    
})
password.addEventListener("focus",()=>{
    showHidden.style. display="block"
    if(password.value.length>0){
        showHidden.style.background="green"
    }
    
})
password.addEventListener("blur",()=>{
    if(password.value.length===0){
        showHidden.style. display="none"

    } 
})
showHidden.addEventListener("click",()=>{
    if(password.type==="password"&& password.value.length>0){
        password.type="text";
        showHidden.textContent="Hide"
        showHidden.style.background="green"
    } else{
        password.type="password";
        showHidden.textContent="show"
        showHidden.style.background="rgba(255, 245, 24, 0.6)"
    }
   })