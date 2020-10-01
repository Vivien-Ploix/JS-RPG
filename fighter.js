class Fighter extends Character {
  constructor(hp = 12, dmg = 4, mana = 40, shield = false, name = "grace") {
    super(hp, dmg, mana, status);
    this.shield = shield;
    this.name = name;
  }

  specialAttack = (victim) => {
    if (this.mana < 20) {
      console.log("mana insuffisant");
    } else {
      console.log(
        `${this.name} utilise Dark Vision sur ${victim.name} et lui inflige 5 points de degats. En meme temps, son bouclier s'active et elle recevra 2 degats de moins par coup au prochain tour`
      );
      victim.takeDamage(5);
      this.mana -= 20;
      this.shield = true;
    }
  };
}
