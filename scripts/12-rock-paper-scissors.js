function pickCompMove(){
  const randomNumber= Math.random();
  let computerMove ='';
  if(randomNumber >= 0 && randomNumber <= 1/3){
    computerMove = 'Rock';
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Paper';
  }else if(randomNumber >= 2/3 && randomNumber <= 1){
    computerMove = 'Scissors';
  }
  return computerMove;
  ;
  }

  let score= JSON.parse(localStorage.getItem('score')) || 
      {
        wins: 0,
        losses: 0,
        ties:0,
      };
  
   /* if (!score){
      score = {
        wins: 0,
        losses: 0,
      };*/
      //JSON.parse(localStorage.getItem('score')) || {
   // wins: 0,
    //losses: 0
  //};
  
  
  
  document.querySelector('.js-rock-button').addEventListener ('click',() => {
    playGame('Rock');
  })
  document.querySelector('.js-paper-button').addEventListener ('click',() => {
    playGame('Paper');
  })
  document.querySelector('.js-scissors-button').addEventListener ('click',() => {
    playGame('Scissors');
  })
  document.body.addEventListener('keydown',(Event) =>{
    if(Event.key === 'r'){
      playGame('Rock');
    }
    else if(Event.key === 'p'){
      playGame('Paper');
    }
    else if(Event.key === 's'){
      playGame('Scissors');
    }
  });
  
  function playGame(playerMove){
    const computerMove = pickCompMove();
    let result='';
    if (playerMove === 'Scissors'){
      if (computerMove === 'Rock'){
        result = 'You Lose';
      }
      else if(computerMove === 'Scissors'){
        result = 'Tie';
      }
      else if(computerMove === 'Paper'){
        result = 'You Win';
      }
    }
    
    else if (playerMove === 'Paper'){
      if(computerMove === 'Rock'){
        result = 'You Win';
      }
      else if (computerMove === 'Paper'){
        result = 'Tie';
      }
      else if (computerMove === 'Scissors'){
        result = 'You Lose';
      }
    }

    else if (playerMove === 'Rock'){
      if (computerMove === 'Rock' ){
        result = 'Tie';
      }
      else if(computerMove === 'Paper'){
        result = 'You Lose';
      }
      else if( computerMove === 'Scissors'){
        result = 'You Win';
      }
    }
    if(result === 'You Win'){
      score.wins += 1;
    }
    else if(result === 'You Lose'){
      score.losses += 1;
    }
    else if(result === 'Tie'){
      score.ties += 1;
    }
    console.log(score);
    localStorage.setItem('score',JSON.stringify(score));
  

    upadateScoreElement();

    document.querySelector(".js-result").innerHTML = result;
   /* alert(`You Picked ${playerMove} and Computer Picked ${computerMove}. ${result} Wins: ${score.wins} Losses: ${score.losses} Ties:${score.ties}`)*/

   document.querySelector(".js-moves").innerHTML = `You <img src="/images/${playerMove}-emoji.png" class="move-icon"> <img src="/images/${computerMove}-emoji.png" class="move-icon"> Computer`
  
}

  function upadateScoreElement(){
    document.querySelector(".js-score").innerHTML= `Wins: ${score.wins} Losses: ${score.losses} Ties:${score.ties}`;
  }
  
  /*function autoPlayerMove(){
    const randomNumber= Math.random();
 
  if(randomNumber >= 0 && randomNumber <= 1/3){
    autoPlayerMove = 'Rock';
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    autoPlayerMove = 'Paper';
  }else if(randomNumber >= 2/3 && randomNumber <= 1){
    autoPlayerMove = 'Scissors';
  }
 return  autoPlayerMove;
};

console.log(autoPlayerMove());
*/
let isAutoPlaying = false;
let inervalId;
function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(() => {
      const playerMove = pickCompMove();
      playGame(playerMove);
    },1000);
    isAutoPlaying = true;
  }
  else{
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
  
}

/*let isAutoPlaying = false;
let intervalId;

//const autoPlay = () => {

//};
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;

  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}*/