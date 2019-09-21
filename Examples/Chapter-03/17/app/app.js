function startGame() {
    // starting a new game
    var playerName = "Andrey";
    logPlayer(playerName);
    var messagesElement = document.getElementById('messages');
    // setting ! remove pass messagesElement as null
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game';
    console.log("Starting new game.");
}
function logPlayer(name) {
    console.log("New game starting for player: " + name);
}
document.getElementById('startGame').addEventListener('click', startGame);
