
 function Guards(){
    rightAudio.play();
    coins += 33;
    coindDiv.innerText = coins+" נקודות.";
    alert(" מצויין!! נכון מאוד גם את בגתן ותרש תלו על העץ!");
    setTimeout(() => {
      Map();
    }, 1000);
 }
 function Map(){

    let askText = document.createElement("h3");
    document.querySelector("#asking").append(askText);
    askText.style.fontFamily="myfont";
    askText.style.position="absolute";
    askText.style.top="10px";
    askText.style.right="150px";
    askText.style.color="black";
    askText.innerText=" הידעת איפה המן היה דר לפני שהתמנה למשנה למלך אחשורוש?";

    let img = document.createElement("img");
    document.querySelector("#asking").append(img);
    img.src = "../photos/map.jpg";
    img.style.marginTop = "3%";
    img.style.marginLeft = "10%";
    img.style.width = "90%";
    img.style.height = "110%";

    let cityesAndCuntry=["שושן","קרצום","הודו","כוש","בבל"];
    for (let i = 1; i < 6; i++) {
      let divPoint = document.createElement("div");
      document.querySelector("#asking").append(divPoint);
      divPoint.style.position = "absolute";
      divPoint.style.display="flex";
      divPoint.style.width="10%";
      divPoint.className="divPoint"+i

      let point = document.createElement("div");
      document.querySelector(".divPoint"+i).append(point);
      point.className="point";
      point.onclick=SendAnsMap;
      if(cityesAndCuntry[i-1]=="קרצום")
      point.id="currctAns";

      let textPoint = document.createElement("h8");
      document.querySelector(".divPoint"+i).append(textPoint);
      textPoint.style.fontFamily="myfontbold";
      textPoint.innerText=cityesAndCuntry[i-1];
    }
 }
 function SendAnsMap(){
   let ans = event.currentTarget;
      if (ans.id=="currctAns") {
         foundAudio.play();
         ColorWheel(4);
         alert("כל הכבוד! מצאת את הרבע האחרון! עכשיו ההגה שלם!!נשאר לך למצוא דבר אחרון חביב את המפתח לחזור למכונת הזמן...!");
         askIndex++;
         Back();
         var mordechyAsk = new Audio('../saund/Mordechy.wav');
         mordechyAsk.play();
      }
      else{
         erorAudio.play();
         alert("טעות! נסה בשנית.");
      }
 }

function Mordechy(){
   alert("מזל טוב! סיימת את המשחק, ברכותינו!")
   foundAudio.play();
   document.getElementById("key").style.opacity = "100%";
   
   setTimeout(() => {
      PlayVideo("purim");
   }, 3000);
}
   
   