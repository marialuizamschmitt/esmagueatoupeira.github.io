    let atualToupeiraTubo; 
    let atualPlantaTubo;
    let resultado = 0;
    let gameOver = false;

    window.onload = function() {
        setGame();
    }

    function setGame() {

        for (let i = 0; i < 9; i++) { 
            let tubo = document.createElement("div");
            tubo.id = i.toString(); 
            tubo.addEventListener("click", selectTubo);
            document.getElementById("jogo").appendChild(tubo);
        }
        setInterval(setToupeira, 900);
        setInterval(setPlanta, 1000)
    }

    function getRandomTubo(){
        let num = Math.floor(Math.random() * 9);
        return num.toString();
    } 
    
    function setToupeira(){
        if (gameOver) {
            return;
        }
        if (atualToupeiraTubo) {
            atualToupeiraTubo.innerHTML = "";
        }
        let toupeira = document.createElement("img");
        toupeira.src = "./monty-mole.png"

        let num = getRandomTubo(); 
        if (atualPlantaTubo && atualPlantaTubo.id == num){
            return;
        }
        atualToupeiraTubo = document.getElementById(num);
        atualToupeiraTubo.appendChild(toupeira);
    }

    function setPlanta(){
        if (gameOver) {
            return;
        }
        if (atualPlantaTubo) {
            atualPlantaTubo.innerHTML = "";
        }

        let planta = document.createElement("img");
        planta.src = "./piranha-plant.png"

        let num = getRandomTubo();
        if (atualToupeiraTubo && atualToupeiraTubo.id == num){
            return;
        }
        atualPlantaTubo = document.getElementById(num);
        atualPlantaTubo. appendChild(planta);
    }

    function selectTubo(){
        if(gameOver){
            return;
        }
        else if ( this == atualToupeiraTubo){
            resultado += 10;
            document.getElementById("resultado").innerText = resultado.toString();
        }
        else if (this == atualPlantaTubo){
            document.getElementById("resultado").innerText = "GAME OVER: " + resultado.toString();
            gameOver = true;
        }
    }

    function restartGame() {
        resultado = 0;
        document.getElementById("resultado").innerText = resultado.toString();
        gameOver = false;
    }