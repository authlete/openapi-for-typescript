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
 * @interface PushedAuthorizationResponse
 */
export interface PushedAuthorizationResponse {
    /**
     * The code which represents the result of the API call.
     * @type {string}
     * @memberof PushedAuthorizationResponse
     */
    resultCode?: string;
    /**
     * A short message which explains the result of the API call.
     * @type {string}
     * @memberof PushedAuthorizationResponse
     */
    resultMessage?: string;
    /**
     * The next action that the authorization server implementation should take. Any other value other than \"CREATED\" should be handled as unsuccessful result.
     * @type {string}
     * @memberof PushedAuthorizationResponse
     */
    action?: PushedAuthorizationResponseActionEnum;
    /**
     * The request_uri created to the client to be used as request_uri on the authorize call. 
     * @type {string}
     * @memberof PushedAuthorizationResponse
     */
    requestUri?: string;
    /**
     * The content that the authorization server implementation is to return to the client application. 
     * @type {string}
     * @memberof PushedAuthorizationResponse
     */
    responseContent?: string;
    /**
     * The client authentication method that the client application declares that it uses at the token endpoint. This property corresponds to `token_endpoint_auth_method` in [OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata). 
     * @type {string}
     * @memberof PushedAuthorizationResponse
     */
    clientAuthMethod?: PushedAuthorizationResponseClientAuthMethodEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum PushedAuthorizationResponseActionEnum {
    Created = 'CREATED',
    BadRequest = 'BAD_REQUEST',
    Unauthorized = 'UNAUTHORIZED',
    Forbidden = 'FORBIDDEN',
    PayloadTooLarge = 'PAYLOAD_TOO_LARGE',
    InternalServerError = 'INTERNAL_SERVER_ERROR'
}
/**
 * @export
 * @enum {string}
 */
export enum PushedAuthorizationResponseClientAuthMethodEnum {
    None = 'NONE',
    ClientSecretBasic = 'CLIENT_SECRET_BASIC',
    ClientSecretPost = 'CLIENT_SECRET_POST',
    ClientSecretJwt = 'CLIENT_SECRET_JWT',
    PrivateKeyJwt = 'PRIVATE_KEY_JWT',
    TlsClientAuth = 'TLS_CLIENT_AUTH',
    SelfSignedTlsClientAuth = 'SELF_SIGNED_TLS_CLIENT_AUTH'
}
