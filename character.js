class Character {
  constructor(hp, dmg, mana, status = "playing") {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
  }

  dealDamage = (victim) => {
    if (victim.hp <= 0) {
      console.log("La cible est deja morte.");
    } else {
      console.log(
        `${this.name} attaque ${victim.name} et lui inflige ${this.dmg} degats!`
      );
      victim.takeDamage(this.dmg);
    }
  };

  takeDamage = (dmg) => {
    if (this instanceof Fighter && this.shield == true) {
      this.hp -= dmg - 2;
    } else if (this instanceof Assassin && this.chargedSpecial === "charged") {
      console.log("Ce personnage ne peut pas prendre de degats ce tour-ci");
    } else {
      this.hp -= dmg;
    }

    if (this.hp <= 0) {
      console.log(`${this.name} est mort`);
      this.status = "loser";
    }
  };
}
