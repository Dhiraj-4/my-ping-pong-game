document.addEventListener('DOMContentLoaded', () => {
    
    const startGame = document.getElementById('startGame');

    const container = document.getElementById('container');

    let ballLocation = {x: 300, y: 300};
    const ball = document.createElement('div');
    ball.id = 'ball';
    ball.style.top = ballLocation.x + 'px';
    ball.style.left = ballLocation.y + 'px';
    
    let dx = 0;
    let dy = 5;

    let gameOn  = false;
    startGame.addEventListener('click', () => {
        if(!gameOn) {
            gameLoop();
            container.appendChild(ball);
            gameOn = true;
        }
    });

    function gameLoop() {
        intervals = setInterval(() => {
            // ifScored();
            updateBall();
            drawPlayersAndBall();
        },1);
    }

    function updateBall() {

        if(ballLocation.x == 570 ) {
            console.log("hello")
            dx = -5;
        } else if(ballLocation == 0) {
            dx = 5;
        }
        if(ballLocation.y == 570) {
            dy = -5;
        } else if(ballLocation.y == 0) {
            dy = 5;
        }


        ballLocation.x += dx;
        ballLocation.y += dy;
    }
    
    function drawPlayersAndBall() {
        container.innerHTML = '';
        
        function drawBall() {
            container.appendChild(ball);
            ball.style.top = ballLocation.x + 'px';
            ball.style.left = ballLocation.y + 'px';
        }

        // function drawPlayers()

        drawBall();
    }
})