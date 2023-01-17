// tslint:disable
/**
 * Authlete API
 * Authlete API Document. 
 *
 * The version of the OpenAPI document: 2.2.25
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface TokenFailResponse
 */
export interface TokenFailResponse {
    /**
     * The code which represents the result of the API call.
     * @type {string}
     * @memberof TokenFailResponse
     */
    resultCode?: string;
    /**
     * A short message which explains the result of the API call.
     * @type {string}
     * @memberof TokenFailResponse
     */
    resultMessage?: string;
    /**
     * The next action that the authorization server implementation should take.
     * @type {string}
     * @memberof TokenFailResponse
     */
    action?: TokenFailResponseActionEnum;
    /**
     * The content that the authorization server implementation is to return to the client application. Its format varies depending on the value of `action` parameter. See description for details. 
     * @type {string}
     * @memberof TokenFailResponse
     */
    responseContent?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum TokenFailResponseActionEnum {
    InternalServerError = 'INTERNAL_SERVER_ERROR',
    BadRequest = 'BAD_REQUEST'
}

