class BookMaker {
    constructor() {
        this.games = {}
        this.endedGames = [];
    }

    addBet(gameNumber, callback) {
               
        if(!this.games[gameNumber]) {
            this.games[gameNumber] = [];
        }

        let bets = this.games[gameNumber];
        bets.push(callback);
    }

    notifyPlayersAboutGameEnded(gameNumber, result) {
        if(!this.games[gameNumber] || this.endedGames.indexOf(gameNumber) > -1) {
            return;
        }

        this.games[gameNumber].forEach((callback) => {
            callback(result);
        });

        this.endedGames.push(gameNumber);
    }
}

class Player {
    constructor(bookMaker) {
        this.bookMaker = bookMaker;
    }

    makeBet(gameNumber, result) {
        this.bookMaker.addBet(gameNumber, (gameResult) => {
            this.processResult(gameResult, result);
        })
    }

    processResult(actualResult, myResult) {
        if(actualResult === myResult) {
            this.goAndTakeMyMoney();
        } else {
            this.beginToCry();
        }
    }

    goAndTakeMyMoney() {
        // some code
    }

    beginToCry() {
        // some code
    }
}

let bookMaker = new BookMaker();

let player1 = new Player(bookMaker);
player1.makeBet(1, result);
player1.makeBet(2, otherResult);

let player2 = new Player(bookMaker);
player2.makeBet(1, anotherResult);

// game 1 ended
bookMaker.notifyPlayersAboutGameEnded(1, actualResult);





