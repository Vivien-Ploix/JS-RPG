class Game {
  constructor(turnLeft = 10, characters = []) {
    this.turnLeft = turnLeft;
    this.characters = characters;
  }

  skipTurn = () => {
    this.turnLeft -= 1;
  };

  startTurn = () => {
    console.log(`Il reste ${this.turnLeft} tours`);
  };

  createcharacters = () => {
    var grace = new Fighter();
    grace.name = "Grace";
    var ulder = new Paladin();
    ulder.name = "Ulder";
    var moana = new Monk();
    moana.name = "Moana";
    var draven = new Berzerker();
    draven.name = "Draven";
    var carl = new Assassin();
    carl.name = "Carl";
    this.characters.push(grace, ulder, moana, draven, carl);
    console.log("Personnages créés :");
    console.log(this.characters);
  };

  watchStats = () => {
    this.characters.forEach((player) =>
      console.log(
        `${player.name} : HP : ${player.hp}, Mana : ${player.mana}, Dmg : ${player.dmg}`
      )
    );
  };

  actionChoice = (character) => {
    if (
      character instanceof Assassin &&
      character.chargedSpecial === "charged"
    ) {
    } else {
      var userChoice = prompt(
        `${character.name}, quelle action voulez-vous effectuer? 1: attaque normale, 2: Attaque spéciale`
      );
    }
    return userChoice;
  };

  target = () => {
    console.log("Choisissez votre cible");
    this.characters.forEach((potentialTarget) => {
      if (potentialTarget.hp > 0) {
        console.log(
          `${this.characters.indexOf(potentialTarget)} : ${
            potentialTarget.name
          }`
        );
      }
    });
    var targetChoice = prompt(
      `Quel est le numéro de la cible que vous voulez viser?`
    );
    var victim = this.characters.find(
      (character) =>
        this.characters.indexOf(character).toString() === targetChoice
    );
    return victim;
  };

  turn = (character, userChoice) => {
    var victim;
    if (
      userChoice === "1" ||
      character instanceof Monk !== true ||
      character instanceof Berzerker !== true
    ) {
      victim = this.target();
      if (victim == undefined) {
        console.log("Ce choix n'est pas possible");
        victim = this.target();
      }
    }

    if (userChoice === "1") {
      character.dealDamage(victim);
    } else if (
      userChoice === "2" &&
      (character instanceof Monk || character instanceof Berzerker)
    ) {
      character.specialAttack;
    } else if (
      userChoice === "2" &&
      character instanceof Monk !== true &&
      character instanceof Berzerker !== true
    ) {
      character.specialAttack(victim);
    }
  };

  shuffle = () => {
    var shuffledArray = this.characters;
    var currentIndex = shuffledArray.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temporaryValue;
    }

    return shuffledArray;
  };

  chainTurns = () => {
    var shuffledArray = this.shuffle();
    shuffledArray.map((character) => {
      if (character.hp > 0) {
        console.log(`${character.name}, c'est à vous de jouer.`);
        if (
          character instanceof Assassin &&
          character.chargedSpecial === "charged"
        ) {
          var victim = this.target();
          character.shadowHit(victim);
        } else {
          var userChoice = this.actionChoice(character);
          this.turn(character, userChoice);
        }
      }
    });
  };
}

function startGame() {
  let game = new Game();
  game.createcharacters();
  while (
    game.turnLeft > 0 &&
    game.characters.filter((character) => character.hp > 0).length > 1
  ) {
    game.startTurn();
    game.watchStats();
    game.chainTurns();
    game.skipTurn();
  }
}

startGame();
