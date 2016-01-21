function  solve(input) {
    var players =[];
    input.forEach(function(line){
        line =  line.replace(/\s+/g, ' ');
        var firstPname = line.split('vs.')[0].trim();
        var secondPname = line.split('vs.')[1].split(':')[0].trim();
        var sets = line.split('vs.')[1].split(':')[1].trim().split(' ');

        var firstPgamewon = 0;
        var secondPgamewon = 0;
        var firstPsetsWon = 0;
        var secondPsetsWon = 0;
        var firstPmatchesWon = 0;
        var secondPmatchesWon = 0;

        sets.forEach(function(set) {
            var firstPgame = Number(set.split('-')[0]);
            var secondPgame = Number(set.split('-')[1]);
            // set sets
            if (firstPgame > secondPgame) {
                firstPsetsWon += 1;
            } else {
                secondPsetsWon += 1;
            }
            // set games
            firstPgamewon +=firstPgame;
            secondPgamewon +=secondPgame;
        });
            // set matches
            if (firstPsetsWon > secondPsetsWon) {
                firstPmatchesWon += 1;
            } else {
                secondPmatchesWon += 1;
            }
            updatePlayer(firstPname,firstPmatchesWon, secondPmatchesWon, firstPsetsWon, secondPsetsWon, firstPgamewon, secondPgamewon);
            updatePlayer(secondPname, secondPmatchesWon, firstPmatchesWon, secondPsetsWon, firstPsetsWon, secondPgamewon, firstPgamewon);
        });


        function updatePlayer (name, matchesWon, matchesLost, setsWon, setsLost, gamesWon, gamesLost){
            var player =  players.filter(function(player){
                return player.name===name;
            })[0];
            if(!player){
                players.push({
                    name: name,
                    matchesWon:matchesWon,
                    matchesLost:matchesLost,
                    setsWon:setsWon,
                    setsLost:setsLost,
                    gamesWon:gamesWon,
                    gamesLost:gamesLost
                });
            } else {
                player.matchesWon +=matchesWon;
                player.matchesLost +=matchesLost;
                player.setsWon +=setsWon;
                player.setsLost +=setsLost;
                player.gamesWon += gamesWon;
                player.gamesLost +=gamesLost;
            }
        }

    players.sort(function(p1, p2) {
        if(p2.matchesWon !== p1.matchesWon) {
            return p2.matchesWon - p1.matchesWon;
       }
        if(p2.setsWon !== p1.setsWon) {
            return p2.setsWon - p1.setsWon;
        }

        if(p2.gamesWon !== p1.gamesWon) {
            return p2.gamesWon - p1.gamesWon;
        }
        return p1.name.localeCompare(p2.name);
    });
        console.log(JSON.stringify(players));
};


solve([
    'Novak Djokovic vs. Roger Federer : 6-3 6-3',
    'Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3',
    'Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7',
    'Andy Murray vs. David     Ferrer : 6-4 7-6',
    'Tomas   Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7',
    'Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2',
    'Pete Sampras vs. Andre Agassi : 2-1',
    'Boris Beckervs.Andre        Agassi:2-1'
]);