import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite9 from "./Sprite9/Sprite9.js";
import Sprite10 from "./Sprite10/Sprite10.js";
import Sprite11 from "./Sprite11/Sprite11.js";
import Sprite12 from "./Sprite12/Sprite12.js";
import Sprite13 from "./Sprite13/Sprite13.js";
import Sprite14 from "./Sprite14/Sprite14.js";
import Sprite15 from "./Sprite15/Sprite15.js";
import Sprite16 from "./Sprite16/Sprite16.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: -194,
    y: 153,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: true
  }),
  Sprite2: new Sprite2({
    x: 16,
    y: 54,
    direction: 90,
    costumeNumber: 1,
    size: 55.00000000000001,
    visible: false
  }),
  Sprite3: new Sprite3({
    x: -3.3954254356554703,
    y: -160.53749382251465,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: true
  }),
  Sprite4: new Sprite4({
    x: -127.35794453625965,
    y: 154.6423790685254,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: true
  }),
  Sprite5: new Sprite5({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite6: new Sprite6({
    x: -1.6511986744764044,
    y: 10.629680433740958,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: false
  }),
  Sprite7: new Sprite7({
    x: -61.67761369435702,
    y: 153.54506097819868,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: true
  }),
  Sprite8: new Sprite8({
    x: -67.3987853135845,
    y: 59.52968863282436,
    direction: 90,
    costumeNumber: 1,
    size: 55.00000000000001,
    visible: false
  }),
  Sprite9: new Sprite9({
    x: -25,
    y: -10,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite10: new Sprite10({
    x: -132,
    y: -16,
    direction: 90,
    costumeNumber: 1,
    size: 75,
    visible: false
  }),
  Sprite11: new Sprite11({
    x: -7.8442403185525365,
    y: -19.276733988890108,
    direction: 90,
    costumeNumber: 1,
    size: 75,
    visible: false
  }),
  Sprite12: new Sprite12({
    x: 8.763114233400328,
    y: 150.75023146775087,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: true
  }),
  Sprite13: new Sprite13({
    x: 2,
    y: -40,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite14: new Sprite14({
    x: -61,
    y: 27,
    direction: 90,
    costumeNumber: 2,
    size: 20,
    visible: false
  }),
  Sprite15: new Sprite15({
    x: 77.5744202221024,
    y: 151.38549750264966,
    direction: 90,
    costumeNumber: 1,
    size: 17,
    visible: true
  }),
  Sprite16: new Sprite16({
    x: -8.746444530676449,
    y: 58.18021693684879,
    direction: 90,
    costumeNumber: 1,
    size: 55.00000000000001,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
