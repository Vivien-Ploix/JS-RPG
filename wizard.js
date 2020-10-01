class Wizard extends Character {
  constructor(hp = 10, dmg = 2, mana = 200, name = "merlin") {
    super(hp, dmg, mana, status);
    this.name = name;
  }

  specialAttack = (victim) => {
    if (this.mana < 25) {
      console.log("mana insuffisant");
    } else {
      console.log(
        `${this.name} utilise Fireball sur ${victim.name} et lui inflige 7 points de degats.`
      );
      victim.takeDamage(7);
      this.mana -= 25;
    }
  };
}
