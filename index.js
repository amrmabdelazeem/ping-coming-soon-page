const emailInput = $(".emailInput");


function isEmail(email){
    //regex email validation
    var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return emailReg.test(email);
}


$("button").on("click", ()=>{
    if(isEmail(emailInput.val()) === false){
        $(".emailInput").css("border-color", "red");
        $(".error").show();
    }
    else{
        $(".emailInput").css("border-color", "green");
        $(".error").hide();
    }
})