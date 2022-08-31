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

let items = [
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

