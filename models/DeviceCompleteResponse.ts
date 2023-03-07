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
 * @interface DeviceCompleteResponse
 */
export interface DeviceCompleteResponse {
    /**
     * The code which represents the result of the API call.
     * @type {string}
     * @memberof DeviceCompleteResponse
     */
    resultCode?: string;
    /**
     * A short message which explains the result of the API call.
     * @type {string}
     * @memberof DeviceCompleteResponse
     */
    resultMessage?: string;
    /**
     * The next action that the authorization server implementation should take. 
     * @type {string}
     * @memberof DeviceCompleteResponse
     */
    action?: DeviceCompleteResponseActionEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum DeviceCompleteResponseActionEnum {
    ServerError = 'SERVER_ERROR',
    UserCodeNotExist = 'USER_CODE_NOT_EXIST',
    UserCodeExpired = 'USER_CODE_EXPIRED',
    InvalidRequest = 'INVALID_REQUEST',
    Success = 'SUCCESS'
}

