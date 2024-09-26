'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
class OPEAChatInput {
    constructor() {
        this.label = 'Chat Input'
        this.name = 'chat_input'
        this.version = 1.0
        this.type = 'ChatCompletionRequest'
        this.icon = 'opea-horizontal-color.svg'
        this.category = 'Controls'
        this.description = 'User Input from Chat Window'
        this.baseClasses = [this.type]
        this.tags = ['OPEA']
    }
}
module.exports = { nodeClass: OPEAChatInput }
