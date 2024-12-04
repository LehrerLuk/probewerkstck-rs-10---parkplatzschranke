pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.servoWritePin(AnalogPin.P0, 90)
    }
    basic.pause(100)
    if (input.buttonIsPressed(Button.B)) {
        pins.servoWritePin(AnalogPin.P0, 0)
    }
    basic.pause(100)
})
