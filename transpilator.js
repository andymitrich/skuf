class Transpilator {
    constructor() {
        this.keywords = {
            'функция': 'function',
            'печать': 'alert',
            'если': 'if',
            'четко': '',
            'иначе': 'else',
            'пока': 'while',
            'капец': 'break'
        }
    }
    transpile(code) {
        let jsCode = code

        for (const [sk, js] of Object.entries(this.keywords)) {
            jsCode = jsCode.replace(new RegExp(sk, 'g'), js)
        }

        jsCode = jsCode.replace(/пока не припечет/g, 'while(true)')
        jsCode = jsCode.replace(/если четко \((.+?)\)/g, 'if ($1)')

        return jsCode
    }
}
