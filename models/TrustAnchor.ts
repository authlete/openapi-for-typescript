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
 * @export
 * @interface TrustAnchor
 */
export interface TrustAnchor {
    /**
     * the entity ID of the trust anchor 
     * @type {string}
     * @memberof TrustAnchor
     */
    entityId?: string;
    /**
     * the JWK Set document containing public keys of the trust anchor 
     * @type {string}
     * @memberof TrustAnchor
     */
    jwks?: string;
}