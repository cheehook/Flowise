'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
class OPEARedisRetreiver {
    constructor() {
        this.label = 'Redis Retreiver'
        this.name = 'opea_service@retriever_redis'
        this.version = 1.0
        this.type = 'SearchedDoc'
        this.icon = 'opea-horizontal-color.svg'
        this.category = 'Retreiver'
        this.description = 'Redis Retreiver with Langchain'
        this.baseClasses = [this.type, 'RetrievalResponse', 'ChatCompletionRequest']
        this.tags = ['OPEA']
        this.inputs = [
            {
                label: 'Search Query',
                name: 'text',
                type: 'EmbedDoc|RetrievalRequest|ChatCompletionRequest'
            },
            {
                label: 'Redis Vector Store',
                name: 'vector_db',
                type: 'EmbedDoc'
            },
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'string',
                default: 'BAAI/bge-base-en-v1.5'
            },
            {
                label: 'Search Type',
                name: 'search_type',
                type: 'options',
                default: 'similarity',
                options: [
                    {
                        name: 'similarity',
                        label: 'similarity'
                    },
                    {
                        name: 'similarity_distance_threshold',
                        label: 'similarity_distance_threshold'
                    },
                    {
                        name: 'similarity_score_threshold',
                        label: 'similarity_score_threshold'
                    },
                    {
                        name: 'mmr',
                        label: 'mmr'
                    }
                ]
            }
        ]
    }
}

module.exports = { nodeClass: OPEARedisRetreiver }
