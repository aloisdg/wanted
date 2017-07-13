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

let poster = new Poster('Mr. Kobayashi'
, 120
, 'genocide'
, 'http://vignette1.wikia.nocookie.net/vsbattles/images/3/3b/IP.png/revision/latest?cb=20160419213416')

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