const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const highScoreList = document.getElementById('highScoreList');
const button = document.getElementById('saveScoreBtn');
localStorage.setItem("username", username.value);
const idForm = document.getElementById('form');


// STORAGE

function form2() {
    if (localStorage.getItem("score")){
        idForm.addEventListener("submit", (e) => {
        e.preventDefault();
        })

        let a = JSON.parse( localStorage.getItem("score"))
        a.push(username.value);
        localStorage.setItem("score", JSON.stringify(a))
        console.log("funciona")
    } else {
        localStorage.setItem("score", JSON.stringify([]));
        console.log("nofuncionapapa")
    }

}


// habilito el boton del form cuando se ingresa texto en el campo de username
// username.addEventListener("keyup", () => {
//     // console.log(username.value)
//     // saveScoreBtn.disabled = !username.value;

//     localStorage.setItem("username", username.value);



// });

function getLocalStorage (){
    let topUsername = localStorage.getItem("username");
    console.log(topUsername);
}


// const highScore = localStorage.getItem("username");
// console.log(username)


// aca evito que me modifique la url al mandar el form
saveScoreBtn = e => {
    // console.log ("funciona?");
    e.preventDefault();
    // console.log(username.value)

    const score = {
        // score: acaVoyAPonerElScore,
        name: username.value,
    }
}



