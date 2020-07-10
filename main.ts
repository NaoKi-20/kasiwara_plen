plenbit.servoInitialSet()
basic.forever(function () {
    if (TFabConnectBeta.readValue("switch") == 0) {
        basic.showLeds(`
            . . # . .
            . . # # #
            # . # . .
            # . # . .
            # # # # #
            `)
    } else if (TFabConnectBeta.readValue("switch") == 1) {
        basic.showIcon(IconNames.Heart)
        plenbit.stdMotion(plenbit.StdMotions.WalkForward)
    } else {
        basic.showIcon(IconNames.Sad)
        plenbit.stdMotion(plenbit.StdMotions.WalkBack)
    }
})
