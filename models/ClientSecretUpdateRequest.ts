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
 * @interface ClientSecretUpdateRequest
 */
export interface ClientSecretUpdateRequest {
    /**
     * The new value of the client secret. Valid characters for a client secret are `A-Z`, `a-z`, `0-9`, `-`, and `_`. The maximum length of a client secret is 86.
     * @type {string}
     * @memberof ClientSecretUpdateRequest
     */
    clientSecret: string;
}