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

require('dotenv').config()
import http from 'http'
import { buildExtensionRegistry } from "@owlmeans/vc-core"
import { buildIdentityExtension } from "@owlmeans/vc-ext-identity/dist/ext"
import { startWSServer } from '@owlmeans/vc-comm'

import './warmup'

import util from 'util'
util.inspect.defaultOptions.depth = 8


const httpServer = http.createServer((_, response) => {
  response.writeHead(404)
  response.end()
})

const registry = buildExtensionRegistry()
registry.registerSync(buildIdentityExtension(
  'OwlMeansIdentity', { appName: 'OwlMeans ID' },
  {
    name: 'OwlMeans Identity',
    code: 'owlmeans-identity',
    organization: 'OwlMeans',
    home: 'https://owlmeans.com/',
    schemaBaseUrl: 'https://schemas.owlmeans.org'
  }
))

startWSServer(httpServer, {
  timeout: parseInt(process.env.RECEIVE_MESSAGE_TIMEOUT || '30'),
  did: {
    prefix: process.env.DID_PREFIX,
    baseSchemaUrl: process.env.DID_SCHEMA,
    schemaPath: process.env.DID_SCHEMA_PATH,
  },
  message: {
    ttl: 2 * 24 * 3600 * 1000
  }
}, registry)

const port = process.env.SERVER_WS_PORT || '80'
httpServer.listen(parseInt(port), "0.0.0.0", () => {
  console.log('Server is listening on port: ' + port)
})
