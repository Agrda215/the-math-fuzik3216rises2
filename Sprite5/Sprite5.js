/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 168.9467948879187,
        y: 95.5329050915058
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Alove" }, this.whenIReceiveAlove),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Alpha-Power" },
        this.whenIReceiveAlphaPower
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Beta-Power" },
        this.whenIReceiveBetaPower
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Battery" },
        this.whenIReceiveBattery
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gamma-Power" },
        this.whenIReceiveGammaPower
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenIReceiveAlove() {
    this.visible = true;
    /* TODO: Implement data_showvariable */ null;
  }

  *whenIReceiveAlphaPower() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenIReceiveBetaPower() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenIReceiveBattery() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenIReceiveGammaPower() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
  }
}
