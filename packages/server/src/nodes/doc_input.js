'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
class OPEADocInput {
    constructor() {
        this.label = 'Doc Input'
        this.name = 'doc_input'
        this.version = 1.0
        this.type = 'UploadFile'
        this.icon = 'opea-horizontal-color.svg'
        this.category = 'Controls'
        this.description = 'User Input from Document Upload'
        this.baseClasses = [this.type]
        this.tags = ['OPEA']
    }
}
module.exports = { nodeClass: OPEADocInput }
