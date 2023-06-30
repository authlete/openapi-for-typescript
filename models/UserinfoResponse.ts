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

import type {
    Pair,
    Property,
} from './';

/**
 * @export
 * @interface UserinfoResponse
 */
export interface UserinfoResponse {
    /**
     * The code which represents the result of the API call.
     * @type {string}
     * @memberof UserinfoResponse
     */
    resultCode?: string;
    /**
     * A short message which explains the result of the API call.
     * @type {string}
     * @memberof UserinfoResponse
     */
    resultMessage?: string;
    /**
     * The next action that the authorization server implementation should take.
     * @type {string}
     * @memberof UserinfoResponse
     */
    action?: UserinfoResponseActionEnum;
    /**
     * The list of claims that the client application requests to be embedded in the ID token. 
     * @type {Array<string>}
     * @memberof UserinfoResponse
     */
    claims?: Array<string>;
    /**
     * The ID of the client application which is associated with the access token. 
     * @type {number}
     * @memberof UserinfoResponse
     */
    clientId?: number;
    /**
     * The client ID alias when the authorization request for the access token was made. 
     * @type {string}
     * @memberof UserinfoResponse
     */
    clientIdAlias?: string;
    /**
     * The flag which indicates whether the client ID alias was used when the authorization request for the access token was made. 
     * @type {boolean}
     * @memberof UserinfoResponse
     */
    clientIdAliasUsed?: boolean;
    /**
     * The content that the authorization server implementation can use as the value of `WWW-Authenticate` header on errors. 
     * @type {string}
     * @memberof UserinfoResponse
     */
    responseContent?: string;
    /**
     * The scopes covered by the access token. 
     * @type {Array<string>}
     * @memberof UserinfoResponse
     */
    scopes?: Array<string>;
    /**
     * The subject (= resource owner\'s ID). 
     * @type {string}
     * @memberof UserinfoResponse
     */
    subject?: string;
    /**
     * The access token that came along with the userinfo request. 
     * @type {string}
     * @memberof UserinfoResponse
     */
    token?: string;
    /**
     * The extra properties associated with the access token. 
     * @type {Array<Property>}
     * @memberof UserinfoResponse
     */
    properties?: Array<Property>;
    /**
     * The value of the `userinfo` property in the `claims` request parameter or in the `claims` property in an authorization request object.  A client application may request certain claims be embedded in an ID token or in a response from the userInfo endpoint. There are several ways. Including the `claims` request parameter and including the `claims` property in a request object are such examples. In both cases, the value of the `claims` parameter/property is JSON. Its format is described in [5.5. Requesting Claims using the \"claims\" Request Parameter](https://openid.net/specs/openid-connect-core-1_0.html#ClaimsParameter).  The following is an excerpt from the specification. You can find `userinfo` and `id_token` are top-level properties.  ```json {   \"userinfo\":   {     \"given_name\": { \"essential\": true },     \"nickname\": null,     \"email\": { \"essential\": true },     \"email_verified\": { \"essential\": true },     \"picture\": null,     \"http://example.info/claims/groups\": null   },   \"id_token\":   {     \"auth_time\": { \"essential\": true },     \"acr\": { \"values\": [ \"urn:mace:incommon:iap:silver\" ] }   } } ````  The value of this property is the value of the `userinfo` property in JSON format. For example, if the JSON above is included in an authorization request, this property holds JSON equivalent to the following.  ```json {   \"given_name\": { \"essential\": true },   \"nickname\": null,   \"email\": { \"essential\": true },   \"email_verified\": { \"essential\": true },   \"picture\": null,   \"http://example.info/claims/groups\": null } ```  Note that if a request object is given and it contains the `claims` property and if the `claims` request parameter is also given, the value of this property holds the former value. 
     * @type {string}
     * @memberof UserinfoResponse
     */
    userInfoClaims?: string;
    /**
     * The attributes of this service that the client application belongs to. 
     * @type {Array<Pair>}
     * @memberof UserinfoResponse
     */
    serviceAttributes?: Array<Pair>;
    /**
     * The attributes of the client. 
     * @type {Array<Pair>}
     * @memberof UserinfoResponse
     */
    clientAttributes?: Array<Pair>;
    /**
     * the claims that the user has consented for the client application to know. 
     * @type {Array<string>}
     * @memberof UserinfoResponse
     */
    consentedClaims?: Array<string>;
    /**
     * Get names of claims that are requested indirectly by <i>\"transformed claims\"</i>.  <p> A client application can request <i>\"transformed claims\"</i> by adding names of transformed claims in the `claims` request parameter. The following is an example of the `claims` request parameter that requests a predefined transformed claim named `18_or_over` and a transformed claim named `nationality_usa` to be embedded in the response from the userinfo endpoint. </p>  ```json {   \"transformed_claims\": {     \"nationality_usa\": {       \"claim\": \"nationalities\",       \"fn\": [         [ \"eq\", \"USA\" ],         \"any\"       ]     }   },   \"userinfo\": {     \"::18_or_over\": null,     \":nationality_usa\": null   } } ```  The example above assumes that a transformed claim named `18_or_over` is predefined by the authorization server like below.  ```json {   \"18_or_over\": {     \"claim\": \"birthdate\",     \"fn\": [       \"years_ago\",       [ \"gte\", 18 ]     ]   } } ```  In the example, the {@code nationalities} claim is requested indirectly by the `nationality_usa` transformed claim. Likewise, the {@code birthdate} claim is requested indirectly by the `18_or_over` transformed claim.  When the `claims` request parameter of an authorization request is like the example above, this `requestedClaimsForTx` property will hold the following value.  ```json [ \"birthdate\", \"nationalities\" ] ```  It is expected that the authorization server implementation prepares values of the listed claims and passes them as the value of the `claimsForTx` request parameter when it calls the `/api/auth/userinfo/issue` API. The following is an example of the value of the `claimsForTx` request parameter.  ```json {   \"birthdate\": \"1970-01-23\",   \"nationalities\": [ \"DEU\", \"USA\" ] } ``` 
     * @type {Array<string>}
     * @memberof UserinfoResponse
     */
    requestedClaimsForTx?: Array<string>;
    /**
     * Names of verified claims that will be referenced when transformed claims are computed. 
     * @type {Array<Array<string>>}
     * @memberof UserinfoResponse
     */
    requestedVerifiedClaimsForTx?: Array<Array<string>>;
    /**
     * the value of the `transformed_claims` property in the `claims` request parameter of an authorization request or in the `claims` property in a request object. 
     * @type {string}
     * @memberof UserinfoResponse
     */
    transformedClaims?: string;
    /**
     * The entity ID of the client. 
     * @type {string}
     * @memberof UserinfoResponse
     */
    clientEntityId?: string;
    /**
     * Flag which indicates whether the entity ID of the client was used when the request for the access token was made.
     * @type {boolean}
     * @memberof UserinfoResponse
     */
    clientEntityIdUsed?: boolean;
}

/**
 * @export
 * @enum {string}
 */
export enum UserinfoResponseActionEnum {
    InternalServerError = 'INTERNAL_SERVER_ERROR',
    BadRequest = 'BAD_REQUEST',
    Unauthorized = 'UNAUTHORIZED',
    Forbidden = 'FORBIDDEN',
    Ok = 'OK'
}

