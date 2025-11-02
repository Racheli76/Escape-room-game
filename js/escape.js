
var level;
var askIndex = -1;
var functions = ["Hiroglifs", "Stone", "Drudgery", "Order","Sheep","Quiz","Gate","Guards" ,"Mordechy"];
var place = document.getElementById("asking");
var input;
var back;
var coins =0;
var coindDiv = document.getElementById("coins");
var doing = false;
var foundAudio =  new Audio('../saund/find.mp3');
var attentionAudio = new Audio('../saund/attention.mp3');
var erorAudio = new Audio('../saund/error.mp3');
var rightAudio = new Audio('../saund/right.mp3');
var video = document.createElement("video");
/*******/
var buttons = document.querySelectorAll("button");
//מוודא שהכפתורים לא יהיו ניתנים ללחיצה כאשר פותחים את המגילה
buttons.forEach(function(but){
    if (but.className != "go" && but.className != "play" && but.className != "logout"){
        but.style.display = "none";
    }
        
});


//פונקציות כלליות
function Ask(){
    let current = event.currentTarget;
    if ((functions[askIndex]== current.id || askIndex==3) && doing == false) {
        doing = true;
        if (askIndex != 2 && askIndex!=7 && askIndex!=8){
            back = document.createElement("button");
            document.querySelector("#asking").append(back);
            back.onclick = Back;
            back.textContent = "חזור";
            back.style.position = "absolute";
            back.style.marginTop = "43%";
            back.style.marginRight = "30%";
        }
        window[functions[askIndex]](place); // קריאה לפונקציה מתוך המערך
    }
}

function Back(){
    while (place.firstChild) {
        place.removeChild(place.firstChild); //מוחק את כל הילדים של אסקינג
    } 
    place.style.backgroundColor = "rgb(255 0 0 / 0%)";
    doing = false;
   
}

var scrollIsOpen = true;
function RemovePaper(){
    /* */
    if (scrollIsOpen){
        scrollIsOpen=false;
        document.getElementById("scroll").style.display="none";
        askIndex++;
        buttons.forEach(function(but){
            but.style.display = "block";
        });

    }
}

function ColorWheel(num){
    let wheel = document.getElementById("wheel-"+num);
    wheel.style.opacity = "100%";
}
 
function PlayVideo(period){
    let main = document.querySelector("main");
    while (main.firstChild) {
        main.removeChild(main.firstChild); //מוחק את כל הילדים של מיין
    } 
    
    level=localStorage.getItem("Level");
    level++;
    localStorage.setItem("Level",level);
    
    main.append(video);
    video.src = "../videos/"+period+"-exit.mp4";
    video.style.height = "89%"; 
    video.style.left = "0px";
    video.style.marginRight = "10%";
    
    video.play();
    
    setTimeout(() => {
        
        window.location.href = '../html/timeShip.html';
    },14000);
}
function LogOut(){
    localStorage.setItem("userName", "");
    localStorage.setItem("email","");
    localStorage.setItem("Level", 1);
    window.location.href = "../html/login.html";

}
function Go(){
    if (localStorage.getItem("Level") ==1){
        window.location.href = '../html/egypt.html';
    }
    else if (localStorage.getItem("Level") ==2){
        window.location.href = '../html/jerusalem.html';
    }
    else if (localStorage.getItem("Level") == 3){
        window.location.href = '../html/purim.html';
    }

}
//setTimeout(() => {
   Name();
//},5000);
function Name(){
    let myname = document.getElementById("hello");
    let userData = localStorage.getItem("userName");
    myname.innerText = "שלום "+userData ;
}

function OnLoad(){
    let email = localStorage.getItem("email");
    if(email ==undefined || email ==""){
        setTimeout(()=>{
           window.location.href = "../html/login.html";
           alert("יש להרשם לאתר לפני זה!!!!");
        },1000)
    }
    

    if (localStorage.getItem("Level")>1){
        coins=34;
        askIndex =3;
        ColorWheel(1);
        if(localStorage.getItem("Level") > 2){
            ColorWheel(2);
            ColorWheel(3);
            coins += 33;
            askIndex = 6;
        }
        if(localStorage.getItem("Level") > 3 ){
            ColorWheel(4);
            coins += 33;
            Finish();
        }
    }  
    coindDiv.innerText = coins+" נקודות.";
}






var playing;
function PlayIntodiction(){
    if (!playing){
        playing = true;
        let introduction = new Audio('../saund/introduction.wav');
        introduction.play();
    }
    setTimeout(() => {
        playing = false;
    }, 32047);
}

function Finish(){
    alert("מזל טוב! חזרת להווה.\nרוץ הביתה ואל תשכח מה שלמדת בעבר...");
    let clapsAudio = new Audio('../saund/applause.mp3');
    clapsAudio.play();
    setTimeout(() => {
var rightAudio = new Audio('../saund/right.mp3');
document.getElementById("timeShip").src = "../photos/claps.jpg";
    }, 3000);
    
    setTimeout(() => {
        LogOut();
    }, 5000);
    
}