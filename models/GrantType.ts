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
 * The grant type of the access token when the access token was created. 
 * @export
 * @enum {string}
 */
export enum GrantType {
    AuthorizationCode = 'AUTHORIZATION_CODE',
    Implicit = 'IMPLICIT',
    Password = 'PASSWORD',
    ClientCredentials = 'CLIENT_CREDENTIALS',
    RefreshToken = 'REFRESH_TOKEN',
    Ciba = 'CIBA',
    DeviceCode = 'DEVICE_CODE',
    TokenExchange = 'TOKEN_EXCHANGE',
    JwtBearer = 'JWT_BEARER'
}

