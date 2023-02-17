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
 * @interface PushedAuthReqResponse
 */
export interface PushedAuthReqResponse {
    /**
     * The code which represents the result of the API call.
     * @type {string}
     * @memberof PushedAuthReqResponse
     */
    resultCode?: string;
    /**
     * A short message which explains the result of the API call.
     * @type {string}
     * @memberof PushedAuthReqResponse
     */
    resultMessage?: string;
    /**
     * The next action that the authorization server implementation should take. Any other value other than `CREATED` should be handled as unsuccessful result. 
     * @type {string}
     * @memberof PushedAuthReqResponse
     */
    action?: PushedAuthReqResponseActionEnum;
    /**
     * The request_uri created to the client to be used as request_uri on the authorize call. 
     * @type {string}
     * @memberof PushedAuthReqResponse
     */
    requestUri?: string;
    /**
     * The content that the authorization server implementation is to return to the client application. 
     * @type {string}
     * @memberof PushedAuthReqResponse
     */
    responseContent?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum PushedAuthReqResponseActionEnum {
    Created = 'CREATED',
    BadRequest = 'BAD_REQUEST',
    Unauthorized = 'UNAUTHORIZED',
    Forbidden = 'FORBIDDEN',
    PayloadTooLarge = 'PAYLOAD_TOO_LARGE',
    InternalServerError = 'INTERNAL_SERVER_ERROR'
}

