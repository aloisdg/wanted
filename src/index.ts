import Vue from "vue";

enum State {
Dead,
Alive,
DeadOrAlive = "Dead or Alive"
};

class Poster {
//   name: string;
//   reward: number;
//   reason: string;
//   image: string;
  author:string;
  state: State;

  constructor(public name: string, public reward: number, public reason: string, public image: string) {
    this.name = name;
    this.reward = reward;
    this.reason = reason;
    this.image = image;
  }
}

// date

let poster = new Poster('John "El Pyro" Kidd', 120, 'genocide', 'http://www.artofmtg.com/wp-content/uploads/2015/09/Firemantle-Mage-Battle-for-Zendikar-MtG-Art.jpg')

poster.author = "Castelieu Police Force"
poster.state = State.DeadOrAlive

let v = new Vue({
    el: "#app",
    // template: `
    // <div>
    //     <div>Hello {{name}}!</div>
    //     Name: <input v-model="name" type="text">
    // </div>`,
    data: poster
});