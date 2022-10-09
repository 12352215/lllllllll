let s = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    s = powerbrick.GC_Gesture()
    if (s == 1) {
        basic.showArrow(ArrowNames.North)
        powerbrick.GC_MODE(powerbrick.GCMode.Gesture)
    }
    if (s == 2) {
        basic.showArrow(ArrowNames.East)
        powerbrick.GC_MODE(powerbrick.GCMode.Gesture)
    }
    if (s == 3) {
        basic.showArrow(ArrowNames.West)
        powerbrick.GC_MODE(powerbrick.GCMode.Gesture)
    }
    if (s == 4) {
        basic.showArrow(ArrowNames.West)
        powerbrick.GC_MODE(powerbrick.GCMode.Gesture)
    }
})
basic.forever(function () {
    if (powerbrick.GC_Gesture() == 2) {
        powerbrick.MotorRun(powerbrick.Motors.M1, -193)
        basic.pause(200)
        powerbrick.MotorStop(powerbrick.Motors.M1)
    }
    if (powerbrick.GC_Gesture() == 4) {
        powerbrick.MotorRun(powerbrick.Motors.M1, -193)
        basic.pause(200)
        powerbrick.MotorStop(powerbrick.Motors.M1)
    }
})
basic.forever(function () {
    s = powerbrick.GC_Gesture()
    if (s == 3) {
        powerbrick.Servo(powerbrick.Servos.S1, 140)
    }
})
