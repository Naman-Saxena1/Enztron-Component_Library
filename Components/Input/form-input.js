const formSubmitBtn = document.querySelector(".form-user-auth-btn");
const formInputEmail = document.querySelector("#user-auth-input-email")
const formInputFields = document.querySelectorAll(".user-auth-form-input");


formSubmitBtn.addEventListener('click',()=>{
    let emailFormatErrorFlag = false;
    for(index in formInputEmail.value)
    {
        if(!(formInputEmail.value[index]=="@"))
        {
            emailFormatErrorFlag=true;
        }
        
    }

    if(emailFormatErrorFlag)
    {
        formInputEmail.style.outlineColor = "red";
    }
})

formInputFields.forEach((inputElement)=>{
    inputElement.addEventListener('click',()=>{
        inputElement.style.outlineColor = "rgb(46, 92, 165)";
    })
})