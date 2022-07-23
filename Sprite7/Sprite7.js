/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite7/costumes/costume1.svg", {
        x: 212.95945945945942,
        y: 95.59210736615519
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite7/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("Beta-Power");
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (!(this.stage.vars.aloveLevel > 1)) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      yield;
    }
  }
}
