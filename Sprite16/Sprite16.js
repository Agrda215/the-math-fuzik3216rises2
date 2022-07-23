/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite16 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite16/costumes/costume1.svg", {
        x: 140,
        y: 108.33333778381345
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite16/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Alpha-Power" },
        this.whenIReceiveAlphaPower
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "Alove" }, this.whenIReceiveAlove),
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
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gamma-Power" },
        this.whenIReceiveGammaPower
      )
    ];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.aloveLevel > this.stage.vars.reqgammapow - 1) {
      this.stage.vars.gammapower += 1;
      this.stage.vars.reqgammapow += 4;
    }
  }

  *whenIReceiveAlphaPower() {
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    this.visible = false;
    /* TODO: Implement data_showvariable */ null;
    /* TODO: Implement data_showvariable */ null;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    /* TODO: Implement data_hidevariable */ null;
    this.stage.vars.reqalphapow = 100;
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.betapower = 0;
  }

  *whenIReceiveAlove() {
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    this.visible = false;
  }

  *whenIReceiveBetaPower() {
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    this.visible = false;
  }

  *whenIReceiveBattery() {
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenGreenFlagClicked4() {
    this.stage.vars.batteryactive = 0;
    this.stage.vars.gammapower = 0;
    this.stage.vars.reqgammapow = 25;
  }

  *whenIReceiveGammaPower() {
    /* TODO: Implement data_showvariable */ null;
    /* TODO: Implement data_showvariable */ null;
    this.visible = true;
  }
}
