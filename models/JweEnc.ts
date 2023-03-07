// tslint:disable
/**
 * Authlete API
 * Authlete API Document. 
 *
 * The version of the OpenAPI document: 2.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * This is the encryption algorithm to be used when encrypting a JWT on client or server side. Depending upon the context, this refers to encryption done by the client or by the server. For instance:   - as `authorizationEncryptionEnc` value, it refers to the encryption algorithm used by server when creating a JARM response   - as `requestEncryptionEnc` value, it refers to the expected encryption algorithm used by the client when encrypting a Request Object   - as `idTokenEncryptionEnc` value, it refers to the algorithm used by the server to encrypt id_tokens 
 * @export
 * @enum {string}
 */
export enum JweEnc {
    A128CbcHs256 = 'A128CBC_HS256',
    A192CbcHs384 = 'A192CBC_HS384',
    A256CbcHs512 = 'A256CBC_HS512',
    A128Gcm = 'A128GCM',
    A192Gcm = 'A192GCM',
    A256Gcm = 'A256GCM'
}
