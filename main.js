
let attackPickachu;
let defencePickachu;
let abilityPickachu1;
let hpPickachu;
let namePickachu;
let imagePickachu;
let i;
let abilityarrey;
let imageid1;


let nameSecpoke;
let defenceSecpoke;
let attackSecpoke;
let abilitySecpoke1;
let hpSecpoke;
let imageSecpoke;
let k;
let abilityarrey1;

let nameThirdpoke;
let defenceThirdpoke;
let attackThirdpoke;
let abilityThirdpoke1;
let hpThirdpoke;
let imageThirdpoke;
let j;
let abilityarrey2;

let pickachu;

axios.get("http://fizal.me/pokeapi/api/v2/id/27.json")
.then(thirdpoke);
function thirdpoke(response){
  console.log(response);
  nameThirdpoke = response.data.name;
  defenceThirdpoke = response.data.stats[3].base_stat;
  attackThirdpoke = response.data.stats[4].base_stat;

  let abilityarrey2 = [];
  for (let i = 0; i < response.data.abilities.length; i++) {
    abilityarrey2.push(response.data.abilities[i].ability.name);
  }

  console.log(response.data.abilities);
  hpThirdpoke = response.data.stats[5].base_stat;
  imageThirdpoke = response.data.sprites.front_default;

  //
  let thirdpoke = new Pokemon(imageThirdpoke, nameThirdpoke, attackThirdpoke, defenceThirdpoke, abilityarrey2, hpThirdpoke, "imgpik", "pikabt", "avatar3", "att3", "");
  Mikias.pokemon.push(thirdpoke);
  function animation(){
    // console.log(window.scrollY);
    if (window.scrollY >= 838){
      thirdpoke.imageid = "pikabt3";

    } else {
      thirdpoke.display();
    }
  }
  thirdpoke.display();
  window.addEventListener('scroll', animation);
}

axios.get("http://fizal.me/pokeapi/api/v2/id/14.json")
.then(secondpoke);
function secondpoke(response){
  console.log(response);
  nameSecpoke = response.data.name;
  defenceSecpoke = response.data.stats[3].base_stat;
  attackSecpoke = response.data.stats[4].base_stat;
  // let i = [];
  let abspoke = [];

  for (let i = 0; i < response.data.abilities.length; i++) {
    abspoke.push(response.data.abilities[i].ability.name);
  }

  console.log(abspoke);

  console.log(response.data.abilities);
  hpSecpoke = response.data.stats[5].base_stat;
  imageSecpoke = response.data.sprites.front_default;


  let secpoke = new Pokemon(imageSecpoke, nameSecpoke, attackSecpoke, defenceSecpoke, abspoke, hpSecpoke, "imgpik", "secabt", "avatar2", "att2","");
  Mikias.pokemon.push(secpoke);
  function animation(){
    // console.log(window.scrollY);
    if (window.scrollY >= 428 && 1312 >= window.scrollY){
      secpoke.imageid = "pikabt2";

    } else {
      secpoke.display();
    }
  }

  secpoke.display();
  window.addEventListener('scroll', animation);
}


axios.get("http://fizal.me/pokeapi/api/v2/id/25.json")
.then(picka);
function picka(response){
  console.log(response);
  namePickachu = response.data.name;
  defencePickachu = response.data.stats[3].base_stat;
  attackPickachu = response.data.stats[4].base_stat;
  let abilityarrey = [];
  for (let i = 0; i < response.data.abilities.length; i++) {
    abilityarrey.push(response.data.abilities[i].ability.name);
  }

  hpPickachu = response.data.stats[5].base_stat;
  imagePickachu = response.data.sprites.front_default;
  pickachu = new Pokemon(imagePickachu, namePickachu, attackPickachu, defencePickachu, abilityarrey, hpPickachu, "imgpik", "pikabt", "avatar", "att", "");

  Mikias.pokemon.push(pickachu);

  function animation(){
    // console.log(window.scrollY);
    if (window.scrollY >= 26 && 877 >= window.scrollY){
      pickachu.imageid = "pikabt1";

    } else {
      pickachu.display();
    }
  }
  pickachu.display();
  window.addEventListener('scroll', animation);
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

    this.pokemon = []; //store Pokemon objects
  }

  all(){
    return this.pokemon;

  }
  get(name){
    // let m =[];
    for(let m = 0; m < this.pokemon.length; m++){
      // console.log(this.pokemon[m])
      if(name === this.pokemon[m].name){
        return this.pokemon[m];
      }
    }

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
let Mikias = new Trainer("mikias.png", "Mikias Negesse", "trainme", "39 Oak ln, Pelham, nyc", "about");
console.log(Mikias);
Mikias.execute();

// console.log(window.scrollY);

class Pokemon {
  constructor(url, name, attack, defence, ability, hp, classimg, classul, divv, attt, imageid){
    this.url = url;
    this.attack = attack;
    this.defence = defence;
    this.ability = ability;
    this.hp = hp;
    this.name = name;
    this.classimg = classimg;
    this.classul = classul;
    this.divv = divv;
    this.attt = attt;
    this.imageid = imageid;


    this.image = document.createElement('img');
    this.attacker = document.createElement('li');
    this.defensive = document.createElement('li');
    this.able = document.createElement('li');
    this.healthpoints = document.createElement('li');
    this.Name = document.createElement('li');
    this.div = document.getElementById(this.divv);
    this.ul = document.createElement('ul');
    this.attributes = document.getElementById(this.attt);
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

      this.able.innerHTML = "Ability: " + this.ability.toString();

    this.healthpoints.innerHTML = "HP: " + this.hp;
    this.ul.className = this.classul;
    this.image.src = this.url;
    this.image.className = this.classimg;
    this.ul.id = this.imageid;


  }

}
