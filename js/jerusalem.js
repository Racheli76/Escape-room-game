function Sheep(){
    alert("מצאת רבע הגה! כל הכבוד!");
    foundAudio.play();
    ColorWheel(2);
    askIndex++;
    Quiz();

}

function Quiz(){
    let send = document.createElement("button");
    document.querySelector("#asking").append(send);
    send.type = "submit";
    send.onclick = GoToGate;
    send.textContent = "שלח";
    send.style.position = "absolute";
    send.style.marginTop = "5%";
    send.style.marginRight = "85%";

    place.style.backgroundColor = "rgb(247, 214, 150)";
    let askA, askB, askC;
    askA = document.createElement("h4");
    askB = document.createElement("h4");
    askC = document.createElement("h4");
    
    let buttA1, buttA2, buttA3, buttB1, buttB2, buttB3, buttC1, buttC2, buttC3;
    buttA1 = document.createElement("button");
    buttA2 = document.createElement("button");
    buttA3 = document.createElement("button");
    buttB1 = document.createElement("button");
    buttB2 = document.createElement("button");
    buttB3 = document.createElement("button");
    buttC1 = document.createElement("button");
    buttC2 = document.createElement("button");
    buttC3 = document.createElement("button");

    buttA1.onclick = CheckQuis;
    buttA2.onclick = CheckQuis;
    buttA3.onclick = CheckQuis;
    buttB1.onclick = CheckQuis;
    buttB2.onclick = CheckQuis;
    buttB3.onclick = CheckQuis;
    buttC1.onclick = CheckQuis;
    buttC2.onclick = CheckQuis;
    buttC3.onclick = CheckQuis;

    let ans1, ans2, ans3;
    ans1 = document.createElement("div");
    ans1.style.display = "flex";
    ans2 = document.createElement("div");
    ans2.style.display = "flex";
    ans3 = document.createElement("div");
    ans3.style.display = "flex";

    place.append(askA);
    askA.textContent = "מי בנה את בית המקדש השני?";
    place.append(ans1);
    ans1.append(buttA1);
    ans1.append(buttA2);
    ans1.append(buttA3);
    buttA1.textContent = "ד- שלמה המלך ואנשי כנסת הגדולה";
    buttA2.textContent = "ש- אנשי כנסת הגדולה והורדוס";
    buttA3.textContent = "ל- שלמה המלך, עזרא הסופר והורדוס";
    buttA1.className = "buttQuis";
    buttA2.className = "buttQuis";
    buttA3.className = "buttQuis";
    

    place.append(askB);
    askB.textContent = "כמה שנים עמד על מכונו?";
    place.append(ans2);
    ans2.append(buttB1);
    ans2.append(buttB2);
    ans2.append(buttB3);
    buttB1.textContent = "נ- 410 שנה";
    buttB2.textContent = "פ- 415 שנה";
    buttB3.textContent = "ע- 420 שנה";
    buttB1.className = "buttQuis";
    buttB2.className = "buttQuis";
    buttB3.className = "buttQuis";

    place.append(askC);
    askC.textContent = "באיזו שנה חרב?";
    place.append(ans3);
    ans3.append(buttC1);
    ans3.append(buttC2);
    ans3.append(buttC3);
    buttC1.textContent = "ר-     ג'א תתכ'ח";
    buttC2.textContent = "א-     ג'א תת'ל";
    buttC3.textContent = "ס-     ג'א תתכ'ז";
    buttC1.className = "buttQuis";
    buttC2.className = "buttQuis";
    buttC3.className = "buttQuis";

    place.style.right = "600px";
    place.style.top = "100px";

    back.style.marginTop = "5%";
    back.style.marginRight = "5%";

    

    
}
var countRights=0;
function CheckQuis(){
    let answer = event.currentTarget.textContent.charAt(0);
    
    let corrects = "שער";
    if (corrects.includes(answer)){
        countRights++;
        rightAudio.play();
        let corBut = event.currentTarget;
        corBut.onclick = "";
        corBut.style.backgroundColor = "#FFF6E4";
        corBut.style.border = "#ff9400 1px solid";
        corBut.style.color = "#ff9400";

    }
    else{
        erorAudio.play();
        alert("טעות!");
    }
}
function GoToGate(){
    if (countRights == 3) {
        alert("שים לב היטב לתשובות, לא תהיה אפשרות לחזור");
        Back();
        askIndex++;
        rightAudio.play();
        coins += 33;
        coindDiv.innerText = coins+" נקודות.";
        setTimeout(() => {
            alert("והפתעה!\nצופר מיוחד, רבע הגה נוסף!");
            foundAudio.play();
            ColorWheel(3); 
        }, 600);
    }
}
var checkBox1, checkBox2, checkBox3, checkBox4, labal1, labal2, labal3, labal4, checkBoxes;
function Gate(){
    back.style.right = "-161px";
    back.style.top = "318px";

    let send = document.createElement("button");
    document.querySelector("#asking").append(send);
    send.type = "submit";
    send.onclick = CheckGate;
    send.textContent = "שלח";
    send.style.position = "absolute";
    send.style.marginTop = "5%";
    send.style.marginRight = "85%";
    send.style.right = "8px";
    send.style.top = "544px";



    place.style.backgroundColor = "rgb(247, 214, 150)";
    place.style.right = "712px";
    place.style.top = "28px";
    

    let header = document.createElement("h4");
    header.innerText = "השער העליון- השער המפריד בין עזרת נשים לעזרת ישראל:"
    place.append(header);

    let img = document.createElement("img");
    img.src = '../photos/nikanorGate.jpg';
    place.append(img);
    img.style.marginTop = "3%";
    img.style.marginRight = "15%";
    img.style.width = "70%";

    let form = document.createElement("form");
    place.append(form);
    //form.style.display = "flex";

    let ques1 = document.createElement("div");
    form.append(ques1);
    let ques2 = document.createElement("div");
    form.append(ques2);

    let ask1 = document.createElement("h4");
    ques1.append(ask1);
    ask1.innerText = "מהו שמו העיקרי של שער זה- השער העליון?";
    
    input = document.createElement("input");
    ques1.append(input);
    input.type = "text";
    input.style.marginRight = "40%";

    let ask2 = document.createElement("h4");
    ques2.append(ask2);
    ask2.innerText = "סמני את התיאורים המתאימים לזה שהשער קרוי בשמו!"

    checkBox1 = document.createElement("input");
    checkBox2 = document.createElement("input");
    checkBox3 = document.createElement("input"); 
    checkBox4 = document.createElement("input");
    
    checkBox1.type = "checkbox";
    checkBox2.type = "checkBox";
    checkBox3.type = "checkBox";
    checkBox4.type = "checkBox";

    checkBoxes = [checkBox1, checkBox2, checkBox3, checkBox4];
    let labels = ["גוי", "יהודי" , "רומאי" , "צדיק"];
    for (let i = 0; i  < labels.length; i++) { 
        ques2.append(checkBoxes[i]);
        checkBoxes[i].style.width = "2%";
        checkBoxes[i].style.margin = "2%";

        let labal = document.createElement("label");
        ques2.append(labal);
        labal.textContent = labels[i];
        
    }
    checkBox1.style.marginRight = "25%";
}

function CheckGate(){
    let name = input.value;
    let checkBoxIsRight = true;
    let answers = [true,true,false,true];
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked != answers[i]) {
            checkBoxIsRight = false;
        }
    }
    if (name == "ניקנור" && checkBoxIsRight) {
        foundAudio.play();
        document.getElementById("key").style.opacity = "100%";
        
        setTimeout(() => {
            PlayVideo("jerusalem");
        }, 3000);
    }
    else{
        erorAudio.play();
        alert("לא נכון!!!");
    }
}