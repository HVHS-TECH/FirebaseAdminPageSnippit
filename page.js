function page_updateGameList(gameList){
    if(gameList == null){
    gameDisplay.innerHTML = 
    `No Games here, you can wait or you can create your own game! :(<br>
      <button onclick="fb_createGame()">Create a game</button>
    `
    }else{
    gameDisplay.innerHTML = 
    `Yay, there is a game`
    }
}