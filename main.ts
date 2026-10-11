//% color="#7B61FF" icon="\uf086" block="Dialogue Maker"
namespace DialogueMaker {
    let answer = false

    //% block="ask $question"
    //% question.defl="Do you want to enter?"
    //% weight=100
    export function ask(question: string) {
        answer = game.ask(question)
    }

    //% block="if YES pressed"
    //% weight=90
    export function ifYes(handler: () => void) {
        if (answer) {
            handler()
        }
    }

    //% block="if NO pressed"
    //% weight=80
    export function ifNo(handler: () => void) {
        if (!answer) {
            handler()
        }
    }

    //% block="show dialogue $name: $text"
    //% name.defl="Shopkeeper"
    //% text.defl="Welcome!"
    //% weight=70
    export function say(name: string, text: string) {
        game.showLongText(name + ": " + text, DialogLayout.Bottom)
    }
}
