class Berzerker extends Character {
  constructor(hp = 8, dmg = 4, mana = 0, max_hp = 8, name = "draven") {
    super(hp, dmg, mana, status);
    this.max_hp = max_hp;
    this.name = name;
  }

  specialAttack = () => {
    this.max_hp -= 1;
    this.dmg += 1;
  };
}
