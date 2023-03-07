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
    AuthorizationDetails,
    Pair,
    Property,
} from './';

/**
 * @export
 * @interface TokenIssueResponse
 */
export interface TokenIssueResponse {
    /**
     * The code which represents the result of the API call.
     * @type {string}
     * @memberof TokenIssueResponse
     */
    resultCode?: string;
    /**
     * A short message which explains the result of the API call.
     * @type {string}
     * @memberof TokenIssueResponse
     */
    resultMessage?: string;
    /**
     * The next action that the authorization server implementation should take.
     * @type {string}
     * @memberof TokenIssueResponse
     */
    action?: TokenIssueResponseActionEnum;
    /**
     * The content that the authorization server implementation is to return to the client application. Its format is JSON. 
     * @type {string}
     * @memberof TokenIssueResponse
     */
    responseContent?: string;
    /**
     * The value of `username` request parameter in the token request. The client application must specify username when it uses [Resource Owner Password Grant](https://datatracker.ietf.org/doc/html/rfc6749#section-4.3). In other words, when the value of `grant_type` request parameter is `password`, `username` request parameter must come along.  This parameter has a value only if the value of `grant_type` request parameter is `password` and the token request is valid. 
     * @type {string}
     * @memberof TokenIssueResponse
     */
    username?: string;
    /**
     * The newly issued access token. This parameter is a non-null value only when the value of `action` parameter is `OK`.
     * @type {string}
     * @memberof TokenIssueResponse
     */
    accessToken?: string;
    /**
     * The datetime at which the newly issued access token will expire. The value is represented in milliseconds since the Unix epoch (1970-01-01). 
     * @type {number}
     * @memberof TokenIssueResponse
     */
    accessTokenExpiresAt?: number;
    /**
     * The duration of the newly issued access token in seconds.
     * @type {number}
     * @memberof TokenIssueResponse
     */
    accessTokenDuration?: number;
    /**
     * The refresh token. This parameter is a non-null value only when `action` is `OK` and the service supports the refresh token flow. If `refreshTokenKept` is set to `false`, a new refresh token is issued and the old refresh token used in the refresh token flow is invalidated. On the contrary, if `refreshTokenKept` is set to `true`, the refresh token itself is not refreshed. 
     * @type {string}
     * @memberof TokenIssueResponse
     */
    refreshToken?: string;
    /**
     * The datetime at which the newly issued refresh token will expire. The value is represented in milliseconds since the Unix epoch (1970-01-01). 
     * @type {number}
     * @memberof TokenIssueResponse
     */
    refreshTokenExpiresAt?: number;
    /**
     * The duration of the newly issued refresh token in seconds.
     * @type {number}
     * @memberof TokenIssueResponse
     */
    refreshTokenDuration?: number;
    /**
     * The client ID.
     * @type {number}
     * @memberof TokenIssueResponse
     */
    clientId?: number;
    /**
     * The client ID alias. If the client did not have an alias, this parameter is `null`. 
     * @type {string}
     * @memberof TokenIssueResponse
     */
    clientIdAlias?: string;
    /**
     * The flag which indicates whether the client ID alias was used when the token request was made. `true` if the client ID alias was used when the token request was made. 
     * @type {boolean}
     * @memberof TokenIssueResponse
     */
    clientIdAliasUsed?: boolean;
    /**
     * The subject (= resource owner\'s ID) of the access token. Even if an access token has been issued by calling `/api/auth/token` API, this parameter is `null` if the flow of the token request was [Client Credentials Flow](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4) (`grant_type=client_credentials`) because it means the access token is not associated with any specific end-user. 
     * @type {string}
     * @memberof TokenIssueResponse
     */
    subject?: string;
    /**
     * The scopes covered by the access token.
     * @type {Array<string>}
     * @memberof TokenIssueResponse
     */
    scopes?: Array<string>;
    /**
     * The extra properties associated with the access token. This parameter is `null` when no extra property is associated with the issued access token. 
     * @type {Array<Property>}
     * @memberof TokenIssueResponse
     */
    properties?: Array<Property>;
    /**
     * The newly issued access token in JWT format. If the authorization server is configured to issue JWT-based access tokens (= if the service\'s `accessTokenSignAlg` value is a non-null value), a JWT-based access token is issued along with the original random-string one. 
     * @type {string}
     * @memberof TokenIssueResponse
     */
    jwtAccessToken?: string;
    /**
     * The target resources of the access token being issued. See \"Resource Indicators for OAuth 2.0\" for details. 
     * @type {Array<string>}
     * @memberof TokenIssueResponse
     */
    accessTokenResources?: Array<string>;
    /**
     * @type {AuthorizationDetails}
     * @memberof TokenIssueResponse
     */
    authorizationDetails?: AuthorizationDetails;
    /**
     * The attributes of this service that the client application belongs to. 
     * @type {Array<Pair>}
     * @memberof TokenIssueResponse
     */
    serviceAttributes?: Array<Pair>;
    /**
     * The attributes of the client. 
     * @type {Array<Pair>}
     * @memberof TokenIssueResponse
     */
    clientAttributes?: Array<Pair>;
    /**
     * The entity ID of the client. 
     * @type {string}
     * @memberof TokenIssueResponse
     */
    clientEntityId?: string;
    /**
     * Flag which indicates whether the entity ID of the client was used when the request for the access token was made.
     * @type {boolean}
     * @memberof TokenIssueResponse
     */
    clientEntityIdUsed?: boolean;
}

/**
 * @export
 * @enum {string}
 */
export enum TokenIssueResponseActionEnum {
    InternalServerError = 'INTERNAL_SERVER_ERROR',
    Ok = 'OK'
}

