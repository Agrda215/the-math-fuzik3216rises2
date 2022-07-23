/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite4/costumes/costume1.svg", {
        x: 212.95945945945942,
        y: 95.5921073661552
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite4/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("Alove");
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (!(this.stage.vars.n > Math.E ** 14 * Math.sqrt(2))) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      yield;
    }
  }
}
