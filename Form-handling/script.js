var form = document.querySelector('#form')
var username = document.querySelector('#username')
var email  = document.querySelector("#email")
var password1  = document.querySelector("#password1")
var password2  = document.querySelector("#password2")
var registerBtn = document.querySelector("button")


function showError(item,message=''){
  var formControl = item.parentElement
  formControl.className = "error"
  var small = formControl.querySelector('small')
  small.innerText = message
}

function checkPassword(pass1,pass2){
  if(pass1.value !== pass2.value){
    showError(pass1,"password must match")
    showError(pass2,"password must match")
  }
  else{
    showSuccess(pass1)
    showSuccess(pass2)
  }
}

function showSuccess(item){
  var formControl = item.parentElement
  formControl.className = "success"
}
function checkEmail(email) {

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(re.test(String(email.value).toLowerCase())){
     console.log('success')
     showSuccess(email)
   }else{
     showError(email,"Enter a valid email address")
   }
}

function checkRequired(list) {

  list.forEach(item=>{
    if(item.value === ''){
      showError(item,`${item.id} is required`)
    }else{
      showSuccess(item)
    }
  })
}

function checkLength(item,min,max){
  if (item.value.length < min || item.value.length > max){
    showError(item,message= `${item.id} must be minimum ${min} and maximum ${max} length`)
  }
}

function submitForm(e){
  e.preventDefault()
  
  checkLength(username,5,12)
  
 
  checkRequired([username,email,password1,password2])
  checkPassword(password1,password2)
  checkEmail(email)
  checkLength(password1,6,12)
  checkLength(password2,6,12)
  
}


form.addEventListener('submit',submitForm)