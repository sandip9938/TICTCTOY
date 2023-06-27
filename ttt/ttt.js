console.log("tictactoe");
let music = new Audio("music.mp3");
let turn = new Audio("t .mp3");
let gameover = new Audio("gameover.mp3");
let turnx = "X";
let isgameover=false
let reset = document.getElementById('reset')

const changeTurn = () => {
  return turnx == "X" ? "0" : "X";
};
const checkwin = () => {
    let boxtext=document.getElementsByClassName('boxtext')
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
  ]
  wins.forEach(e=>{
if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=='')) {
document.querySelector('.info').innerText=boxtext[e[0]].innerText +" Won"
isgameover=true
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
}


  })
}
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turnx;
      turnx = changeTurn();
      turn.play();
      checkwin();
      if(! isgameover){
      document.getElementsByClassName ("info") [0].innerText = "Turn for " + turnx;
    }
    }
  });
});
reset.addEventListener('click',()=>{
  let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText= " "
    })
    turnx ="X"
  isgameover=false
        document.getElementsByClassName ("info") [0].innerText = "Turn for " + turnx;
   
        
})
