const characterSettings = {
  Bowman: {attack: 25, defence: 25},
  Swordsman: {attack: 40, defence: 10},
  Magician: {attack: 10, defence: 40},
  Undead: {attack: 25, defence: 25},
  Zombie: {attack: 40, defence: 10},
  Daemon: {attack: 10, defence: 40},
}

export default function Character(name, type) {

  if (name.length > 10 || name.length < 2) {
    throw new Error('Name lenght should be between 2 and 10 chars')
  }

  if (!characterSettings[type]) {
    throw new Error('Type should be among this values: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  } 
  
  this.attack = characterSettings[type].attack;
  this.defence = characterSettings[type].defence;

  this.health = 100;
  this.level = 1;

  this.name = name;
  this.type = type;
}