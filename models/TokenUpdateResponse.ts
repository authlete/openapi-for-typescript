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
    AuthzDetails,
    Property,
} from './';

/**
 * @export
 * @interface TokenUpdateResponse
 */
export interface TokenUpdateResponse {
    /**
     * The code which represents the result of the API call.
     * @type {string}
     * @memberof TokenUpdateResponse
     */
    resultCode?: string;
    /**
     * A short message which explains the result of the API call.
     * @type {string}
     * @memberof TokenUpdateResponse
     */
    resultMessage?: string;
    /**
     * The next action that the authorization server implementation should take.
     * @type {string}
     * @memberof TokenUpdateResponse
     */
    action?: TokenUpdateResponseActionEnum;
    /**
     * The access token which has been specified by the request.
     * @type {string}
     * @memberof TokenUpdateResponse
     */
    accessToken?: string;
    /**
     * The date at which the access token will expire. 
     * @type {number}
     * @memberof TokenUpdateResponse
     */
    accessTokenExpiresAt?: number;
    /**
     * The date at which the refresh token will expire. 
     * @type {number}
     * @memberof TokenUpdateResponse
     */
    refreshTokenExpiresAt?: number;
    /**
     * The extra properties associated with the access token. 
     * @type {Array<Property>}
     * @memberof TokenUpdateResponse
     */
    properties?: Array<Property>;
    /**
     * The scopes associated with the access token. 
     * @type {Array<string>}
     * @memberof TokenUpdateResponse
     */
    scopes?: Array<string>;
    /**
     * @type {AuthzDetails}
     * @memberof TokenUpdateResponse
     */
    authorizationDetails?: AuthzDetails;
    /**
     * The token type associated with the access token. 
     * @type {string}
     * @memberof TokenUpdateResponse
     */
    tokenType?: string;
    /**
     * the flag which indicates whether the access token is for an external attachment. 
     * @type {boolean}
     * @memberof TokenUpdateResponse
     */
    forExternalAttachment?: boolean;
}

/**
 * @export
 * @enum {string}
 */
export enum TokenUpdateResponseActionEnum {
    InternalServerError = 'INTERNAL_SERVER_ERROR',
    BadRequest = 'BAD_REQUEST',
    Forbidden = 'FORBIDDEN',
    NotFound = 'NOT_FOUND',
    Ok = 'OK'
}

