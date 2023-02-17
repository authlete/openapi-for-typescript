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

import type {
    AuthorizationDetails,
    ClientAuthenticationMethod,
    DynamicScope,
    Pair,
} from './';

/**
 * @export
 * @interface DeviceAuthorizationResponse
 */
export interface DeviceAuthorizationResponse {
    /**
     * The code which represents the result of the API call.
     * @type {string}
     * @memberof DeviceAuthorizationResponse
     */
    resultCode?: string;
    /**
     * A short message which explains the result of the API call.
     * @type {string}
     * @memberof DeviceAuthorizationResponse
     */
    resultMessage?: string;
    /**
     * The next action that the authorization server implementation should take.
     * @type {string}
     * @memberof DeviceAuthorizationResponse
     */
    action?: DeviceAuthorizationResponseActionEnum;
    /**
     * The content that the authorization server implementation is to return to the client application. Its format varies depending on the value of `action` parameter. 
     * @type {string}
     * @memberof DeviceAuthorizationResponse
     */
    responseContent?: string;
    /**
     * The client ID of the client application that has made the device authorization request. 
     * @type {number}
     * @memberof DeviceAuthorizationResponse
     */
    clientId?: number;
    /**
     * The client ID alias of the client application that has made the device authorization request. 
     * @type {string}
     * @memberof DeviceAuthorizationResponse
     */
    clientIdAlias?: string;
    /**
     * `true` if the value of the client_id request parameter included in the device authorization request is the client ID alias. `false` if the value is the original numeric client ID. 
     * @type {boolean}
     * @memberof DeviceAuthorizationResponse
     */
    clientIdAliasUsed?: boolean;
    /**
     * The name of the client application which has made the device authorization request. 
     * @type {string}
     * @memberof DeviceAuthorizationResponse
     */
    clientName?: string;
    /**
     * @type {ClientAuthenticationMethod}
     * @memberof DeviceAuthorizationResponse
     */
    clientAuthMethod?: ClientAuthenticationMethod;
    /**
     * The scopes requested by the device authorization request.  Basically, this property holds the value of the scope request parameter in the device authorization request. However, because unregistered scopes are dropped on Authlete side, if the `scope` request parameter contains unknown scopes, the list returned by this property becomes different from the value of the `scope` request parameter.  Note that `description` property and `descriptions` property of each scope object in the array contained in this property is always `null` even if descriptions of the scopes are registered. 
     * @type {Array<string>}
     * @memberof DeviceAuthorizationResponse
     */
    scopes?: Array<string>;
    /**
     * The names of the claims which were requested indirectly via some special scopes. See [5.4. Requesting Claims using Scope Values](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims) in OpenID Connect Core 1.0 for details. 
     * @type {Array<string>}
     * @memberof DeviceAuthorizationResponse
     */
    claimNames?: Array<string>;
    /**
     * The list of ACR values requested by the device authorization request.  Basically, this property holds the value of the `acr_values` request parameter in the device authorization request. However, because unsupported ACR values are dropped on Authlete side, if the `acr_values` request parameter contains unrecognized ACR values, the list returned by this property becomes different from the value of the `acr_values` request parameter. 
     * @type {Array<string>}
     * @memberof DeviceAuthorizationResponse
     */
    acrs?: Array<string>;
    /**
     * The device verification code. This corresponds to the `device_code` property in the response to the client. 
     * @type {string}
     * @memberof DeviceAuthorizationResponse
     */
    deviceCode?: string;
    /**
     * The end-user verification code. This corresponds to the `user_code` property in the response to the client. 
     * @type {string}
     * @memberof DeviceAuthorizationResponse
     */
    userCode?: string;
    /**
     * The end-user verification URI. This corresponds to the `verification_uri` property in the response to the client. 
     * @type {string}
     * @memberof DeviceAuthorizationResponse
     */
    verificationUri?: string;
    /**
     * The end-user verification URI that includes the end-user verification code. This corresponds to the `verification_uri_complete` property in the response to the client. 
     * @type {string}
     * @memberof DeviceAuthorizationResponse
     */
    verificationUriComplete?: string;
    /**
     * The duration of the device verification code in seconds. This corresponds to the `expires_in` property in the response to the client. 
     * @type {number}
     * @memberof DeviceAuthorizationResponse
     */
    expiresIn?: number;
    /**
     * The minimum amount of time in seconds that the client must wait for between polling requests to the token endpoint. This corresponds to the `interval` property in the response to the client. 
     * @type {number}
     * @memberof DeviceAuthorizationResponse
     */
    interval?: number;
    /**
     * The warnings raised during processing the backchannel authentication request. 
     * @type {Array<string>}
     * @memberof DeviceAuthorizationResponse
     */
    warnings?: Array<string>;
    /**
     * The resources specified by the `resource` request parameters. See \"Resource Indicators for OAuth 2.0\" for details. 
     * @type {Array<string>}
     * @memberof DeviceAuthorizationResponse
     */
    resources?: Array<string>;
    /**
     * @type {AuthorizationDetails}
     * @memberof DeviceAuthorizationResponse
     */
    authorizationDetails?: AuthorizationDetails;
    /**
     * The attributes of this service that the client application belongs to. 
     * @type {Array<Pair>}
     * @memberof DeviceAuthorizationResponse
     */
    serviceAttributes?: Array<Pair>;
    /**
     * The attributes of the client. 
     * @type {Array<Pair>}
     * @memberof DeviceAuthorizationResponse
     */
    clientAttributes?: Array<Pair>;
    /**
     * The dynamic scopes which the client application requested by the scope request parameter. 
     * @type {Array<DynamicScope>}
     * @memberof DeviceAuthorizationResponse
     */
    dynamicScopes?: Array<DynamicScope>;
}

/**
 * @export
 * @enum {string}
 */
export enum DeviceAuthorizationResponseActionEnum {
    InternalServerError = 'INTERNAL_SERVER_ERROR',
    BadRequest = 'BAD_REQUEST',
    Unauthorized = 'UNAUTHORIZED',
    Ok = 'OK'
}

