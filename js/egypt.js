function Hiroglifs(place){
    /**/
    //doing = true;
    input = document.createElement("input");
    document.querySelector("#asking").append(input);
    input.type = "text";
    input.style.position = "absolute";
    input.style.marginTop = "43%";
    input.style.marginRight = "45%";
    input.placeholder = "מה כתוב כאן?";
    input.required = true;
    input.id = "input";   

    let send = document.createElement("button");
    document.querySelector("#asking").append(send);
    send.type = "submit";
    send.onclick = CheckHirog;
    send.textContent = "שלח";
    send.style.position = "absolute";
    send.style.marginTop = "43%";
    send.style.marginRight = "70%";


    let img = document.createElement("img");
    document.querySelector("#asking").append(img);
    img.src = "../photos/hiroglifs.jpg";
    img.style.marginTop = "3%";
    img.style.marginLeft = "10%";
    img.style.width = "90%";
    img.style.height = "110%";
}
function CheckHirog(){
    let ans = document.getElementById("input");
    if (ans.value == "ולבנים אומרים לנו") {
        rightAudio.play();
        coins += 17;
        coindDiv.innerText = coins+" נקודות.";
        askIndex++;
        Back();
    }
    else{
        erorAudio.play();
        input.value = "";
        input.placeholder = "טעות! נסה בשנית.";
    }
}

function Stone(){
    doing = true;

    let img = document.createElement("img");
    document.querySelector("#asking").append(img);
    img.src = "../photos/‏‏PyramidPuzzle.jpg";
    img.style.marginTop = "10%";
    img.style.marginRight = "40%";
    

    let ans1 = document.createElement("img");
    document.querySelector("#asking").append(ans1);
    ans1.onclick = CheckPyramid;
    ans1.src="../photos/PyramidPuzzle\ -\ 1.jpg";
    ans1.style.position = "absolute";
    ans1.className = "ans1";

    let ans2 = document.createElement("img");
    document.querySelector("#asking").append(ans2);
    ans2.onclick = CheckPyramid;
    ans2.src= "../photos/‏‏PyramidPuzzle\ -\ 2.jpg";
    ans2.style.position = "absolute";
    ans2.className = "ans2";

    let ans3 = document.createElement("img");
    document.querySelector("#asking").append(ans3);
    ans3.onclick = CheckPyramid;
    ans3.src="../photos/‏‏PyramidPuzzle\ \ -\ 3.jpg";
    ans3.style.position = "absolute";
    ans3.className = "ans3";

    let ans4 = document.createElement("img");
    document.querySelector("#asking").append(ans4);
    ans4.onclick = CheckPyramid;
    ans4.src="../photos/‏‏PyramidPuzzle-4.jpg";
    ans4.style.position = "absolute";
    ans4.className = "ans4";

}
function CheckPyramid(){
    let ans = event.currentTarget;
    if (ans.className == "ans3"){
        rightAudio.play();
        coins += 17;
        coindDiv.innerText = coins+" נקודות.";
        askIndex = 2;
        alert("מצוין!, הקשב היטב...");
        Back();
        PlayAsk3()
    }
    else{
        erorAudio.play();
        alert("לא נכון!\nנסה שנית!");
    }
}

function PlayAsk3(){
    let ask3Audio = new Audio('../saund/flower-ask.wav');
    attentionAudio.play();
    ask3Audio.play();
       
}
function Drudgery(){
    askIndex++;
    alert("כל הכבוד! מצאת כבר רבע הגה. מצא את המפתח כדי לצאת ממצרים ולחזור למכונת הזמן!");
    foundAudio.play();
    ColorWheel(1);
    setTimeout(() => {
        Order();
    }, 1000);
}

function Order(){
    doing = true;
    
    place.style.backgroundColor = "#f7d696";
    place.style.width = "685px";
    place.style.height = "504px";
    place.style.top = "75px";
    place.style.marginRight = "15%";

    let instruction = document.createElement("h1");
    place.append(instruction);
    instruction.innerText = "מספר את התמונות על פי סדר המאורעות!";

    back = document.createElement("button");
    document.querySelector("#asking").append(back);
    back.onclick = Back;
    back.textContent = "חזור";
    back.style.position = "absolute";
    back.style.marginTop = "53%";
    back.style.marginRight = "10%";

    let send = document.createElement("button");
    document.querySelector("#asking").append(send);
    send.type = "submit";
    send.onclick = CheckOrder;
    send.textContent = "שלח";
    send.style.position = "absolute";
    send.style.marginTop = "53%";
    send.style.marginRight = "80%";

    let ans1 = document.createElement("img");
    document.querySelector("#asking").append(ans1);
    ans1.src="../photos/dam.jpg";
    ans1.style.position = "absolute";
    ans1.className = "ans1";
    ans1.style.right = "11px";
    ans1.style.top = "186px";

    let ans2 = document.createElement("img");
    document.querySelector("#asking").append(ans2);
    ans2.src= "../photos/shiabud.jpg";
    ans2.style.position = "absolute";
    ans2.className = "ans2";
    ans2.style.right = "177px";
    ans2.style.top = "186px";


    let ans3 = document.createElement("img");
    document.querySelector("#asking").append(ans3);
    ans3.src="../photos/yam-suf.jpg";
    ans3.style.position = "absolute";
    ans3.className = "ans3";
    ans3.style.right = "352px";
    ans3.style.top = "186px";


    let ans4 = document.createElement("img");
    document.querySelector("#asking").append(ans4);
    ans4.src="../photos/arov.jpg";
    ans4.style.position = "absolute";
    ans4.className = "ans4";
    ans4.style.right = "516px";
    ans4.style.top = "186px";

    let input1 = document.createElement("input");
    document.querySelector("#asking").append(input1);
    input1.type="number";
    input1.style.position = "absolute";
    input1.id = "input1";
    input1.style.right = "11px";
    input1.style.top = "143px";
    input1.required = true;
    input1.max = "4";
    input1.min = "1";

    let input2 = document.createElement("input");
    document.querySelector("#asking").append(input2);
    input2.type="number";
    input2.style.position = "absolute";
    input2.id = "input2";
    input2.style.right = "177px";
    input2.style.top = "143px";
    input2.required = true;
    input2.max = "4";
    input2.min = "1";

    let input3 = document.createElement("input");
    document.querySelector("#asking").append(input3);
    input3.type="number";
    input3.style.position = "absolute";
    input3.id = "input3";
    input3.style.right = "352px";
    input3.style.top = "143px";
    input3.required = true;
    input3.max = "4";
    input3.min = "1";

    let input4 = document.createElement("input");
    document.querySelector("#asking").append(input4);
    input4.type="number";
    input4.style.position = "absolute";
    input4.id = "input4";
    input4.style.right = "516px";
    input4.style.top = "143px";
    input4.required = true;
    input4.max = "4";
    input4.min = "1";

}
function CheckOrder(){
    let correct = true;
    let ansenrs = [2,1,4,3];
    for (let i = 1; i <= 4; i++) {
        let ans = document.getElementById("input"+i);
        if (ans.value != ansenrs[i-1]){
            correct = false;
        }
    }
    if (correct){
        alert("כל הכבוד! מצאת את המפתח לגאולה!");
        foundAudio.play();
        document.getElementById("key").style.opacity = "100%";
        Back();
        setTimeout(() => {
            PlayVideo("egypt");
        }, 3000);
        
    }
    else{
        erorAudio.play();
        alert("טעות! נסה בשנית.");
    }
}
    