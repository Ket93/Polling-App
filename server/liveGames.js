// usage: var games = new LiveGames();
   
class LiveGames {
    constructor () {
        this.games = [];
    }
    // adds new game to end of games array
    addGame(pin, hostId, gameLive, gameData){
        var game = {pin, hostId, gameLive, gameData};
        this.games.push(game);
        return game;
    }


    removeGame(hostId){
        var game = this.getGame(hostId);
        
        // if there are removable games:
        if(game){
            this.games = this.games.filter((game) => game.hostId !== hostId);
        }
        return game;
    }

    // returns first game owner by game id
    getGame(hostId){
        return this.games.filter((game) => game.hostId === hostId)[0]
    }
}

module.exports = {LiveGames};
