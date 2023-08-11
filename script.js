
function checkPass() {
    let password = document.getElementById("pass").value;
    let confirm = document.getElementById("confirm").value;
    let text = document.getElementById("text");

    if (password != confirm)
    {
        let pass = document.getElementById("pass");
        let conf= document.getElementById("confirm");
        conf.style.borderColor = "red";
        pass.style.borderColor = "red"; 
        text.textContent = "* Password does not match";
        text.style.color = "red";
    }

};

