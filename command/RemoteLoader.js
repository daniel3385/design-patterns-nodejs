const RemoteControl = require("./RemoteControl.js")
const Light = require("./Light.js")
const CeilingFan = require("./CeilingFan.js")
const GarageDoor = require("./GarageDoor.js")
const Stereo = require("./Stereo.js")

const LightOnCommand = require("./LightOnCommand.js")
const LightOffCommand = require("./LightOffCommand.js")

const CeilingFanOnCommand = require("./CeilingFanOnCommand.js")
const CeilingFanOffCommand = require("./CeilingFanOffCommand.js")

const GarageDoorUpCommand = require("./GarageDoorUpCommand.js")
const GarageDoorDownCommand = require("./GarageDoorDownCommand.js")

const StereoOnWithCDCommand = require("./StereoOnWithCDCommand.js")
const StereoOffCommand = require("./StereoOffCommand.js")

let remoteControl = new RemoteControl();

let livingRoomLight = new Light("Living Room");
let kitchenLight = new Light("Kitchen");
let ceilingFan= new CeilingFan("Living Room");
let garageDoor = new GarageDoor("");
let stereo = new Stereo("Living Room");

let livingRoomLightOn = new LightOnCommand(livingRoomLight);
let livingRoomLightOff = new LightOffCommand(livingRoomLight);
let kitchenLightOn = new LightOnCommand(kitchenLight);
let kitchenLightOff = new LightOffCommand(kitchenLight);

let ceilingFanOn = new CeilingFanOnCommand(ceilingFan);
let ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

let garageDoorUp = new GarageDoorUpCommand(garageDoor);
let garageDoorDown = new GarageDoorDownCommand(garageDoor);

let stereoOnWithCD = new StereoOnWithCDCommand(stereo);
let stereoOff = new StereoOffCommand(stereo);

remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
remoteControl.setCommand(2, ceilingFanOn, ceilingFanOff);
remoteControl.setCommand(3, stereoOnWithCD, stereoOff);

remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
remoteControl.onButtonWasPushed(1);
remoteControl.offButtonWasPushed(1);
remoteControl.onButtonWasPushed(2);
remoteControl.offButtonWasPushed(2);
remoteControl.onButtonWasPushed(3);
remoteControl.offButtonWasPushed(3);

