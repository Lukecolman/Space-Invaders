/*
setTimeout(() => {
    console.log("1 Segundo esperado")


//Almacena
/*
let playerName = prompt("Hola Jugador! Ingresa tu nombre");
if(playerName == null || playerName == ""){
alert("Por favor, ingrese un nombre");
} else {
    console.log("muerto")
    let difficulty2 = prompt("Bienvenido " + playerName + " selecciona tu dificultad:" + "\n - Facil \n - Normal \n - Dificil \n - Ultra Instinto")
    console.log(difficulty2);
    let difficulty = difficulty2.toLowerCase();
    console.log(difficulty);
    if(difficulty == null || difficulty == ""){
        alert("Por favor, selecciona una dificultad")
    }
    else if(difficulty == "facil"){
        alert("Por algo se empieza kpo")
    }
    else if(difficulty == "normal"){
        alert("En realidad se empieza en normal")
    }
    else if(difficulty == "dificil"){
        alert( playerName + " activo el modo diablo 👹")
    }
    else if(difficulty == "ultra instinto" || difficulty == "ultrainstinto"){
        alert("Se viene el Goku 😎")
    }
    else {
        alert("vuelve a ingresar los datos")
    }
}

}, 1000);
*/


// Ingreso lo que es un nuevo USUARIO y además permito que seleccione su dificultad
function startZero() {
    let playerName = prompt("Hola Jugador! Ingresa tu nombre");
    if(playerName == null || playerName == ""){
    alert("Por favor, ingrese un nombre");
    } else {
        console.log("muerto")
        let difficulty2 = prompt("Bienvenido " + playerName + " selecciona tu dificultad:" + "\n - Facil \n - Normal \n - Dificil \n - Ultra Instinto")
        console.log(difficulty2);
        let difficulty = difficulty2.toLowerCase();
        console.log(difficulty);
        if(difficulty == null || difficulty == ""){
            alert("Por favor, selecciona una dificultad")
        }
        else if(difficulty == "facil"){
            alert("Por algo se empieza kpo")
        }
        else if(difficulty == "normal"){
            alert("En realidad se empieza en normal")
        }
        else if(difficulty == "dificil"){
            alert( playerName + " activo el modo diablo 👹")
        }
        else if(difficulty == "ultra instinto" || difficulty == "ultrainstinto"){
            alert("Se viene el Goku 😎")
        }
        else {
            alert("vuelve a ingresar los datos")
        }
    }
    return result
} 

startZero();



//Arrays para usar más adelante
//////////////////////////////////////////////////////////////

//Lista de items

let item = [
    dualShot,
    shield,
    boomerangShot,
    rapidFire

];

//Lista de Enemigos

let enemigos = [
    basicEnemie,
    speedEnemie,
    tankEnemie,
    shootingEnemie

];



//Clases para generar Enemigos e Items

class newEnemie{
    constructor(enemieName, size, power, health, speed) {
        this.enemieName = enemieName;
        this.size = size;
        this.power = power;
        this.health = health;
        this.speed = speed;
        }
    };

class newItems{
    constructor(name, powerType, duration){
        this.name = name;
        this.powerType = powerType;
        this.duration = duration;
    }
}



