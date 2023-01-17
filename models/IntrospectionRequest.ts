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
 * @interface IntrospectionRequest
 */
export interface IntrospectionRequest {
    /**
     * An access token to introspect.
     * @type {string}
     * @memberof IntrospectionRequest
     */
    token: string;
    /**
     * A string array listing names of scopes which the caller (= a protected resource endpoint of the service) requires. When the content type of the request from the service is `application/x-www-form-urlencoded`, the format of `scopes` is a space-separated list of scope names.  If this parameter is a non-empty array and if it contains a scope which is not covered by the access token,`action=FORBIDDEN` with `error=insufficient_scope` is returned from Authlete. 
     * @type {Array<string>}
     * @memberof IntrospectionRequest
     */
    scopes?: Array<string>;
    /**
     * A subject (= a user account managed by the service) whom the caller (= a protected resource endpoint of the service) requires.  If this parameter is not `null` and if the value does not match the subject who is associated with the access token, `action=FORBIDDEN` with `error=invalid_request` is returned from Authlete. 
     * @type {string}
     * @memberof IntrospectionRequest
     */
    subject?: string;
    /**
     * Client certificate in PEM format, used to validate binding against access tokens using the TLS client certificate confirmation method. 
     * @type {string}
     * @memberof IntrospectionRequest
     */
    clientCertificate?: string;
    /**
     * `DPoP` header presented by the client during the request to the resource server.  The header contains a signed JWT which includes the public key that is paired with the private key used to sign the JWT. See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details. 
     * @type {string}
     * @memberof IntrospectionRequest
     */
    dpop?: string;
    /**
     * HTTP method of the request from the client to the protected resource endpoint. This field is used to validate the `DPoP` header.  See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details. 
     * @type {string}
     * @memberof IntrospectionRequest
     */
    htm?: string;
    /**
     * URL of the protected resource endpoint. This field is used to validate the `DPoP` header.  See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details. 
     * @type {string}
     * @memberof IntrospectionRequest
     */
    htu?: string;
    /**
     * The resources specified by the `resource` request parameters in the token request. See \"Resource Indicators for OAuth 2.0\" for details. 
     * @type {Array<string>}
     * @memberof IntrospectionRequest
     */
    resources?: Array<string>;
}
