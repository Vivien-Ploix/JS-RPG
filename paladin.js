class Paladin extends Character {
  constructor(hp = 16, dmg = 3, mana = 160, name = "ulder") {
    super(hp, dmg, mana, status);
    this.name = name;
  }

  specialAttack = (victim) => {
    if (this.mana < 40) {
      console.log("mana insuffisant");
    } else {
      console.log(
        `${this.name} utilise Healing Lightning. Il récupère 5 de vie, et inflige 4 points de dégâts à ${victim.name}`
      );
      victim.takeDamage(4);
      this.hp += 5;
      if (this.hp > 16) {
        this.hp = 16;
      }
      this.mana -= 40;
    }
  };
}
