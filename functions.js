socket.on('registerUser', (team)=>{
    console.log(team);
    userTeam = team
    setBoardHoverClass()
    startGame()

})

socket.on('update', (data) =>{
    console.log('received update', {data});
  document.getElementById(data.cellId).classList.add(data.currentClass)
})

socket.on('updateTurn', newCircleTurn =>{
    circleTurn = newCircleTurn
})