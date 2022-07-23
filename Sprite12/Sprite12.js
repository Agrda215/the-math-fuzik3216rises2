/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite12 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite12/costumes/costume1.svg", {
        x: 212.95945945945942,
        y: 95.59210736615518
      })
    ];

    this.sounds = [
      new Sound("Meow", "./Sprite12/sounds/Meow.wav"),
      new Sound("Battery Onclicked", "./Sprite12/sounds/Battery Onclicked.wav"),
      new Sound("Cave", "./Sprite12/sounds/Cave.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "onclickingBattery" },
        this.whenIReceiveOnclickingbattery
      )
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("Battery");
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (!(this.stage.vars.batteryactive == 1)) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (!(this.stage.vars.batteryactive == 1)) {
      yield;
    }
    yield* this.startSound("Cave");
  }

  *whenIReceiveOnclickingbattery() {
    yield* this.playSoundUntilDone("Battery Onclicked");
  }
}
