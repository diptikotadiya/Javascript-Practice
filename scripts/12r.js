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
  document.querySelector('.js-auto-play-button').addEventListener('click',()=>{
    autoPlay();
  })
  document.querySelector('.js-reset-score-button').addEventListener('click',()=>{
    showResetConfirmation();
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
    else if(Event.key === 'a'){
      autoPlay();
    }
    else if(Event.key === 'Backspace'){
      resetScore();
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
  
function resetScore(){
  score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      upadateScoreElement();
}

let isAutoPlaying = false;
let inervalId;
function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(() => {
      const playerMove = pickCompMove();
      playGame(playerMove);
    },1000);
    isAutoPlaying = true;
    document.querySelector('.js-auto-play-button').innerHTML ='Autoplaying';
  }
  else{
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.js-auto-play-button').innerHTML ='Autoplay';
  }
  
}

function showResetConfirmation(){
  document.querySelector('.js-reset-confirmation')
  .innerHTML= `Are you sure want to reset score? <button class ="js-reset-yes-button reset-yes-button"> Yes</button> <button class ="js-reset-no-button reset-no-button"> No</button>`;

  document.querySelector('.js-reset-yes-button').addEventListener('click',()=>{
    resetScore();
    hideConfirmation();
  });
  document.querySelector('.js-reset-no-button').addEventListener('click',()=>{
    hideConfirmation();
  });
}

function hideConfirmation(){
  document.querySelector('.js-reset-confirmation')
  .innerHTML= '';
}