
let attackPickachu;
let defencePickachu;
let abilityPickachu1;
let hpPickachu;
let namePickachu;
let imagePickachu;
axios.get("http://fizal.me/pokeapi/api/v2/id/25.json")
.then(picka);
function picka(response){
  console.log(response);
  namePickachu = response.data.name;
  defencePickachu = response.data.stats[3].base_stat;
  attackPickachu = response.data.stats[4].base_stat;
  abilityPickachu1 = response.data.abilities[0].ability.name;
  hpPickachu = response.data.stats[5].base_stat;
  imagePickachu = response.data.sprites.front_default;


    let pickachu = new Pokemon(imagePickachu, namePickachu, attackPickachu, defencePickachu, abilityPickachu1, hpPickachu, "imgpik", "pikabt");
    pickachu.display()


}









class Trainer {
  constructor(url, address, classname, callme, textclass){
    this.classname = classname;
    this.callme = callme;
    this.address = address;
    this.url = url;
    this.textclass = textclass;
    this.train = document.createElement('img');
    this.header = document.getElementById('head');
    this.name = document.createElement('p');
    this.caller = document.createElement('p2');
  }
    execute() {
    this.header.appendChild(this.train);
    this.header.appendChild(this.name);
    this.header.appendChild(this.caller);
    this.train.src = this.url;
    this.train.className = this.classname;
    this.name.innerHTML = this.address;
    this.name.className = this.textclass;
    this.caller.innerHTML = this.callme;
    this.caller.className = this.textclass;

  }
}
let Mikias = new Trainer("", "Mikias Negesse", "trainme", "39 Oak ln, Pelham, nyc", "about");

console.log(Mikias);
Mikias.execute();

console.log(window.scrollY);

class Pokemon {
  constructor(url, name, attack, defence, ability, hp, classimg, classul){
    this.url = url;
    this.attack = attack;
    this.defence = defence;
    this.ability = ability;
    this.hp = hp;
    this.name = name;
    this.classimg = classimg;
    this.classul = classul;
    this.image = document.createElement('img');
    this.attacker = document.createElement('li');
    this.defensive = document.createElement('li');
    this.able = document.createElement('li');
    this.healthpoints = document.createElement('li');
    this.Name = document.createElement('li');
    this.div = document.getElementById('avatar');
    this.ul = document.createElement('ul');
    this.attributes = document.getElementById('att');
  }
  display() {
    this.div.appendChild(this.image);
    this.ul.appendChild(this.Name);
    this.ul.appendChild(this.attacker);
    this.ul.appendChild(this.defensive);
    this.ul.appendChild(this.able);
    this.ul.appendChild(this.healthpoints);
    this.attributes.appendChild(this.ul);
    this.Name.innerHTML = "Name: " + this.name;
    this.attacker.innerHTML = "Attack: " + this.attack;
    this.defensive.innerHTML = "Defence: " + this.defence;
    this.able.innerHTML = "Ability: " + this.ability;
    this.healthpoints.innerHTML = "HP: " + this.hp;
    this.ul.className = this.classul;
    this.image.src = this.url;
    this.image.className = this.classimg;

  }
}
