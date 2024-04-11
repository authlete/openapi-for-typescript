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

import type {
    Hsk,
} from './';

/**
 * @export
 * @interface HskDeleteResponse
 */
export interface HskDeleteResponse {
    /**
     * The code which represents the result of the API call.
     * @type {string}
     * @memberof HskDeleteResponse
     */
    resultCode?: string;
    /**
     * A short message which explains the result of the API call.
     * @type {string}
     * @memberof HskDeleteResponse
     */
    resultMessage?: string;
    /**
     * Result of the API call
     * @type {string}
     * @memberof HskDeleteResponse
     */
    action?: HskDeleteResponseActionEnum;
    /**
     * @type {Hsk}
     * @memberof HskDeleteResponse
     */
    hsk?: Hsk;
}

/**
 * @export
 * @enum {string}
 */
export enum HskDeleteResponseActionEnum {
    Success = 'SUCCESS',
    InvalidRequest = 'INVALID_REQUEST',
    NotFound = 'NOT_FOUND',
    ServerError = 'SERVER_ERROR'
}

