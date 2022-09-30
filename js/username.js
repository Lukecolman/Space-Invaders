const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const highScoreList = document.getElementById('highScoreList');
const button = document.getElementById('saveScoreBtn');
// localStorage.setItem("username", username.value);
const idForm = document.getElementById('form');


// STORAGE

function form2(e) {
    event.preventDefault();
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
                let a = JSON.parse( localStorage.getItem("score"))
        a.push(username.value);
        localStorage.setItem("score", JSON.stringify(a))
        console.log("funciona")
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


// // aca evito que me modifique la url al mandar el form
// saveScoreBtn = e => {
//     // console.log ("funciona?");
//     e.preventDefault();
//     // console.log(username.value)

//     let score = {
//         // score: acaVoyAPonerElScore,
//         name: username.value,
//     }
// }






console.log("estamos andando?2")

// Llamo al Json y modifico el DOM para agregar una UL y respectivos LI dentro de un DIV determinado
async function scoreList(){
    const scores = await fetch("../json/score-table.json").then(res => res.json())



    let list = document.createElement('ul');
    console.log(scores)
    for(let i = 0; i < scores.length; i++) {
        console.log("quepuerco")
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(scores[i].name + "............."));
        item.appendChild(document.createTextNode(scores[i].score));

        // list.appendChild(item);
        // item.innerHTML = "hola" 
        list.appendChild(item);
        // le quito los puntos a la lista
        list.style.listStyle = "none"; 
    }
    

    
    document.getElementById('scoreList').appendChild(list);

}

scoreList()

console.log("esto esta funcionando?")


