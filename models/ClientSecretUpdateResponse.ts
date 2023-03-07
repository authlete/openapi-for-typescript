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
 * @interface ClientSecretUpdateResponse
 */
export interface ClientSecretUpdateResponse {
    /**
     * The code which represents the result of the API call.
     * @type {string}
     * @memberof ClientSecretUpdateResponse
     */
    resultCode?: string;
    /**
     * A short message which explains the result of the API call.
     * @type {string}
     * @memberof ClientSecretUpdateResponse
     */
    resultMessage?: string;
    /**
     * The new client secret. 
     * @type {string}
     * @memberof ClientSecretUpdateResponse
     */
    newClientSecret?: string;
    /**
     * The old client secret. 
     * @type {string}
     * @memberof ClientSecretUpdateResponse
     */
    oldClientSecret?: string;
}