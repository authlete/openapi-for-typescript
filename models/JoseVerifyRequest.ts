// tslint:disable
/**
 * Authlete API
 * Authlete API Document. 
 *
 * The version of the OpenAPI document: 2.2.30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface JoseVerifyRequest
 */
export interface JoseVerifyRequest {
    /**
     * A JOSE object. 
     * @type {string}
     * @memberof JoseVerifyRequest
     */
    jose: string;
    /**
     * Mandatory claims that are required to be included in the JOSE object. 
     * @type {string}
     * @memberof JoseVerifyRequest
     */
    mandatoryClaims?: string;
    /**
     * Allowable clock skew in seconds. 
     * @type {number}
     * @memberof JoseVerifyRequest
     */
    clockSkew?: number;
    /**
     * The identifier of the client application whose keys are required for verification of the JOSE object. 
     * @type {string}
     * @memberof JoseVerifyRequest
     */
    clientIdentifier?: string;
    /**
     * The flag which indicates whether the signature of the JOSE object has been signed by a client application with the client\'s private key or a shared symmetric key.
     * @type {boolean}
     * @memberof JoseVerifyRequest
     */
    signedByClient?: boolean;
}
