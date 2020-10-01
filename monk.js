class Monk extends Character {
  constructor(hp = 8, dmg = 2, mana = 200, name = "moana") {
    super(hp, dmg, mana, status);
    this.name = name;
  }

  specialAttack = (victim) => {
    if (this.mana < 25) {
      console.log("mana insuffisant");
    } else {
      if (victim instanceof Fighter && victim.hp + 8 > 12) {
        victim.hp = 12;
      } else if (victim instanceof Paladin && victim.hp + 8 > 16) {
        victim.hp = 16;
      } else if (victim instanceof Monk) {
        victim.hp = 8;
      } else if (victim instanceof Berzerker) {
        victim.hp = victim.max_hp;
      } else if (victim instanceof Assassin) {
        victim.hp = 6;
      } else {
        victim.hp += 8;
      }
      this.mana -= 25;
      console.log(`${this.name} a soigne ${victim.name} jusqu'a 8 HP`);
    }
  };
}
