"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_request_json_1 = __importDefault(require("./schemas/auth-request.json"));
const auth_json_1 = __importDefault(require("./schemas/auth.json"));
const did_schema_json_1 = __importDefault(require("./schemas/did-schema.json"));
const doc_signature_json_1 = __importDefault(require("./schemas/doc-signature.json"));
const doc_signature_request_json_1 = __importDefault(require("./schemas/doc-signature-request.json"));
const group_membership_json_1 = __importDefault(require("./schemas/group-membership.json"));
const group_json_1 = __importDefault(require("./schemas/group.json"));
const identity_json_1 = __importDefault(require("./schemas/identity.json"));
const regov_ssi_core_1 = require("@owlmeans/regov-ssi-core");
(0, regov_ssi_core_1.documentWarmer)('https://owlmeans.com/schemas/did-schema.json#', JSON.stringify(did_schema_json_1.default));
(0, regov_ssi_core_1.documentWarmer)('https://owlmeans.com/schemas/did-schema.json', JSON.stringify(did_schema_json_1.default));
(0, regov_ssi_core_1.documentWarmer)('https://owlmeans.com/schema/auth-request', JSON.stringify(auth_request_json_1.default));
(0, regov_ssi_core_1.documentWarmer)('https://owlmeans.com/schema/auth', JSON.stringify(auth_json_1.default));
(0, regov_ssi_core_1.documentWarmer)('https://owlmeans.com/schema/doc-signature', JSON.stringify(doc_signature_json_1.default));
(0, regov_ssi_core_1.documentWarmer)('https://owlmeans.com/schema/doc-signature-request', JSON.stringify(doc_signature_request_json_1.default));
(0, regov_ssi_core_1.documentWarmer)('https://owlmeans.com/schema/group-membership', JSON.stringify(group_membership_json_1.default));
(0, regov_ssi_core_1.documentWarmer)('https://owlmeans.com/schema/group', JSON.stringify(group_json_1.default));
(0, regov_ssi_core_1.documentWarmer)('https://owlmeans.com/schema/identity', JSON.stringify(identity_json_1.default));
//# sourceMappingURL=warmup.js.map