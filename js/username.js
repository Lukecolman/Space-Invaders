const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');

// habilito el boton del form cuando se ingresa texto en el campo de username
username.addEventListener("keyup", () => {
    console.log(username.value)
    saveScoreBtn.disabled = !username.value;
});

// aca evito que me modifique la url al mandar el form
saveHighScore = e => {
    console.log ("funciona?");
    e.preventDefault();
    console.log(username.value)
}

