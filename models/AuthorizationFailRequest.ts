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
 * @interface AuthorizationFailRequest
 */
export interface AuthorizationFailRequest {
    /**
     * The ticket issued from Authlete `/auth/authorization` API. 
     * @type {string}
     * @memberof AuthorizationFailRequest
     */
    ticket: string;
    /**
     * The reason of the failure of the authorization request. For more details, see [NO_INTERACTION] in the description of `/auth/authorization` API. 
     * @type {string}
     * @memberof AuthorizationFailRequest
     */
    reason: AuthorizationFailRequestReasonEnum;
    /**
     * The custom description about the authorization failure.
     * @type {string}
     * @memberof AuthorizationFailRequest
     */
    description?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum AuthorizationFailRequestReasonEnum {
    Unknown = 'UNKNOWN',
    NotLoggedIn = 'NOT_LOGGED_IN',
    MaxAgeNotSupported = 'MAX_AGE_NOT_SUPPORTED',
    ExceedsMaxAge = 'EXCEEDS_MAX_AGE',
    DifferentSubject = 'DIFFERENT_SUBJECT',
    AcrNotSatisfied = 'ACR_NOT_SATISFIED',
    Denied = 'DENIED',
    ServerError = 'SERVER_ERROR',
    NotAuthenticated = 'NOT_AUTHENTICATED',
    AccountSelectionRequired = 'ACCOUNT_SELECTION_REQUIRED',
    ConsentRequired = 'CONSENT_REQUIRED',
    InteractionRequired = 'INTERACTION_REQUIRED',
    InvalidTarget = 'INVALID_TARGET'
}

