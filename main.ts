input.onButtonPressed(Button.A, function () {
    EscolhaJ = EscolhaJ + 1
    if (EscolhaJ > ContadorJ) {
        EscolhaJ = 0
        basic.showNumber(EscolhaJ)
    } else {
        basic.showNumber(EscolhaJ)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (ContadorJ > 0 || ContadorM > 0) {
        EscolhaM = randint(0, 3)
        while (EscolhaM > ContadorM) {
            EscolhaM += randint(0, 3)
        }
        ApostaM = randint(0, 3)
        while (ApostaM == ApostaJ) {
            ApostaM += randint(0, 3)
        }
        basic.showNumber(ApostaM)
        basic.pause(1000)
        basic.showNumber(EscolhaM)
        basic.pause(5000)
        Resultado = EscolhaJ + EscolhaM
        if (Resultado == ApostaJ) {
            basic.showString("J")
            basic.pause(1000)
            ContadorJ = ContadorJ - 1
        } else {
            if (Resultado == ApostaM) {
                ContadorM = ContadorM - 1
                basic.showString("M")
                basic.pause(1000)
            } else {
                basic.showString("N")
                basic.pause(1000)
            }
        }
    } else {
        basic.showString("Vencedor da Partida")
        if (ContadorJ == 0) {
            basic.showString("J")
            basic.pause(1000)
        } else {
            basic.showString("M")
            basic.pause(1000)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    ApostaJ = ApostaJ + 1
    basic.showNumber(ApostaJ)
})
let Resultado = 0
let EscolhaM = 0
let EscolhaJ = 0
let ContadorM = 0
let ContadorJ = 0
let ApostaM = 0
let ApostaJ = 0
ApostaJ = 0
ApostaM = 0
ContadorJ = 3
ContadorM = 3
EscolhaJ = 0
EscolhaM = 0
Resultado = 0
