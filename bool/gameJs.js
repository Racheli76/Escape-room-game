//document.querySelector(".color1").classList
let ifThePlayerSuccsed=false;
let colors=[];
let index=0;
let stopIndex=0;
function onclick1(){
if(stopIndex<10){
 if(index==0)
 {
  let newDiv=document.createElement("div");
  document.querySelector(".MyGasses").append(newDiv);
  newDiv.className="newDiv"+stopIndex;
  newDiv.style.display="flex";
  newDiv.style.marginBottom="5%";
  let number=document.createElement("h4");
  document.querySelector(".numGass").append(number);
  number.textContent=stopIndex+1;
  number.style.marginBottom="0%";
  number.style.marginTop="50%";
 }
  if(index<4)
  {
   if(colors.indexOf(event.currentTarget.className)==-1){
    colors.push(event.currentTarget.className);
    let elem1=document.createElement("div");
    document.querySelector(".newDiv"+stopIndex).append(elem1);
    elem1.className=event.currentTarget.className;
    if(index==0)
    elem1.style.marginRight="0%";
    else
   elem1.style.marginRight="2%";
   index++;
   }
 //else
// window.prompt("בחרת בניחוש זה את הצבע הזה אנא בחר צבע שונה");
}
}
if(index==4){
  let black=0;
  let white=0;
  for(let i=0;i<4;i++){
    if(colors[i]==randomColor[i])
    black++;
  else if(randomColor.indexOf(colors[i])!=-1)
    white++;
  }
  let saccsed=document.createElement("div");
    document.querySelector(".saccsed").append(saccsed);
    saccsed.className="saccsed"+stopIndex;
    saccsed.style.display="flex";
    saccsed.style.marginTop="60%";
  for(let i=0;i<black;i++)
  {
    let blackDiv=document.createElement("div");
    document.querySelector(".saccsed"+stopIndex).append(blackDiv);
    blackDiv.className="black"
  } 
  for(let i=0;i<white;i++)
  {
    let whiteDiv=document.createElement("div");
    document.querySelector(".saccsed"+stopIndex).append(whiteDiv);
    whiteDiv.className="white";
  } 
  if(black==4){
    ifThePlayerSuccsed=true;
    let youSacssed=document.createElement("h2");
    document.querySelector(".youSaccsed").append(youSacssed);
    youSacssed.textContent="איזה יופי! ניצחת!!!";
    let youSacssed1=document.createElement("h2");
    document.querySelector(".theList").append(youSacssed1);
    youSacssed1.textContent="הפתרון הנכון הוא:";
    for(let i=0;i<4;i++){
      let elem=document.createElement("div");
      document.querySelector(".theTrueList").append(elem);
      elem.style.marginRight="2%";
      elem.className=randomColor[i];
      }
    stopIndex=10;
  }
  index=0;
  colors=[];
  stopIndex++;
}
 
 if(stopIndex==10){
if(ifThePlayerSuccsed==false){
  let youSacssed=document.createElement("h2");
  document.querySelector(".youSaccsed").append(youSacssed);
  youSacssed.textContent="הפסדת!! לא נורא שחק שוב אולי תצליח בפעם הבא";
  let youSacssed1=document.createElement("h2");
    document.querySelector(".theList").append(youSacssed1);
    youSacssed1.textContent="הפתרון הנכון הוא:";
    for(let i=0;i<4;i++){
      let elem=document.createElement("div");
      document.querySelector(".theTrueList").append(elem);
      elem.style.marginRight="2%";
      elem.className=randomColor[i];
      }
  }
 }
}
let allColor=["color1","color2","color3","color4","color5","color6"];
let randomColor=[];
for(let i=0;i<4;i++){
 let helpColor=allColor[Math.floor(Math.random()*6)];
  if(randomColor.length>0){
    if(randomColor.indexOf(helpColor)==-1)
       randomColor[i]=helpColor;
    else
      i--;
  }
 else
    randomColor[i]=helpColor;
}
//for(let i=0;i<4;i++){
//let elem=document.createElement("div");
//document.querySelector(".theTrueList").append(elem);
//elem.style.marginRight="2%";
//elem.className=randomColor[i];
//}