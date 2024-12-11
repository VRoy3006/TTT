let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let turn0=true;
let newgame=document.querySelector("#new-btn");
let msgContain=document.querySelector(".hide");
let msg=document.querySelector("#msg");
titCo.classList.remove("hide2");
game.classList.remove("hide2");
btn.classList.remove("hide2");
const winPatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [1,4,7],
  [0,3,6],
  [2,5,8],
  [2,4,6]
];
const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false; 
  }
}
const resetGame=()=>{
  turn0=true;
  enableBoxes();
  msgContain.classList.add("hide");
  tit.classList.remove("hide2");
game.classList.remove("hide2");
btn.classList.remove("hide2");
}
boxes.forEach((box)=>{box.addEventListener("click",()=>{
  console.log("box was clicked");
  if(turn0){
    box.innerText="0";
    turn0=false;
  }
  else{
    box.innerText="X";
    turn0=true;
  }
  box.disabled=true;
  box.color="black";
  checkWinner();
})})
const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true; 
  }
}


const showWinner=(winner)=>{
  msg.innerText=`Winner is ${winner}`
  msg.classList.remove("hide");
  tit.classList.add("hide2");
game.classList.add("hide2");
btn.classList.add("hide2");
  disableBoxes();
}

const checkWinner=()=>{
  for(let pattern of winPatterns){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    if(pos1val!=""&&pos2val!=""&&pos3val!=""){
    if(pos1val===pos2val&&pos2val===pos3val)
      {
        console.log("Winner\t",pos1val);
        showWinner(pos1val);
      }
    }
  }
}
newgame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);