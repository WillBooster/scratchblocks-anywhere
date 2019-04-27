module.exports = [
  {
    id: "MOTION_MOVESTEPS",
    selector: "forward:",
    spec: "move %1 steps",
    inputs: ["%n"],
    shape: "stack",
    category: "motion",
  },
  {
    id: "MOTION_TURNRIGHT",
    selector: "turnRight:",
    spec: "turn @turnRight %1 degrees",
    inputs: ["%n"],
    shape: "stack",
    category: "motion",
  },
  {
    id: "MOTION_TURNLEFT",
    selector: "turnLeft:",
    spec: "turn @turnLeft %1 degrees",
    inputs: ["%n"],
    shape: "stack",
    category: "motion",
  },
  {
    id: "MOTION_POINTINDIRECTION",
    selector: "heading:",
    spec: "point in direction %1",
    inputs: ["%d.direction"],
    shape: "stack",
    category: "motion",
  },
  {
    id: "MOTION_POINTTOWARDS",
    selector: "pointTowards:",
    spec: "point towards %1",
    inputs: ["%m.spriteOrMouse"],
    shape: "stack",
    category: "motion",
  },
  {
    id: "MOTION_GOTOXY",
    selector: "gotoX:y:",
    spec: "go to x:%1 y:%2",
    inputs: ["%n", "%n"],
    shape: "stack",
    category: "motion",
  },
  {
    id: "MOTION_GOTO",
    selector: "gotoSpriteOrMouse:",
    spec: "go to %1",
    inputs: ["%m.location"],
    shape: "stack",
    category: "motion",
  },
  {
    id: "MOTION_GLIDESECSTOXY",
    selector: "glideSecs:toX:y:elapsed:from:",
    spec: "glide %1 secs to x:%2 y:%3",
    inputs: ["%n", "%n", "%n"],
    shape: "stack",
    category: "motion",
  },
  {
    id: "MOTION_GLIDETO",
    spec: "glide %1 secs to %2",
    inputs: ["%n", "%m.location"],
    shape: "stack",
    category: "motion",
  },
  {
    id: "MOTION_CHANGEXBY",
    selector: "changeXposBy:",
    spec: "change x by %1",
    inputs: ["%n"],
    shape: "stack",
    category: "motion",
  },
  {
    id: "MOTION_SETX",
    selector: "xpos:",
    spec: "set x to %1",
    inputs: ["%n"],
    shape: "stack",
    category: "motion",
  },
  {
    id: "MOTION_CHANGEYBY",
    selector: "changeYposBy:",
    spec: "change y by %1",
    inputs: ["%n"],
    shape: "stack",
    category: "motion",
  },
  {
    id: "MOTION_SETY",
    selector: "ypos:",
    spec: "set y to %1",
    inputs: ["%n"],
    shape: "stack",
    category: "motion",
  },
  {
    id: "MOTION_SETROTATIONSTYLE",
    selector: "setRotationStyle",
    spec: "set rotation style %1",
    inputs: ["%m.rotationStyle"],
    shape: "stack",
    category: "motion",
  },
  {
    id: "LOOKS_SAYFORSECS",
    selector: "say:duration:elapsed:from:",
    spec: "say %1 for %2 seconds",
    inputs: ["%s", "%n"],
    shape: "stack",
    category: "looks",
  },
  {
    id: "LOOKS_SAY",
    selector: "say:",
    spec: "say %1",
    inputs: ["%s"],
    shape: "stack",
    category: "looks",
  },
  {
    id: "LOOKS_THINKFORSECS",
    selector: "think:duration:elapsed:from:",
    spec: "think %1 for %2 seconds",
    inputs: ["%s", "%n"],
    shape: "stack",
    category: "looks",
  },
  {
    id: "LOOKS_THINK",
    selector: "think:",
    spec: "think %1",
    inputs: ["%s"],
    shape: "stack",
    category: "looks",
  },
  {
    id: "LOOKS_SHOW",
    selector: "show",
    spec: "show",
    inputs: [],
    shape: "stack",
    category: "looks",
  },
  {
    id: "LOOKS_HIDE",
    selector: "hide",
    spec: "hide",
    inputs: [],
    shape: "stack",
    category: "looks",
  },
  {
    id: "LOOKS_SWITCHCOSTUMETO",
    selector: "lookLike:",
    spec: "switch costume to %1",
    inputs: ["%m.costume"],
    shape: "stack",
    category: "looks",
  },
  {
    id: "LOOKS_NEXTCOSTUME",
    selector: "nextCostume",
    spec: "next costume",
    inputs: [],
    shape: "stack",
    category: "looks",
  },
  {
    id: "LOOKS_NEXTBACKDROP",
    selector: "nextScene",
    spec: "next backdrop",
    inputs: [],
    shape: "stack",
    category: "looks",
  },
  {
    id: "LOOKS_SWITCHBACKDROPTO",
    selector: "startScene",
    spec: "switch backdrop to %1",
    inputs: ["%m.backdrop"],
    shape: "stack",
    category: "looks",
  },
  {
    id: "LOOKS_SWITCHBACKDROPTOANDWAIT",
    selector: "startSceneAndWait",
    spec: "switch backdrop to %1 and wait",
    inputs: ["%m.backdrop"],
    shape: "stack",
    category: "looks",
  },
  {
    id: "LOOKS_CHANGEEFFECTBY",
    selector: "changeGraphicEffect:by:",
    spec: "change %1 effect by %2",
    inputs: ["%m.effect", "%n"],
    shape: "stack",
    category: "looks",
  },
  {
    id: "LOOKS_SETEFFECTTO",
    selector: "setGraphicEffect:to:",
    spec: "set %1 effect to %2",
    inputs: ["%m.effect", "%n"],
    shape: "stack",
    category: "looks",
  },
  {
    id: "LOOKS_CLEARGRAPHICEFFECTS",
    selector: "filterReset",
    spec: "clear graphic effects",
    inputs: [],
    shape: "stack",
    category: "looks",
  },
  {
    id: "LOOKS_CHANGESIZEBY",
    selector: "changeSizeBy:",
    spec: "change size by %1",
    inputs: ["%n"],
    shape: "stack",
    category: "looks",
  },
  {
    id: "LOOKS_SETSIZETO",
    selector: "setSizeTo:",
    spec: "set size to %1%",
    inputs: ["%n"],
    shape: "stack",
    category: "looks",
  },
  {
    selector: "comeToFront",
    spec: "go to front",
    inputs: [],
    shape: "stack",
    category: "looks",
  },
  {
    id: "LOOKS_GOTOFRONTBACK",
    spec: "go to %1 layer",
    inputs: ["%m"],
    shape: "stack",
    category: "looks",
  },
  {
    selector: "goBackByLayers:",
    spec: "go back %1 layers",
    inputs: ["%n"],
    shape: "stack",
    category: "looks",
  },
  {
    id: "LOOKS_GOFORWARDBACKWARDLAYERS",
    spec: "go %1 %2 layers",
    inputs: ["%m", "%n"],
    shape: "stack",
    category: "looks",
  },
  {
    id: "SOUND_PLAY",
    selector: "playSound:",
    spec: "start sound %1",
    inputs: ["%m.sound"],
    shape: "stack",
    category: "sound",
  },
  {
    id: "SOUND_CHANGEEFFECTBY",
    spec: "change %1 effect by %2",
    inputs: ["%m", "%n"],
    shape: "stack",
    category: "sound",
  },
  {
    id: "SOUND_SETEFFECTO", // sic
    spec: "set %1 effect to %2",
    inputs: ["%m", "%n"],
    shape: "stack",
    category: "sound",
  },
  {
    id: "SOUND_CLEAREFFECTS",
    spec: "clear sound effects",
    inputs: [],
    shape: "stack",
    category: "sound",
  },
  {
    id: "SOUND_PLAYUNTILDONE",
    selector: "doPlaySoundAndWait",
    spec: "play sound %1 until done",
    inputs: ["%m.sound"],
    shape: "stack",
    category: "sound",
  },
  {
    id: "SOUND_STOPALLSOUNDS",
    selector: "stopAllSounds",
    spec: "stop all sounds",
    inputs: [],
    shape: "stack",
    category: "sound",
  },
  {
    id: "music.playDrumForBeats",
    selector: "playDrum",
    spec: "play drum %1 for %2 beats",
    inputs: ["%d.drum", "%n"],
    shape: "stack",
    category: "music",
  },
  {
    id: "music.restForBeats",
    selector: "rest:elapsed:from:",
    spec: "rest for %1 beats",
    inputs: ["%n"],
    shape: "stack",
    category: "music",
  },
  {
    id: "music.playNoteForBeats",
    selector: "noteOn:duration:elapsed:from:",
    spec: "play note %1 for %2 beats",
    inputs: ["%d.note", "%n"],
    shape: "stack",
    category: "music",
  },
  {
    id: "music.setInstrument",
    selector: "instrument:",
    spec: "set instrument to %1",
    inputs: ["%d.instrument"],
    shape: "stack",
    category: "music",
  },
  {
    id: "SOUND_CHANGEVOLUMEBY",
    selector: "changeVolumeBy:",
    spec: "change volume by %1",
    inputs: ["%n"],
    shape: "stack",
    category: "sound",
  },
  {
    id: "SOUND_SETVOLUMETO",
    selector: "setVolumeTo:",
    spec: "set volume to %1%",
    inputs: ["%n"],
    shape: "stack",
    category: "sound",
  },
  {
    id: "music.changeTempo",
    selector: "changeTempoBy:",
    spec: "change tempo by %1",
    inputs: ["%n"],
    shape: "stack",
    category: "music",
  },
  {
    selector: "setTempoTo:",
    spec: "set tempo to %1 bpm",
    inputs: ["%n"],
    shape: "stack",
    category: "sound",
  },
  {
    id: "music.setTempo",
    selector: "setTempoTo:",
    spec: "set tempo to %1",
    inputs: ["%n"],
    shape: "stack",
    category: "music",
  },
  {
    id: "pen.clear",
    selector: "clearPenTrails",
    spec: "erase all",
    inputs: [],
    shape: "stack",
    category: "pen",
  },
  {
    id: "pen.stamp",
    selector: "stampCostume",
    spec: "stamp",
    inputs: [],
    shape: "stack",
    category: "pen",
  },
  {
    id: "pen.penDown",
    selector: "putPenDown",
    spec: "pen down",
    inputs: [],
    shape: "stack",
    category: "pen",
  },
  {
    id: "pen.penUp",
    selector: "putPenUp",
    spec: "pen up",
    inputs: [],
    shape: "stack",
    category: "pen",
  },
  {
    id: "pen.setColor",
    selector: "penColor:",
    spec: "set pen color to %1",
    inputs: ["%c"],
    shape: "stack",
    category: "pen",
  },
  {
    id: "pen.changeHue",
    selector: "changePenHueBy:",
    spec: "change pen color by %1",
    inputs: ["%n"],
    shape: "stack",
    category: "pen",
  },
  {
    id: "pen.setColorParam",
    spec: "set pen %1 to %2",
    inputs: ["%m.color", "%c"],
    shape: "stack",
    category: "pen",
  },
  {
    id: "pen.changeColorParam",
    spec: "change pen %1 by %2",
    inputs: ["%m.color", "%n"],
    shape: "stack",
    category: "pen",
  },
  {
    id: "pen.setHue",
    selector: "setPenHueTo:",
    spec: "set pen color to %1",
    inputs: ["%n"],
    shape: "stack",
    category: "pen",
  },
  {
    id: "pen.changeShade",
    selector: "changePenShadeBy:",
    spec: "change pen shade by %1",
    inputs: ["%n"],
    shape: "stack",
    category: "pen",
  },
  {
    id: "pen.setShade",
    selector: "setPenShadeTo:",
    spec: "set pen shade to %1",
    inputs: ["%n"],
    shape: "stack",
    category: "pen",
  },
  {
    id: "pen.changeSize",
    selector: "changePenSizeBy:",
    spec: "change pen size by %1",
    inputs: ["%n"],
    shape: "stack",
    category: "pen",
  },
  {
    id: "pen.setSize",
    selector: "penSize:",
    spec: "set pen size to %1",
    inputs: ["%n"],
    shape: "stack",
    category: "pen",
  },
  {
    id: "EVENT_WHENFLAGCLICKED",
    selector: "whenGreenFlag",
    spec: "when @greenFlag clicked",
    inputs: [],
    shape: "hat",
    category: "events",
  },
  {
    id: "EVENT_WHENKEYPRESSED",
    selector: "whenKeyPressed",
    spec: "when %1 key pressed",
    inputs: ["%m.key"],
    shape: "hat",
    category: "events",
  },
  {
    id: "EVENT_WHENTHISSPRITECLICKED",
    selector: "whenClicked",
    spec: "when this sprite clicked",
    inputs: [],
    shape: "hat",
    category: "events",
  },
  {
    id: "EVENT_WHENBACKDROPSWITCHESTO",
    selector: "whenSceneStarts",
    spec: "when backdrop switches to %1",
    inputs: ["%m.backdrop"],
    shape: "hat",
    category: "events",
  },
  {
    id: "EVENT_WHENGREATERTHAN",
    selector: "whenSensorGreaterThan",
    spec: "when %1 > %2",
    inputs: ["%m.triggerSensor", "%n"],
    shape: "hat",
    category: "events",
  },
  {
    id: "EVENT_WHENBROADCASTRECEIVED",
    selector: "whenIReceive",
    spec: "when I receive %1",
    inputs: ["%m.broadcast"],
    shape: "hat",
    category: "events",
  },
  {
    id: "EVENT_BROADCAST",
    selector: "broadcast:",
    spec: "broadcast %1",
    inputs: ["%m.broadcast"],
    shape: "stack",
    category: "events",
  },
  {
    id: "EVENT_BROADCASTANDWAIT",
    selector: "doBroadcastAndWait",
    spec: "broadcast %1 and wait",
    inputs: ["%m.broadcast"],
    shape: "stack",
    category: "events",
  },
  {
    id: "CONTROL_WAIT",
    selector: "wait:elapsed:from:",
    spec: "wait %1 seconds",
    inputs: ["%n"],
    shape: "stack",
    category: "control",
  },
  {
    id: "CONTROL_REPEAT",
    selector: "doRepeat",
    spec: "repeat %1",
    inputs: ["%n"],
    shape: "c-block",
    category: "control",
    hasLoopArrow: true,
  },
  {
    id: "CONTROL_FOREVER",
    selector: "doForever",
    spec: "forever",
    inputs: [],
    shape: "c-block cap",
    category: "control",
    hasLoopArrow: true,
  },
  {
    id: "CONTROL_IF",
    selector: "doIf",
    spec: "if %1 then",
    inputs: ["%b"],
    shape: "c-block",
    category: "control",
  },
  {
    id: "CONTROL_WAITUNTIL",
    selector: "doWaitUntil",
    spec: "wait until %1",
    inputs: ["%b"],
    shape: "stack",
    category: "control",
  },
  {
    id: "CONTROL_REPEATUNTIL",
    selector: "doUntil",
    spec: "repeat until %1",
    inputs: ["%b"],
    shape: "c-block",
    category: "control",
    hasLoopArrow: true,
  },
  {
    id: "CONTROL_STOP",
    selector: "stopScripts",
    spec: "stop %1",
    inputs: ["%m.stop"],
    shape: "cap",
    category: "control",
  },
  {
    id: "CONTROL_STARTASCLONE",
    selector: "whenCloned",
    spec: "when I start as a clone",
    inputs: [],
    shape: "hat",
    category: "control",
  },
  {
    id: "CONTROL_CREATECLONEOF",
    selector: "createCloneOf",
    spec: "create clone of %1",
    inputs: ["%m.spriteOnly"],
    shape: "stack",
    category: "control",
  },
  {
    id: "CONTROL_DELETETHISCLONE",
    selector: "deleteClone",
    spec: "delete this clone",
    inputs: [],
    shape: "cap",
    category: "control",
  },
  {
    id: "SENSING_ASKANDWAIT",
    selector: "doAsk",
    spec: "ask %1 and wait",
    inputs: ["%s"],
    shape: "stack",
    category: "sensing",
  },
  {
    id: "videoSensing.videoToggle",
    selector: "setVideoState",
    spec: "turn video %1",
    inputs: ["%m.videoState"],
    shape: "stack",
    category: "video",
  },
  {
    id: "videoSensing.setVideoTransparency",
    selector: "setVideoTransparency",
    spec: "set video transparency to %1%",
    inputs: ["%n"],
    shape: "stack",
    category: "video",
  },
  {
    id: "videoSensing.whenMotionGreaterThan",
    spec: "when video motion > %1",
    inputs: ["%n"],
    shape: "hat",
    category: "video",
  },
  {
    id: "SENSING_RESETTIMER",
    selector: "timerReset",
    spec: "reset timer",
    inputs: [],
    shape: "stack",
    category: "sensing",
  },
  {
    id: "DATA_SETVARIABLETO",
    selector: "setVar:to:",
    spec: "set %1 to %2",
    inputs: ["%m.var", "%s"],
    shape: "stack",
    category: "variables",
  },
  {
    id: "DATA_CHANGEVARIABLEBY",
    selector: "changeVar:by:",
    spec: "change %1 by %2",
    inputs: ["%m.var", "%n"],
    shape: "stack",
    category: "variables",
  },
  {
    id: "DATA_SHOWVARIABLE",
    selector: "showVariable:",
    spec: "show variable %1",
    inputs: ["%m.var"],
    shape: "stack",
    category: "variables",
  },
  {
    id: "DATA_HIDEVARIABLE",
    selector: "hideVariable:",
    spec: "hide variable %1",
    inputs: ["%m.var"],
    shape: "stack",
    category: "variables",
  },
  {
    id: "DATA_ADDTOLIST",
    selector: "append:toList:",
    spec: "add %1 to %2",
    inputs: ["%s", "%m.list"],
    shape: "stack",
    category: "list",
  },
  {
    id: "DATA_DELETEOFLIST",
    selector: "deleteLine:ofList:",
    spec: "delete %1 of %2",
    inputs: ["%d.listDeleteItem", "%m.list"],
    shape: "stack",
    category: "list",
  },
  {
    id: "DATA_DELETEALLOFLIST",
    spec: "delete all of %1",
    inputs: ["%m.list"],
    shape: "stack",
    category: "list",
  },
  {
    id: "MOTION_IFONEDGEBOUNCE",
    selector: "bounceOffEdge",
    spec: "if on edge, bounce",
    inputs: [],
    shape: "stack",
    category: "motion",
  },
  {
    id: "DATA_INSERTATLIST",
    selector: "insert:at:ofList:",
    spec: "insert %1 at %2 of %3",
    inputs: ["%s", "%d.listItem", "%m.list"],
    shape: "stack",
    category: "list",
  },
  {
    id: "DATA_REPLACEITEMOFLIST",
    selector: "setLine:ofList:to:",
    spec: "replace item %1 of %2 with %3",
    inputs: ["%d.listItem", "%m.list", "%s"],
    shape: "stack",
    category: "list",
  },
  {
    id: "DATA_SHOWLIST",
    selector: "showList:",
    spec: "show list %1",
    inputs: ["%m.list"],
    shape: "stack",
    category: "list",
  },
  {
    id: "DATA_HIDELIST",
    selector: "hideList:",
    spec: "hide list %1",
    inputs: ["%m.list"],
    shape: "stack",
    category: "list",
  },
  {
    id: "SENSING_OF_XPOSITION",
    selector: "xpos",
    spec: "x position",
    inputs: [],
    shape: "reporter",
    category: "motion",
  },
  {
    id: "SENSING_OF_YPOSITION",
    selector: "ypos",
    spec: "y position",
    inputs: [],
    shape: "reporter",
    category: "motion",
  },
  {
    id: "SENSING_OF_DIRECTION",
    selector: "heading",
    spec: "direction",
    inputs: [],
    shape: "reporter",
    category: "motion",
  },
  {
    id: "SENSING_OF_COSTUMENUMBER",
    selector: "costumeIndex",
    spec: "costume #",
    inputs: [],
    shape: "reporter",
    category: "looks",
  },
  {
    id: "LOOKS_COSTUMENUMBERNAME",
    selector: "LOOKS_COSTUMENUMBERNAME",
    spec: "costume %1",
    inputs: ["%m"],
    shape: "reporter",
    category: "looks",
  },
  {
    id: "SENSING_OF_SIZE",
    selector: "scale",
    spec: "size",
    inputs: [],
    shape: "reporter",
    category: "looks",
  },
  {
    id: "SENSING_OF_BACKDROPNAME",
    selector: "sceneName",
    spec: "backdrop name",
    inputs: [],
    shape: "reporter",
    category: "looks",
  },
  {
    id: "LOOKS_BACKDROPNUMBERNAME",
    spec: "backdrop %1",
    inputs: ["%m"],
    shape: "reporter",
    category: "looks",
  },
  {
    id: "SENSING_OF_BACKDROPNUMBER",
    selector: "backgroundIndex",
    spec: "backdrop #",
    inputs: [],
    shape: "reporter",
    category: "looks",
  },
  {
    id: "SOUND_VOLUME",
    selector: "volume",
    spec: "volume",
    inputs: [],
    shape: "reporter",
    category: "sound",
  },
  {
    id: "music.getTempo",
    selector: "tempo",
    spec: "tempo",
    inputs: [],
    shape: "reporter",
    category: "music",
  },
  {
    id: "SENSING_TOUCHINGOBJECT",
    selector: "touching:",
    spec: "touching %1?",
    inputs: ["%m.touching"],
    shape: "boolean",
    category: "sensing",
  },
  {
    id: "SENSING_TOUCHINGCOLOR",
    selector: "touchingColor:",
    spec: "touching color %1?",
    inputs: ["%c"],
    shape: "boolean",
    category: "sensing",
  },
  {
    id: "SENSING_COLORISTOUCHINGCOLOR",
    selector: "color:sees:",
    spec: "color %1 is touching %2?",
    inputs: ["%c", "%c"],
    shape: "boolean",
    category: "sensing",
  },
  {
    id: "SENSING_DISTANCETO",
    selector: "distanceTo:",
    spec: "distance to %1",
    inputs: ["%m.spriteOrMouse"],
    shape: "reporter",
    category: "sensing",
  },
  {
    id: "SENSING_ANSWER",
    selector: "answer",
    spec: "answer",
    inputs: [],
    shape: "reporter",
    category: "sensing",
  },
  {
    id: "SENSING_KEYPRESSED",
    selector: "keyPressed:",
    spec: "key %1 pressed?",
    inputs: ["%m.key"],
    shape: "boolean",
    category: "sensing",
  },
  {
    id: "SENSING_MOUSEDOWN",
    selector: "mousePressed",
    spec: "mouse down?",
    inputs: [],
    shape: "boolean",
    category: "sensing",
  },
  {
    id: "SENSING_MOUSEX",
    selector: "mouseX",
    spec: "mouse x",
    inputs: [],
    shape: "reporter",
    category: "sensing",
  },
  {
    id: "SENSING_MOUSEY",
    selector: "mouseY",
    spec: "mouse y",
    inputs: [],
    shape: "reporter",
    category: "sensing",
  },
  {
    id: "SENSING_SETDRAGMODE",
    spec: "set drag mode %1",
    inputs: ["%m"],
    shape: "stack",
    category: "sensing",
  },
  {
    id: "SENSING_LOUDNESS",
    selector: "soundLevel",
    spec: "loudness",
    inputs: [],
    shape: "reporter",
    category: "sensing",
  },
  {
    id: "videoSensing.videoOn",
    selector: "senseVideoMotion",
    spec: "video %1 on %2",
    inputs: ["%m.videoMotionType", "%m.stageOrThis"],
    shape: "reporter",
    category: "video",
  },
  {
    id: "SENSING_TIMER",
    selector: "timer",
    spec: "timer",
    inputs: [],
    shape: "reporter",
    category: "sensing",
  },
  {
    id: "SENSING_OF",
    selector: "getAttribute:of:",
    spec: "%1 of %2",
    inputs: ["%m.attribute", "%m.spriteOrStage"],
    shape: "reporter",
    category: "sensing",
  },
  {
    id: "SENSING_CURRENT",
    selector: "timeAndDate",
    spec: "current %1",
    inputs: ["%m.timeAndDate"],
    shape: "reporter",
    category: "sensing",
  },
  {
    id: "SENSING_DAYSSINCE2000",
    selector: "timestamp",
    spec: "days since 2000",
    inputs: [],
    shape: "reporter",
    category: "sensing",
  },
  {
    id: "SENSING_USERNAME",
    selector: "getUserName",
    spec: "username",
    inputs: [],
    shape: "reporter",
    category: "sensing",
  },
  {
    id: "OPERATORS_ADD",
    selector: "+",
    spec: "%1 + %2",
    inputs: ["%n", "%n"],
    shape: "reporter",
    category: "operators",
  },
  {
    id: "OPERATORS_SUBTRACT",
    selector: "-",
    spec: "%1 - %2",
    inputs: ["%n", "%n"],
    shape: "reporter",
    category: "operators",
  },
  {
    id: "OPERATORS_MULTIPLY",
    selector: "*",
    spec: "%1 * %2",
    inputs: ["%n", "%n"],
    shape: "reporter",
    category: "operators",
  },
  {
    id: "OPERATORS_DIVIDE",
    selector: "/",
    spec: "%1 / %2",
    inputs: ["%n", "%n"],
    shape: "reporter",
    category: "operators",
  },
  {
    id: "OPERATORS_RANDOM",
    selector: "randomFrom:to:",
    spec: "pick random %1 to %2",
    inputs: ["%n", "%n"],
    shape: "reporter",
    category: "operators",
  },
  {
    id: "OPERATORS_LT",
    selector: "<",
    spec: "%1 < %2",
    inputs: ["%s", "%s"],
    shape: "boolean",
    category: "operators",
  },
  {
    id: "OPERATORS_EQUALS",
    selector: "=",
    spec: "%1 = %2",
    inputs: ["%s", "%s"],
    shape: "boolean",
    category: "operators",
  },
  {
    id: "OPERATORS_GT",
    selector: ">",
    spec: "%1 > %2",
    inputs: ["%s", "%s"],
    shape: "boolean",
    category: "operators",
  },
  {
    id: "OPERATORS_AND",
    selector: "&",
    spec: "%1 and %2",
    inputs: ["%b", "%b"],
    shape: "boolean",
    category: "operators",
  },
  {
    id: "OPERATORS_OR",
    selector: "|",
    spec: "%1 or %2",
    inputs: ["%b", "%b"],
    shape: "boolean",
    category: "operators",
  },
  {
    id: "OPERATORS_NOT",
    selector: "not",
    spec: "not %1",
    inputs: ["%b"],
    shape: "boolean",
    category: "operators",
  },
  {
    id: "OPERATORS_JOIN",
    selector: "concatenate:with:",
    spec: "join %1 %2",
    inputs: ["%s", "%s"],
    shape: "reporter",
    category: "operators",
  },
  {
    id: "OPERATORS_LETTEROF",
    selector: "letter:of:",
    spec: "letter %1 of %2",
    inputs: ["%n", "%s"],
    shape: "reporter",
    category: "operators",
  },
  {
    id: "OPERATORS_LENGTH",
    selector: "stringLength:",
    spec: "length of %1",
    inputs: ["%s"],
    shape: "reporter",
    category: "operators",
  },
  {
    id: "OPERATORS_MOD",
    selector: "%",
    spec: "%1 mod %2",
    inputs: ["%n", "%n"],
    shape: "reporter",
    category: "operators",
  },
  {
    id: "OPERATORS_ROUND",
    selector: "rounded",
    spec: "round %1",
    inputs: ["%n"],
    shape: "reporter",
    category: "operators",
  },
  {
    id: "OPERATORS_MATHOP",
    selector: "computeFunction:of:",
    spec: "%1 of %2",
    inputs: ["%m.mathOp", "%n"],
    shape: "reporter",
    category: "operators",
  },
  {
    id: "OPERATORS_CONTAINS",
    spec: "%1 contains %2?",
    inputs: ["%s", "%s"],
    shape: "boolean",
    category: "operators",
  },
  {
    id: "DATA_ITEMOFLIST",
    selector: "getLine:ofList:",
    spec: "item %1 of %2",
    inputs: ["%d.listItem", "%m.list"],
    shape: "reporter",
    category: "list",
  },
  {
    id: "DATA_ITEMNUMOFLIST",
    spec: "item # of %1 in %2",
    inputs: ["%s", "%m.list"],
    shape: "reporter",
    category: "list",
  },
  {
    id: "DATA_LENGTHOFLIST",
    selector: "lineCountOfList:",
    spec: "length of %1",
    inputs: ["%m.list"],
    shape: "reporter",
    category: "list",
  },
  {
    id: "DATA_LISTCONTAINSITEM",
    selector: "list:contains:",
    spec: "%1 contains %2?",
    inputs: ["%m.list", "%s"],
    shape: "boolean",
    category: "list",
  },
  {
    id: "wedo2.motorOn",
    spec: "turn %1 on",
    inputs: ["%m.motor"],
    shape: "stack",
    category: "extension",
  },
  {
    id: "wedo2.motorOff",
    spec: "turn %1 off",
    inputs: ["%m.motor"],
    shape: "stack",
    category: "extension",
  },
  {
    id: "wedo2.startMotorPower",
    spec: "set %1 power to %2",
    inputs: ["%m.motor", "%n"],
    shape: "stack",
    category: "extension",
  },
  {
    id: "wedo2.setMotorDirection",
    spec: "set %1 direction to %2",
    inputs: ["%m.motor2", "%m.motorDirection"],
    shape: "stack",
    category: "extension",
  },
  {
    id: "wedo2.whenDistance",
    spec: "when distance %1 %2",
    inputs: ["%m.lessMore", "%n"],
    shape: "hat",
    category: "extension",
  },
  {
    id: "wedo2.getDistance",
    spec: "distance",
    inputs: [],
    shape: "reporter",
    category: "extension",
  },
  {
    id: "wedo2.motorOnFor",
    spec: "turn %1 on for %2 seconds",
    inputs: ["%m.motor", "%n"],
    shape: "stack",
    category: "extension",
  },
  {
    id: "wedo2.setLightHue",
    spec: "set light color to %1",
    inputs: ["%n"],
    shape: "stack",
    category: "extension",
  },
  {
    id: "wedo2.playNoteFor",
    spec: "play note %1 for %2 seconds",
    inputs: ["%n", "%n"],
    shape: "stack",
    category: "extension",
  },
  {
    id: "wedo2.whenTilted",
    spec: "when tilted %1",
    inputs: ["%m.xxx"],
    shape: "hat",
    category: "extension",
  },
  {
    id: "wedo2.getTiltAngle",
    spec: "tilt angle %1",
    inputs: ["%m.xxx"],
    shape: "reporter",
    category: "extension",
  },
  {
    id: "CONTROL_ELSE",
    spec: "else",
    inputs: [],
    shape: "celse",
    category: "control",
  },
  {
    id: "scratchblocks:end",
    spec: "end",
    inputs: [],
    shape: "cend",
    category: "control",
  },
  {
    id: "scratchblocks:ellipsis",
    spec: ". . .",
    inputs: [],
    shape: "stack",
    category: "grey",
  },
  {
    id: "scratchblocks:addInput",
    spec: "%1 @addInput",
    inputs: ["%n"],
    shape: "ring",
    category: "grey",
  },
  {
    id: "SENSING_USERID",
    spec: "user id",
    inputs: [],
    shape: "reporter",
    category: "obsolete",
  },
  {
    selector: "doIf",
    spec: "if %1",
    inputs: ["%b"],
    shape: "c-block",
    category: "obsolete",
  },
  {
    selector: "doForeverIf",
    spec: "forever if %1",
    inputs: ["%b"],
    shape: "c-block cap",
    category: "obsolete",
  },
  {
    selector: "doReturn",
    spec: "stop script",
    inputs: [],
    shape: "cap",
    category: "obsolete",
  },
  {
    selector: "stopAll",
    spec: "stop all",
    inputs: [],
    shape: "cap",
    category: "obsolete",
  },
  {
    selector: "lookLike:",
    spec: "switch to costume %1",
    inputs: ["%m.costume"],
    shape: "stack",
    category: "obsolete",
  },
  {
    selector: "nextScene",
    spec: "next background",
    inputs: [],
    shape: "stack",
    category: "obsolete",
  },
  {
    selector: "startScene",
    spec: "switch to background %1",
    inputs: ["%m.backdrop"],
    shape: "stack",
    category: "obsolete",
  },
  {
    selector: "backgroundIndex",
    spec: "background #",
    inputs: [],
    shape: "reporter",
    category: "obsolete",
  },
  {
    id: "SENSING_LOUD",
    selector: "isLoud",
    spec: "loud?",
    inputs: [],
    shape: "boolean",
    category: "obsolete",
  },
  // TODO define
]
