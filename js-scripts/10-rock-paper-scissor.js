let score=JSON.parse(localStorage.getItem('score'));

if(score===null){  //we use this because after removing score from local storage it doesnt exit so we make a default value
  score={
    wins:0,
    losses:0,
    ties:0
  };
}

updateScoreElement();


  //let computerMove = '';  if we return it the varible comes out of function
  function playGame(playerMove){
      const computerMove= pickComputerMove();  //this variable is diffrent
      
      let result = '';

  if(playerMove==='scissors'){
      if (computerMove === 'rock') {
          result = 'You lose.';
      } else if (computerMove === 'paper') {
          result = 'You win.';
      } else if (computerMove === 'scissors') {
          result = 'Tie.';
      }
  }
  else if(playerMove==='paper'){

      if (computerMove === 'rock') {
          result = 'You win.';
      } else if (computerMove === 'paper') {
          result = 'Tie.';
      } else if (computerMove === 'scissors') {
          result = 'You lose.';
      }
  }
  else{

      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }

  }

  if(result==='You win.'){
    score.wins+=1;
  }
  else if(result==='You lose.'){
    score.losses+=1;
  }
  else if(result==='Tie.'){
    score.ties+=1;
  }

  localStorage.setItem('score',JSON.stringify(score));  //local storage support only string

  updateScoreElement();

  document.querySelector('.js-result')
      .innerHTML=`${result}`;

  document.querySelector('.js-moves')
      .innerHTML=` You
<img src="images/${playerMove}-emoji.png"   class="move-icon"> 

<img src="images/${computerMove}-emoji.png"  class="move-icon">
computer`;


      /*alert(`You picked ${playerMove}.Computer picked ${computerMove}. ${result}
       Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`);*/
  }



  function updateScoreElement(){  
      document.querySelector('.js-score')
          .innerHTML=`Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;
  }



  function pickComputerMove(){

      let randomNumber = Math.random();

      let computerMove='';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
      }
      return computerMove;
  }

