/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite14 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite14/costumes/costume1.svg", {
        x: 172,
        y: 157.33333778381348
      }),
      new Costume("costume2", "./Sprite14/costumes/costume2.svg", {
        x: 172,
        y: 157.33333778381348
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite14/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
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
        { name: "Beta-Power" },
        this.whenIReceiveBetaPower2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gamma-Power" },
        this.whenIReceiveGammaPower
      )
    ];
  }

  *whenthisspriteclicked() {
    if (!(this.stage.vars.batteryUsed > this.stage.vars.batteryUsedLimit - 1)) {
      if (this.stage.vars.battery1active == 1) {
        this.stage.vars.battery1active = 0;
      } else {
        this.stage.vars.battery1active = 1;
      }
      this.broadcast("onclickingBattery");
    }
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.battery1active == 1) {
        this.stage.vars.battery1effect = 1000;
      } else {
        this.stage.vars.battery1effect = 1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.battery1active == 1) {
        this.costume = "costume2";
      } else {
        this.costume = "costume1";
      }
      yield;
    }
  }

  *whenIReceiveAlove() {
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    this.visible = false;
  }

  *whenIReceiveAlphaPower() {
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    this.visible = false;
  }

  *whenIReceiveBetaPower() {
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    this.visible = false;
  }

  *whenIReceiveBattery() {
    this.visible = true;
  }

  *whenIReceiveBetaPower2() {
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    this.visible = false;
  }

  *whenIReceiveGammaPower() {
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    this.visible = false;
  }
}
