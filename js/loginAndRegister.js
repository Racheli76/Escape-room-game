var verify = false;

var index;
var colors=["אדום","צהוב","ירוק","כחול","ורוד"];
var engColors = ["red", "yellow", "green", "blue", "pink"];
var verifyIsOpen = false;
function Verifying(){
    let div = document.getElementById("hide_verifying");
    if (!verifyIsOpen){
        verifyIsOpen =true;
        div.style.display="block";
        index = Math.floor(Math.random() * colors.length);
        let h6 = document.getElementById("command_for_verifying");
        h6.innerText = "כדי להוכיח שאינך רובוט לחץ על הצבע ה"+colors[index]+".";
    }
    else{
        verifyIsOpen = false;
        //while (div.firstChild) {
          //  div.removeChild(div.firstChild); //מוחק את כל הילדים של האימות
        div.style.display = "none";
    }       
}

function Verify_color(){
    let color = event.currentTarget;
    color.style.opacity = "50%"
    setTimeout(() => {
        
        color.style.opacity = "100%";
    }, 100);
    
    if (engColors[index] == color.className)
        verify=true;
}

function Login(){
    if (!verify){
        alert("אופס! משהו לא תקין, רענן את העמוד ונסה שוב.");
        return;
    }

    let email = document.querySelector("#email").value;
    let userName = document.querySelector("#userName").value;

    
    if(localStorage.getItem(email)!= undefined){
        let user = localStorage.getItem(email);
        user = JSON.parse(user);
        if (user.userName == userName){
            localStorage.setItem(userName,email );
            localStorage.setItem("userName",userName);
            localStorage.setItem("email", email);
            localStorage.setItem("Level",1);
            GoToGame();
        }
        else{
            alert("נוסע לא קיים!");
        }
        
    }
    else{
        alert("נוסע לא קיים!");
    }

}
function Register(){


    let userName = document.querySelector("#userName").value;
    let email = document.querySelector("#email").value;
    let age = document.querySelector("#age").value;

    let user = {
        userName: userName,
        email: email,
        age: age
    };

    let fine = true;
    let nameFine = true;
    let emailFine=true;
   
        let name = userName.slice(0, 1);
        if (!(userName.trim().length >= 2 && userName[0] !== ' ' && userName.trim() !== '')){
            nameFine = false;
        }
        const CheckEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let j = CheckEmail.test(email);
        if (!CheckEmail.test(email)){
            emailFine = false;
        }

        if (!nameFine || !emailFine){
            fine = false;
            alert("קלט לא תקין");
        }
        
        let currentMail =localStorage.getItem(email);
    if (currentMail != undefined && currentMail != null && fine) {
        GoToLogin();

        alert("כבר נסעת אתנו לעבר!\nהכנס ישירות למכונת הזמן הפרטית שלך!");
        //window.location.href = '../html/login.html';
        
     }
     else if (fine){
        localStorage.setItem(email, JSON.stringify(user));
        localStorage.setItem("userName",userName);
        localStorage.setItem("email", email);
        localStorage.setItem("Level",1);
        GoToGame();
    }
}

function GoToRegister(){
    window.location.href = '../html/register.html';
}

function GoToLogin(){
    window.location.href = '../html/login.html';
}
function GoToGame(){
    window.location.href = '../html/timeShip.html';

}


/**/


function clickItems(){
    score = event.currentTarget.style.backgroundColor == "green"?score+5 :score -5;
   document.querySelector("#score").innerHTML = score;
    clearInterval(interval);
   console.log("clickItems");
    setColors();
    setIntervalColor();
}