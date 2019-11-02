"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = require("./utility");
var scoreboard_1 = require("./scoreboard");
var Game = /** @class */ (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new scoreboard_1.Scoreboard();
    }
    Game.prototype.displayGame = function () {
        // create the html for the current game
        var gameForm = '';
        for (var i = 1; i <= this.problemCount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += String(this.factor) + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size=5""/></div>';
            gameForm += '</div>';
        }
        // add the new game to the page
        var gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
        // enable the calculate score button
        document.getElementById('calculate').removeAttribute('disabled');
    };
    Game.prototype.calculateScore = function () {
        var score = 0;
        // loop through the test boxes and calculate the number that are correct
        for (var i = 1; i <= this.problemCount; i++) {
            var answer = Number(utility_1.getValue('answer' + i));
            if (i * this.factor === answer) {
                score++;
            }
        }
        // create a new result object to pass to the scoreboard
        var result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };
        // add the result and update the scoreboard
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();
        // disabled the calculate score button
        document.getElementById('calculate').setAttribute('disabled', 'true');
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map