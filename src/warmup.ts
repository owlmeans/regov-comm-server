
import authRequest from './schemas/auth-request.json'
import auth from './schemas/auth.json'
import didSchema from './schemas/did-schema.json'
import docSignature from './schemas/doc-signature.json'
import docSignatureReq from './schemas/doc-signature-request.json'
import groupMembership from './schemas/group-membership.json'
import group from './schemas/group.json'
import identity from './schemas/identity.json'

import { documentWarmer, getCryptoAdapter } from '@owlmeans/vc-core'
import { encodeBase58, decodeBase58, toBeArray, getBytes } from 'ethers'
import { sha256, randomBytes } from 'ethers'
import { HDNodeWallet } from 'ethers'
import crypto from 'crypto'
import { secp256k1 } from '@noble/curves/secp256k1'

const adapter = getCryptoAdapter()
adapter.setBase58Impl(encodeBase58, decodeBase58, toBeArray)
adapter.setSha256Impl(sha256, getBytes)
adapter.setAesImpl(crypto)
adapter.setRandomImpl(randomBytes)
adapter.setSecpImpl(secp256k1.sign, secp256k1.verify)
adapter.WalletClass = HDNodeWallet as any

documentWarmer('https://owlmeans.com/schemas/did-schema.json#', JSON.stringify(didSchema))
documentWarmer('https://owlmeans.com/schemas/did-schema.json', JSON.stringify(didSchema))
documentWarmer('https://owlmeans.com/schema/auth-request', JSON.stringify(authRequest))
documentWarmer('https://owlmeans.com/schema/auth', JSON.stringify(auth))
documentWarmer('https://owlmeans.com/schema/doc-signature', JSON.stringify(docSignature))
documentWarmer('https://owlmeans.com/schema/doc-signature-request', JSON.stringify(docSignatureReq))
documentWarmer('https://owlmeans.com/schema/group-membership', JSON.stringify(groupMembership))
documentWarmer('https://owlmeans.com/schema/group', JSON.stringify(group))
documentWarmer('https://owlmeans.com/schema/identity', JSON.stringify(identity))