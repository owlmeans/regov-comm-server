"use strict";
/**
 *  Copyright 2022 OwlMeans
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv");
const http_1 = __importDefault(require("http"));
const regov_ssi_core_1 = require("@owlmeans/regov-ssi-core");
const ext_1 = require("@owlmeans/regov-ext-identity/dist/ext");
const regov_comm_1 = require("@owlmeans/regov-comm");
require("./warmup");
const util_1 = __importDefault(require("util"));
util_1.default.inspect.defaultOptions.depth = 8;
const httpServer = http_1.default.createServer((_, response) => {
    response.writeHead(404);
    response.end();
});
const registry = (0, regov_ssi_core_1.buildExtensionRegistry)();
registry.registerSync((0, ext_1.buildIdentityExtension)('RegovIdentity', { appName: 'Re:gov' }, {
    name: 'OwlMeans Re:gov Identity',
    code: 'regov-identity',
    organization: 'OwlMeans',
    home: 'https://owlmeans.org/',
    schemaBaseUrl: 'https://owlmeans.org/schemas/'
}));
(0, regov_comm_1.startWSServer)(httpServer, {
    timeout: parseInt(process.env.RECEIVE_MESSAGE_TIMEOUT || '30'),
    did: {
        prefix: process.env.DID_PREFIX,
        baseSchemaUrl: process.env.DID_SCHEMA,
        schemaPath: process.env.DID_SCHEMA_PATH,
    },
    message: {
        ttl: 2 * 24 * 3600 * 1000
    }
}, registry);
const port = process.env.SERVER_WS_PORT || '80';
httpServer.listen(parseInt(port), "localhost", () => {
    console.log('Server is listening on port: ' + port);
});
//# sourceMappingURL=index.js.map