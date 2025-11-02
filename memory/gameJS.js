var pictcher=["imag1","imag2","imag3","imag4","imag5","imag6","imag7","imag8"];
var randomPictcher=[];

function level(){
    let selectLavel=event.currentTarget.className;
    let numCard;
    if(selectLavel=="easy")
        numCard=4;
    else if(selectLavel=="soso")
        numCard=6;
    else
        numCard=8;
    let newpictcher=[];
    for (let i = 0; i < numCard; i++) {
       newpictcher[i]=pictcher[i];
    }
    for (let i = 0; i < numCard*2; i++) {
            let card=newpictcher[Math.floor(Math.random()*numCard)];
            let countCard=0;
            for (let j= 0; j< randomPictcher.length;j++) {
                if(randomPictcher[j]==card)
                countCard++;
            }
            if(countCard<2){
              randomPictcher[i]=card;
              let newCard=document.createElement("div");
              document.querySelector(".cards").append(newCard);
              newCard.className="styleCard";
              newCard.id=randomPictcher[i];
              newCard.onclick=clickOfCard;
            }
            else
                i--;
            } 
            document.querySelector(".select").className="hidding";
            document.querySelector(".returnHome").className="returnToHome";
            }  
        var whateThePlayerSelect=[];
        var whateClassThePlayerSelect=[];
        var cardSaccsed=[];
        var indexOfTwoCard=0;
        var flag=false;

        function clickOfCard(){
            if(event.currentTarget.className!="styleSaccsed"&&whateClassThePlayerSelect.indexOf(event.currentTarget.className)==-1&&flag==false){
            indexOfTwoCard++;
            event.currentTarget.className=event.currentTarget.id;
            whateThePlayerSelect.push(event.currentTarget);
            whateClassThePlayerSelect.push(event.currentTarget.className);
            if(whateThePlayerSelect.length==2)
             {
                let card1=whateThePlayerSelect[0];
                let card2=whateThePlayerSelect[1];
                flag=true;
                indexOfTwoCard=0
                whateThePlayerSelect=[];
                whateClassThePlayerSelect=[];
                if(card1.className!=card2.className){
                    setTimeout(function(){ 
                        card1.className="styleCard" 
                        card2.className="styleCard"
                        flag=false;
                        whateThePlayerSelect=[]; },
                         500);
                }
                else{
                    setTimeout(function(){ 
                        cardSaccsed.push(card1.className);
                        card1.className="styleSaccsed" 
                        card2.className="styleSaccsed"
                        flag=false;
                        whateThePlayerSelect=[];
                    },
                         500);
                }
                
             }
            }
        }
