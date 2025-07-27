let userScore=0;
let compScore=0;

const Randomnum = ()=>{
    let choices=["rock","paper","scissors"];
    let a = Math.floor(Math.random()*3);
    return choices[a];
}
const playGame = (choiceid)=>{
    let usc = document.querySelector("#user-score");
    let csc = document.querySelector("#comp-score");
    let messg=document.querySelector("#msg");
    let a = Randomnum();
    console.log("User choice=",choiceid);
    console.log("Comp choice=",a);
    if (a===choiceid){
        usc.textContent=userScore;
        csc.textContent=compScore;
        messg.textContent="Draw.Play Again";
        messg.style.backgroundColor="yellowgreen";
        console.log("Draw");
    }else if ((a==="rock" && choiceid==="scissors")
        ||(a==="paper" && choiceid==="rock")
        ||(a==="scissors" && choiceid==="paper")){
        messg.textContent=`Computer won. Computer chose ${a}`;
        compScore++;
        usc.textContent=userScore;
        csc.textContent=compScore;
        messg.style.backgroundColor="red";
        console.log("Comp win");
    }else{
        messg.textContent=`You win! Computer chose ${a}`;
        userScore++;
        usc.textContent=userScore;
        csc.textContent=compScore;
        messg.style.backgroundColor="green";
        console.log("User win");
    }
}

const choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let choiceid=choice.getAttribute("id");
        playGame(choiceid);
    })
})
let reset= document.querySelector(".reset");
reset.addEventListener("click",()=>{
    let usc = document.querySelector("#user-score");
    let csc = document.querySelector("#comp-score");
    userScore=0;
    compScore=0;
    usc.textContent=userScore;
    csc.textContent=compScore;
})