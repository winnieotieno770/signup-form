let email = document.querySelector("#email");
let btn = document.querySelector(".btn");
let errMessage = document.querySelector('#errMessage');
let successContainer = document.querySelector(".success-container");


btn.addEventListener('click',validateEmail);

function validateEmail(e){
  e.preventDefault()
  let emailAddress = email.value;
  
  let atSymbol = emailAddress.indexOf("@");
  let dotSymbol = emailAddress.lastIndexOf('.');
  let spaceSymbol = emailAddress.indexOf(' ');


 
  if (emailAddress !==""){

          if ((atSymbol != -1) &&
             (atSymbol != 0) &&
             (dotSymbol != -1) &&
             (dotSymbol != 0) &&
             (dotSymbol > atSymbol + 1) &&
             (emailAddress.length > dotSymbol + 1) &&
             (spaceSymbol == -1)) 
             {
            
          successContainer.innerHTML = `  
              <div class="success">
                <div class="icon-success">
                  <img src="./images/icon-success.svg" alt="">
                </div>
                <div class="message">
                  <h1>Thanks for subcscribing!</h1>
                  <p>A confirmation message email has been sent to
                  <span id="user-email"><strong>${emailAddress}</strong></span>.
                   Please open it and clicck the button inside to confirm your subcription
                  </p>
                 <button class="btn"><a href="./index.html">Dismiss message</a></button>
                </div>              
             </div>    
          `
        
        }
      else {
          errMessage.textContent="Valid email required " 
          email.classList.remove("input-email")
          email.classList.add("error") 
          errMessage.classList.add("valid")
         
       }
    }  
  else{
     errMessage.style.display = 'block'
     errMessage.textContent = "Cannot be empty"
     email.classList.add("error") 
     errMessage.classList.add("valid")
     
     
  }   
      }