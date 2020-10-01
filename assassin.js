class Assassin extends Character {
  constructor(
    hp = 6,
    dmg = 6,
    mana = 20,
    chargedSpecial = "down",
    name = "carl"
  ) {
    super(hp, dmg, mana, status);
    this.chargedSpecial = chargedSpecial;
    this.name = name;
  }

  specialAttack = () => {
    if (this.mana < 20) {
      console.log("mana insuffisant");
    } else {
      this.mana -= 20;
      this.chargedSpecial = "charged";
    }
  };

  shadowHit = (victim) => {
    victim.takeDamage(7);
    if (victim.hp > 0) {
      this.hp -= 7;
      if (this.hp <= 0) {
        console.log(`${this.name} est mort`);
        this.status = "loser";
      }
    } else {
      this.mana += 20;
    }
  };
}
