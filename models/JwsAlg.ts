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
 * The signature algorithm for JWT. This value is represented on \'alg\' attribute of the header of JWT.  it\'s semantics depends upon where is this defined, for instance:   - as service accessTokenSignAlg value, it defines that access token are JWT and the algorithm used to sign it. Check your [KB article](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/jwt-based-access-token).   - as client authorizationSignAlg value, it represents the signature algorithm used when [creating a JARM response](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/enabling-jarm).   - or as client requestSignAlg value, it specifies which is the expected signature used by [client on a Request Object](https://kb.authlete.com/en/s/oauth-and-openid-connect/a/request-objects). 
 * @export
 * @enum {string}
 */
export enum JwsAlg {
    None = 'NONE',
    Hs256 = 'HS256',
    Hs384 = 'HS384',
    Hs512 = 'HS512',
    Rs256 = 'RS256',
    Rs384 = 'RS384',
    Rs512 = 'RS512',
    Es256 = 'ES256',
    Es384 = 'ES384',
    Es512 = 'ES512',
    Ps256 = 'PS256',
    Ps384 = 'PS384',
    Ps512 = 'PS512',
    Es256K = 'ES256K',
    EdDsa = 'EdDSA'
}

