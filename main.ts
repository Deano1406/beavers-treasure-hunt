function Warmer () {
    radio.sendString("Warmer")
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    Colder()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Colder") {
        Colder()
    }
    if (receivedString == "Warmer") {
        Warmer()
    }
})
input.onButtonPressed(Button.B, function () {
    Warmer()
})
function Colder () {
    radio.sendString("Colder")
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . # .
            . . # # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . # .
            . . # # #
            . # . # .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . # .
            . . # # #
            . . . . .
            # . # . #
            . . . . .
            `)
    }
}
radio.setGroup(1)
basic.forever(function () {
	
})
