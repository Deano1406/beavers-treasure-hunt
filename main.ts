input.onButtonPressed(Button.A, function () {
    Colder()
})
function Colder () {
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
basic.forever(function () {
	
})
