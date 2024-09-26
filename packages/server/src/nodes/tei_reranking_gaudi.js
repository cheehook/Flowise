'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
class OPEAReranking {
    constructor() {
        this.label = 'TEI Reranking Gaudi'
        this.name = 'opea_service@reranking_tgi_gaudi'
        this.version = 1.0
        this.type = 'LLMParamsDoc'
        this.icon = 'opea-horizontal-color.svg'
        this.category = 'Reranking'
        this.description = 'TEI Reranking with Gaudi'
        this.baseClasses = [this.type, 'RerankingResponse', 'ChatCompletionRequest']
        this.tags = ['OPEA']
        this.inputs = [
            {
                label: 'Documents',
                name: 'retreived_docs',
                type: 'SearchedDocs|RerankingRequest|ChatCompletionRequest'
            },
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'string',
                default: 'BAAI/bge-reranker-base'
            },
            {
                label: 'Top N',
                name: 'top_n',
                type: 'number',
                default: 1,
                optional: true,
                additionalParams: true
            }
        ]
    }
}
module.exports = { nodeClass: OPEAReranking }
