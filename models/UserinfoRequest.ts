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

/**
 * @export
 * @interface UserinfoRequest
 */
export interface UserinfoRequest {
    /**
     * An access token. 
     * @type {string}
     * @memberof UserinfoRequest
     */
    token: string;
    /**
     * Client certificate used in the TLS connection established between the client application and the userinfo endpoint.  The value of this request parameter is referred to when the access token given to the userinfo endpoint was bound to a client certificate when it was issued. See [OAuth 2.0 Mutual TLS Client Authentication and Certificate-Bound Access Tokens] (https://datatracker.ietf.org/doc/rfc8705/) for details about the specification of certificate-bound access tokens. 
     * @type {string}
     * @memberof UserinfoRequest
     */
    clientCertificate?: string;
    /**
     * `DPoP` header presented by the client during the request to the user info endpoint.  The header contains a signed JWT which includes the public key that is paired with the private key used to sign the JWT. See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details. 
     * @type {string}
     * @memberof UserinfoRequest
     */
    dpop?: string;
    /**
     * HTTP method of the user info request. This field is used to validate the DPoP header. In normal cases, the value is either `GET` or `POST`. 
     * @type {string}
     * @memberof UserinfoRequest
     */
    htm?: string;
    /**
     * URL of the user info endpoint. This field is used to validate the DPoP header.  If this parameter is omitted, the `userInfoEndpoint` property of the service is used as the default value. See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details.
     * @type {string}
     * @memberof UserinfoRequest
     */
    htu?: string;
}
