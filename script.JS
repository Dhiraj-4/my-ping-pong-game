document.addEventListener('DOMContentLoaded', () => {
    
    const startGame = document.getElementById('startGame');

    const container = document.getElementById('container');

    const player1Location = {x: 250, y: 30};

    const player2Location = {x: 250, y: 540};

    let ballLocation = {x: 300, y: 300};
    const ball = document.createElement('div');
    ball.id = 'ball';
    ball.style.top = ballLocation.x + 'px';
    ball.style.left = ballLocation.y + 'px';
    
    let dx = 0;
    let dy = -5;

    let gameOn  = false;
    startGame.addEventListener('click', () => {
        if(!gameOn) {
            gameLoop();
            gameOn = true;
            startGame.style.display = 'none';
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

        if(ballLocation.x == 570) {
            if(dx == 5 && dy == 5) {
                dx = -5;
                dy = 5;
            } else if(dx == 5 && dy == -5){
                dx = -5;
                dy = -5;
            } else {
                dx = -5;
                dy = -5;
            }
        } else if(ballLocation.x == 0) {
            if(dx == -5 && dy == 5) {
                dx = 5;
                dy = 5;
            } else if(dx == -5 && dy == -5) {
                dx = 5;
                dy = -5;
            } else {
                dx = 5;
                dy = -5;
            }
        }

        if(ballLocation.y == 570) {
            ballLocation.x = 300;
            ballLocation.y = 300;
            dx = 5;
            dy = 0
        } else if(ballLocation.y == 0) {
            ballLocation.x = 300;
            ballLocation.y = 300;
            dx = 0;
            dy = 5;
        }
        
        if (player1Collision()){
            if((Math.floor(Math.random()*10)) % 2 == 0) {
                dy = 5;
                dx = -5;
            } else {
                dy = 5;
                dx = 5;
            }
        }
        if (player2Collision()) {
            if((Math.floor(Math.random()*10)) % 2 == 0) {
                dx = 5;
                dy = -5;
            } else {
                dy = -5;
                dx = -5;
            }
        }

        ballLocation.x += dx;
        ballLocation.y += dy;
    }
    // const player1Location = {x: 250, y: 30};

    // const player2Location = {x: 250, y: 540};
    function player1Collision() {
        if((ballLocation.x > player1Location.x && ballLocation.x < (player1Location.x + 100)) && (ballLocation.y > player1Location.y && ballLocation.y < (player1Location.y + 10))){
            return true;
        }
        return false;
    }

    function player2Collision() {
        if((ballLocation.x > player2Location.x && ballLocation.x < (player2Location.x + 100)) && (ballLocation.y < player2Location.y && ballLocation.y > (player2Location.y - 10))){
            return true;
        }
        return false;
    }
    
    function drawPlayersAndBall() {
        container.innerHTML = '';
        
        function drawBall() {
            container.appendChild(ball);
            ball.style.top = ballLocation.x + 'px';
            ball.style.left = ballLocation.y + 'px';
        }

        function drawPlayers() {
            
                const player1 = document.createElement('div');
                player1.classList = 'player';
                player1.style.top = player1Location.x + 'px';
                player1.style.left = player1Location.y + 'px';
                container.appendChild(player1);

            
                const player2 = document.createElement('div');
                player2.classList = 'player';
                player2.style.top = player2Location.x + 'px';
                player2.style.left = player2Location.y + 'px';
                container.appendChild(player2);
        }

        drawBall();
        drawPlayers();
    }
})