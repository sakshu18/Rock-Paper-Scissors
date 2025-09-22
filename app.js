let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    msg.innerText = "Game was Draw. Play Again !";
    msg.style.backgroundColor= "#081b31";
};

const showWinner=(userWin,userChoice,compchoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor= "green";
    }else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText = `You lost! ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
}

const playeGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //Generate computer choice
    const compchoice=genCompChoice();
    console.log("comp choice=",compchoice);

    if(userChoice===compchoice){
        //Draw Game
        drawGame();
    }else{
        let userWin= true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin= compchoice === "paper"? false:true;
        }else if(userChoice==="paper"){
            //scissors,rock
            userWin= compchoice === "scissors"? false:true;
        }else{
            //rock,paper
            userWin= compchoice === "rock"? false:true;
        }
        showWinner(userWin,userChoice,compchoice);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playeGame(userChoice);
    })
})
