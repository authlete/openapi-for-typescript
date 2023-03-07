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
 * @interface ClientRegistrationDeleteResponse
 */
export interface ClientRegistrationDeleteResponse {
    /**
     * The code which represents the result of the API call.
     * @type {string}
     * @memberof ClientRegistrationDeleteResponse
     */
    resultCode?: string;
    /**
     * A short message which explains the result of the API call.
     * @type {string}
     * @memberof ClientRegistrationDeleteResponse
     */
    resultMessage?: string;
    /**
     * The next action that the authorization server implementation should take. 
     * @type {string}
     * @memberof ClientRegistrationDeleteResponse
     */
    action?: ClientRegistrationDeleteResponseActionEnum;
    /**
     * The content that the authorization server implementation is to return to the client application. Its format varies depending on the value of `action` parameter. 
     * @type {string}
     * @memberof ClientRegistrationDeleteResponse
     */
    responseContent?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum ClientRegistrationDeleteResponseActionEnum {
    InternalServerError = 'INTERNAL_SERVER_ERROR',
    BadRequest = 'BAD_REQUEST',
    Deleted = 'DELETED',
    Unauthorized = 'UNAUTHORIZED'
}

