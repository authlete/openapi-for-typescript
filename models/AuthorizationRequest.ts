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
 * @interface AuthorizationRequest
 */
export interface AuthorizationRequest {
    /**
     * OAuth 2.0 authorization request parameters which are the request parameters that the OAuth 2.0 authorization endpoint of the authorization server implementation received from the client application.  The value of parameters is either (1) the entire query string when the HTTP method of the request from the client application is `GET` or (2) the entire entity body (which is formatted in `application/x-www-form-urlencoded`) when the HTTP method of the request from the client application is `POST`.
     * @type {string}
     * @memberof AuthorizationRequest
     */
    parameters: string;
}
