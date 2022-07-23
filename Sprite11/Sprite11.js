/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite11 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite11/costumes/costume1.svg", {
        x: 144,
        y: 81.33333778381339
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite11/sounds/pop.wav")];

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
        { name: "Gamma-Power" },
        this.whenIReceiveGammaPower
      )
    ];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.betapower > this.stage.vars.upgraderbetareq2 - 1) {
      this.stage.vars.upgraderbetareq2 += 12;
      this.stage.vars.upgraderbetaeffect2 += 1;
      this.stage.vars.batteryactive = 1;
    }
  }

  *whenGreenFlagClicked() {
    this.stage.vars.upgraderbetaeffect2 = 0;
    this.stage.vars.upgraderbetareq2 = 3;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenIReceiveAlove() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenIReceiveAlphaPower() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenIReceiveBetaPower() {
    this.visible = true;
    /* TODO: Implement data_showvariable */ null;
  }

  *whenIReceiveBattery() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenIReceiveGammaPower() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
  }
}
