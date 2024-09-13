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
    Client,
} from './';

/**
 * @export
 * @interface FederationRegistrationResponse
 */
export interface FederationRegistrationResponse {
    /**
     * The code which represents the result of the API call.
     * @type {string}
     * @memberof FederationRegistrationResponse
     */
    resultCode?: string;
    /**
     * A short message which explains the result of the API call.
     * @type {string}
     * @memberof FederationRegistrationResponse
     */
    resultMessage?: string;
    /**
     * The next action that the authorization server implementation should take.
     * @type {string}
     * @memberof FederationRegistrationResponse
     */
    action?: FederationRegistrationResponseActionEnum;
    /**
     * The content that the authorization server implementation can use as the value of `WWW-Authenticate` header on errors. 
     * @type {string}
     * @memberof FederationRegistrationResponse
     */
    responseContent?: string;
    /**
     * @type {Client}
     * @memberof FederationRegistrationResponse
     */
    client?: Client;
}

/**
 * @export
 * @enum {string}
 */
export enum FederationRegistrationResponseActionEnum {
    Ok = 'OK',
    BadRequest = 'BAD_REQUEST',
    NotFound = 'NOT_FOUND',
    InternalServerError = 'INTERNAL_SERVER_ERROR'
}
