
        function resetScore() {
            score.Wins = 0;
            score.Losses = 0;
            score.Ties = 0;
            localStorage.removeItem('SCORE');

            updateScore();

        }

    
        let score = JSON.parse(localStorage.getItem('SCORE')) ||  { Wins:0, Losses:0, Ties:0 };
        
        updateScore();

          function Game(playermove)
          {
                
                const computerMove = pickComputerMove();
                let result = ' ';

                if (playermove === 'Scissor'){
                    if ( computerMove === 'Rock'){
                        result = 'You lose';
                    }else if ( computerMove === 'Paper' ){
                        result = 'You win';
                    }else if ( computerMove === 'Scissor' ){
                        result = 'Tie'  ;
                    }
                }else if(playermove === 'Paper'){
                    if ( computerMove === 'Rock'){
                        result = 'You win';
                    }else if ( computerMove === 'Paper' ){
                        result = 'Tie';
                    }else if ( computerMove === 'Scissor' ){
                        result = 'You lose'  ;
                    }
                }
                else if(playermove === 'Rock'){
                    if ( computerMove === 'Rock'){
                        result = 'Tie';
                    }else if ( computerMove === 'Paper' ){
                        result = 'You lose';
                    }else if ( computerMove === 'Scissor' ){
                        result = 'You win'  ;
                    }
                }
              
              if (result === 'You win' ){
                score.Wins += 1;
              }else if(result === 'You lose' ){
                 score.Losses += 1;
              }else if(result === 'Tie'){
                  score.Ties += 1;              
              }

                
                localStorage.setItem('SCORE', JSON.stringify(score) );

                updateScore();

                document.querySelector('.js-result').innerHTML = ` ${result}`

                document.querySelector('.js-move').innerHTML = `You
                <img src="images/${playermove}-emoji.png" class="emoji">
                <img src="images/${computerMove}-emoji.png" class="emoji">
                Computer`;
                
                //alert(`Your Move : ${playermove} , Computer Move :  ${computerMove} : YOU  ${result}.
                //      Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`) 
                 console.log(result);
                 console.log(score);
             }


             function updateScore(){
                document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;

             }

           

          function pickComputerMove() {
                   const randomNumber1 = Math.random();
                  //  console.log(randomNumber1);
                   
                    let computerMove = ' ';

                    if ( randomNumber1 > 0  && randomNumber1 < 1/3){
                        computerMove = 'Rock';
                        }else if(randomNumber1 >= 1/3  && randomNumber1 < 2/3 ){
                        computerMove = 'Paper';
                        }else if(randomNumber1 >= 2/3  && randomNumber1 <= 1 ){
                        computerMove = 'Scissor';
                        }
                return computerMove;
          }