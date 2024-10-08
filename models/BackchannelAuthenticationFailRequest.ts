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
 * @interface BackchannelAuthenticationFailRequest
 */
export interface BackchannelAuthenticationFailRequest {
    /**
     * The ticket which should be deleted on a call of Authlete\'s `/backchannel/authentication/fail` API. This request parameter is not mandatory but optional. If this request parameter is given and the ticket belongs to the service, the specified ticket is deleted from the database. Giving this parameter is recommended to clean up the storage area for the service. 
     * @type {string}
     * @memberof BackchannelAuthenticationFailRequest
     */
    ticket: string;
    /**
     * The reason of the failure of the backchannel authentication request. This request parameter is not mandatory but optional. However, giving this parameter is recommended. If omitted, `SERVER_ERROR` is used as a reason. 
     * @type {string}
     * @memberof BackchannelAuthenticationFailRequest
     */
    reason: BackchannelAuthenticationFailRequestReasonEnum;
    /**
     * The description of the error. This corresponds to the `error_description` property in the response to the client. 
     * @type {string}
     * @memberof BackchannelAuthenticationFailRequest
     */
    errorDescription?: string;
    /**
     * The URI of a document which describes the error in detail. If this optional request parameter is given, its value is used as the value of the `error_uri` property.
     * @type {string}
     * @memberof BackchannelAuthenticationFailRequest
     */
    errorUri?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum BackchannelAuthenticationFailRequestReasonEnum {
    AccessDenied = 'ACCESS_DENIED',
    ExpiredLoginHintToken = 'EXPIRED_LOGIN_HINT_TOKEN',
    InvalidBindingMessage = 'INVALID_BINDING_MESSAGE',
    InvalidTarget = 'INVALID_TARGET',
    InvalidUserCode = 'INVALID_USER_CODE',
    MissingUserCode = 'MISSING_USER_CODE',
    ServerError = 'SERVER_ERROR',
    UnauthorizedClient = 'UNAUTHORIZED_CLIENT',
    UnknownUserId = 'UNKNOWN_USER_ID'
}

