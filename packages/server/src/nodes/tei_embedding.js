'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
// const modelLoader_1 = require("../../../src/modelLoader");
// const utils_1 = require("../../../src/utils");
const llamaindex_1 = require('llamaindex')
class OPEAEmbeddings {
    constructor() {
        //@ts-ignore
        // this.loadMethods = {
        //     async listModels() {
        //         return await (0, modelLoader_1.getModels)(modelLoader_1.MODEL_TYPE.EMBEDDING, 'openAIEmbedding_LlamaIndex');
        //     }
        // };
        this.label = 'TEI Embedding Langchain'
        this.name = 'opea_service@embedding_tei_langchain'
        this.version = 1.0
        this.type = 'EmbedDoc'
        this.icon = 'opea-horizontal-color.svg'
        this.category = 'Embeddings'
        this.description = 'Text Embedding Inference using Langchain'
        this.baseClasses = [this.type, 'EmbeddingResponse', 'ChatCompletionRequest']
        this.tags = ['OPEA']
        // this.credential = {
        //     label: 'Connect Credential',
        //     name: 'credential',
        //     type: 'credential',
        //     credentialNames: ['openAIApi']
        // }
        this.inputs = [
            {
                label: 'Text To Embed',
                name: 'textToEmbed',
                type: 'TextDoc|EmbeddingRequest|ChatCompletionRequest'
            },
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'string',
                default: 'BAAI/bge-large-en-v1.5'
            }
        ]
    }
    // async init(nodeData, _, options) {
    //     return null
    //     // const timeout = nodeData.inputs?.timeout;
    //     // const modelName = nodeData.inputs?.modelName;
    //     // const basePath = nodeData.inputs?.basepath;
    //     // const credentialData = await (0, utils_1.getCredentialData)(nodeData.credential ?? '', options);
    //     // const openAIApiKey = (0, utils_1.getCredentialParam)('openAIApiKey', credentialData, nodeData);
    //     // const obj = {
    //     //     apiKey: openAIApiKey,
    //     //     model: modelName
    //     // };
    //     // if (timeout)
    //     //     obj.timeout = parseInt(timeout, 10);
    //     // if (basePath) {
    //     //     obj.additionalSessionOptions = {
    //     //         baseURL: basePath
    //     //     };
    //     // }
    //     // const model = new llamaindex_1.OpenAIEmbedding(obj);
    //     // return model;
    // }
}
module.exports = { nodeClass: OPEAEmbeddings }
//# sourceMappingURL=OpenAIEmbedding_LlamaIndex.js.map
