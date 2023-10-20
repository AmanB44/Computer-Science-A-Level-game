function validate() {
    var i = document.getElementById("Firstname").value.length;
    if (i === 0 || i === undefined) { 
        document.getElementById("Firstname").style.border = "1px solid red";
        document.getElementById("form").action = "";
        document.getElementById("Firstname").style.placeholder = "Re-enter your firstname";
    } else {document.getElementById("form").action = "index.html";
        }
}

function validate1() {
    var j = document.getElementById("Surname").value.length;        
    if (j === 0 || j === undefined) { 
        document.getElementById("Surname").style.border = "1px solid red";
        document.getElementById("form").action = "";
        document.getElementById("Surname").style.placeholder = "Re-enter your surname";
    } else {document.getElementById("form").action = "index.html";
        }
}

function validate2() {
    var j = document.getElementById("Username").value.length;        
    if (j === 0 || j === undefined) { 
        document.getElementById("Username").style.border = "1px solid red";
        document.getElementById("form").action = "";
        document.getElementById("Username").style.placeholder = "Re-enter your username";
    } else {document.getElementById("form").action = "index.html";   
        }
}

function validate3() {
    var j = document.getElementById("Password").value.length;        
    if (j === 0 || j === undefined) { 
        document.getElementById("Password").style.border = "1px solid red";
        document.getElementById("form").action = "";
        document.getElementById("Password").style.placeholder = "Re-enter your password";   
    } else {document.getElementById("form").action = "index.html";    
        }
}