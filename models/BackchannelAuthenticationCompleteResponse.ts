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

import type {
    AuthorizationDetails,
    DeliveryMode,
    Pair,
} from './';

/**
 * @export
 * @interface BackchannelAuthenticationCompleteResponse
 */
export interface BackchannelAuthenticationCompleteResponse {
    /**
     * The code which represents the result of the API call.
     * @type {string}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    resultCode?: string;
    /**
     * A short message which explains the result of the API call.
     * @type {string}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    resultMessage?: string;
    /**
     * The next action that the authorization server implementation should take. 
     * @type {string}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    action?: BackchannelAuthenticationCompleteResponseActionEnum;
    /**
     * The content that the authorization server implementation is to return to the client application. Its format varies depending on the value of `action` parameter. 
     * @type {string}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    responseContent?: string;
    /**
     * The client ID of the client application that has made the backchannel authentication request. 
     * @type {number}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    clientId?: number;
    /**
     * The client ID alias of the client application that has made the backchannel authentication request. 
     * @type {string}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    clientIdAlias?: string;
    /**
     * `true` if the value of the client_id request parameter included in the backchannel authentication request is the client ID alias. `false` if the value is the original numeric client ID. 
     * @type {boolean}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    clientIdAliasUsed?: boolean;
    /**
     * The name of the client application which has made the backchannel authentication request. 
     * @type {string}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    clientName?: string;
    /**
     * @type {DeliveryMode}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    deliveryMode?: DeliveryMode;
    /**
     * The client notification endpoint to which a notification needs to be sent. This corresponds to the `client_notification_endpoint` metadata of the client application. 
     * @type {string}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    clientNotificationEndpoint?: string;
    /**
     * The client notification token which needs to be embedded as a Bearer token in the Authorization header in the notification. This is the value of the `client_notification_token` request parameter included in the backchannel authentication request. 
     * @type {string}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    clientNotificationToken?: string;
    /**
     * The newly issued authentication request ID. 
     * @type {string}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    authReqId?: string;
    /**
     * The issued access token. 
     * @type {string}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    accessToken?: string;
    /**
     * The issued refresh token. 
     * @type {string}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    refreshToken?: string;
    /**
     * The issued ID token. 
     * @type {string}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    idToken?: string;
    /**
     * The duration of the access token in seconds. 
     * @type {number}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    accessTokenDuration?: number;
    /**
     * The duration of the refresh token in seconds. 
     * @type {number}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    refreshTokenDuration?: number;
    /**
     * The duration of the ID token in seconds. 
     * @type {number}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    idTokenDuration?: number;
    /**
     * The issued access token in JWT format. 
     * @type {string}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    jwtAccessToken?: string;
    /**
     * The resources specified by the `resource` request parameters or by the `resource` property in the request object. If both are given, the values in the request object should be set. See \"Resource Indicators for OAuth 2.0\" for details. 
     * @type {Array<string>}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    resources?: Array<string>;
    /**
     * @type {AuthorizationDetails}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    authorizationDetails?: AuthorizationDetails;
    /**
     * The attributes of this service that the client application belongs to. 
     * @type {Array<Pair>}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    serviceAttributes?: Array<Pair>;
    /**
     * The attributes of the client. 
     * @type {Array<Pair>}
     * @memberof BackchannelAuthenticationCompleteResponse
     */
    clientAttributes?: Array<Pair>;
}

/**
 * @export
 * @enum {string}
 */
export enum BackchannelAuthenticationCompleteResponseActionEnum {
    ServerError = 'SERVER_ERROR',
    NoAction = 'NO_ACTION',
    Notification = 'NOTIFICATION'
}

