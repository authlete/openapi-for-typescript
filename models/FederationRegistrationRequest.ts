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
 * @interface FederationRegistrationRequest
 */
export interface FederationRegistrationRequest {
    /**
     * The entity configuration of a relying party. 
     * @type {string}
     * @memberof FederationRegistrationRequest
     */
    entityConfiguration?: string;
    /**
     * The trust chain of a relying party. 
     * @type {string}
     * @memberof FederationRegistrationRequest
     */
    trustChain?: string;
}