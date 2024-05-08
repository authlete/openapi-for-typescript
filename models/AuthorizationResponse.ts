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
    AuthzDetails,
    Client,
    Display,
    DynamicScope,
    Grant,
    GrantManagementAction,
    Prompt,
    Scope,
    Service,
} from './';

/**
 * @export
 * @interface AuthorizationResponse
 */
export interface AuthorizationResponse {
    /**
     * The code which represents the result of the API call.
     * @type {string}
     * @memberof AuthorizationResponse
     */
    resultCode?: string;
    /**
     * A short message which explains the result of the API call.
     * @type {string}
     * @memberof AuthorizationResponse
     */
    resultMessage?: string;
    /**
     * The next action that the authorization server implementation should take.
     * @type {string}
     * @memberof AuthorizationResponse
     */
    action?: AuthorizationResponseActionEnum;
    /**
     * @type {Client}
     * @memberof AuthorizationResponse
     */
    client?: Client;
    /**
     * @type {Display}
     * @memberof AuthorizationResponse
     */
    display?: Display;
    /**
     * The maximum authentication age. This value comes from `max_age` request parameter, or `defaultMaxAge` configuration parameter of the client application when the authorization request does not contain `max_age` request parameter.  See \"[OpenID Connect Core 1.0, 3.1.2.1. Authentication Request](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest), max_age\" for `max_age` request parameter, and see \"[OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata), default_max_age\" for `defaultMaxAge` configuration parameter. 
     * @type {number}
     * @memberof AuthorizationResponse
     */
    maxAge?: number;
    /**
     * @type {Service}
     * @memberof AuthorizationResponse
     */
    service?: Service;
    /**
     * The scopes that the client application requests. This value comes from `scope` request parameter. If the request does not contain `scope` parameter, this parameter is a list of scopes which are registered as default. If the authorization request does not have `scope` request parameter and the service has not registered any default scope, the value of this parameter is `null`.  It is ensured that scopes listed by this parameters are contained in the list of supported scopes which are specified by `supportedScopes` configuration parameter of the service. Unsupported scopes in the authorization request do not cause an error and are just ignored.  OpenID Connect defines some scope names which need to be treated specially. The table below lists the special scope names.  | Name | Description | | --- | --- | | `openid` | This scope must be contained in `scope` request parameter to promote an OAuth 2.0 authorization request to an OpenID Connect request. It is described in \"[OpenID Connect Core 1.0, 3.1.2.1. Authentication Request](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest), scope\". | | `profile` | This scope is used to request some claims to be embedded in the ID token. The claims are `name`, `family_name`, `given_name`, `middle_name`, `nickname`, `preferred_username`, `profile`, `picture`, `website`, `gender`, `birthdate`, `zoneinfo`, `locale`, and `updated_at`. It is described in [OpenID Connect Core 1.0, 5.4. Requesting Claims using Scope Values](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims). | | `email` | This scope is used to request some claims to be embedded in the ID token. The claims are `email` and `email_verified`. It is described in [OpenID Connect Core 1.0, 5.4. Requesting Claims using Scope Values](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims). | | `address` |  This scope is used to request `address` claim to be embedded in the ID token. It is described in [OpenID Connect Core 1.0, 5.4. Requesting Claims using Scope Values](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims).<br><br> The format of `address` claim is not a simple string. It is described in [OpenID Connect Core 1.0, 5.1.1. Address Claim](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim).  | | `phone` | This scope is used to request some claims to be embedded in the ID token. The claims are `phone_number` and `phone_number_verified`. It is described in [OpenID Connect Core 1.0, 5.4. Requesting Claims using Scope Values](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims).  | | `offline_access` | The following is an excerpt about this scope from [OpenID Connect Core 1.0, 11. Offline Access](https://openid.net/specs/openid-connect-core-1_0.html#OfflineAccess). <blockquote>This scope value requests that an OAuth 2.0 Refresh Token be issued that can be used to obtain an Access Token that grants access to the end-user\'s userinfo endpoint even when the end-user is not present (not logged in).</blockquote>  |  Note that, if `response_type` request parameter does not contain code, `offline_acccess` scope is removed from this list even when scope request parameter contains `offline_access`. This behavior is a requirement written in [OpenID Connect Core 1.0, 11. Offline Access](https://openid.net/specs/openid-connect-core-1_0.html#OfflineAccess). 
     * @type {Array<Scope>}
     * @memberof AuthorizationResponse
     */
    scopes?: Array<Scope>;
    /**
     * The locales that the client application presented as candidates to be used for UI. This value comes from `ui_locales` request parameter. The format of `ui_locales` is a space-separated list of language tag values defined in [RFC5646](https://datatracker.ietf.org/doc/html/rfc5646). See \"[OpenID Connect Core 1.0, 3.1.2.1. Authentication Request](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest), ui_locales\" for details.  It is ensured that locales listed by this parameters are contained in the list of supported UI locales which are specified by `supportedUiLocales` configuration parameter of the service. Unsupported UI locales in the authorization request do not cause an error and are just ignored. 
     * @type {Array<string>}
     * @memberof AuthorizationResponse
     */
    uiLocales?: Array<string>;
    /**
     * End-user\'s preferred languages and scripts for claims. This value comes from `claims_locales` request parameter. The format of `claims_locales` is a space-separated list of language tag values defined in [RFC5646](https://datatracker.ietf.org/doc/html/rfc5646). See \"[OpenID Connect Core 1.0, 5.2. Claims Languages and Scripts](https://openid.net/specs/openid-connect-core-1_0.html#ClaimsLanguagesAndScripts)\" for details.  It is ensured that locales listed by this parameters are contained in the list of supported claim locales which are specified by `supportedClaimsLocales` configuration parameter of the service. Unsupported claim locales in the authorization request do not cause an error and are just ignored. 
     * @type {Array<string>}
     * @memberof AuthorizationResponse
     */
    claimsLocales?: Array<string>;
    /**
     * The list of claims that the client application requests to be embedded in the ID token. The value comes from (1) `id_token` in `claims` request parameter [1] and/or (2) special scopes (`profile`, `email`, `address` and `phone`) which are expanded to claims.  See [OpenID Connect Core 1.0, 5.5. Requesting Claims using the \"claims\" Request Parameter](https://openid.net/specs/openid-connect-core-1_0.html#ClaimsParameter) for `claims` request parameter, and see [OpenID Connect Core 1.0, 5.4. Requesting Claims using Scope Values](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims) for the special scopes. 
     * @type {Array<string>}
     * @memberof AuthorizationResponse
     */
    claims?: Array<string>;
    /**
     * This boolean value indicates whether the authentication of the end-user must be one of the ACRs (Authentication Context Class References) listed in `acrs` parameter. This parameter becomes `true` only when (1) the authorization request contains `claims` request parameter and (2) `acr` claim is in it, and (3) `essential` property of the `acr` claim is `true`. See [OpenID Connect Core 1.0, 5.5.1.1. Requesting the \"acr\" Claim](https://openid.net/specs/openid-connect-core-1_0.html#acrSemantics) for details. 
     * @type {boolean}
     * @memberof AuthorizationResponse
     */
    acrEssential?: boolean;
    /**
     * `true` if the value of the `client_id` request parameter included in the authorization request is the client ID alias. `false` if the value is the original numeric client ID. 
     * @type {boolean}
     * @memberof AuthorizationResponse
     */
    clientIdAliasUsed?: boolean;
    /**
     * The list of ACRs (Authentication Context Class References) one of which the client application requests to be satisfied for the authentication of the end-user. This value comes from `acr_values` request parameter or `defaultAcrs` configuration parameter of the client application.  See \"[OpenID Connect Core 1.0, 3.1.2.1. Authentication Request](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest), acr_values\" for `acr_values` request parameter, and see \"[OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata), default_acr_values\" for `defaultAcrs` configuration parameter. 
     * @type {Array<string>}
     * @memberof AuthorizationResponse
     */
    acrs?: Array<string>;
    /**
     * The subject (= unique user ID managed by the authorization server implementation) that the client application expects to grant authorization. The value comes from `sub` claim in `claims` request parameter. 
     * @type {string}
     * @memberof AuthorizationResponse
     */
    subject?: string;
    /**
     * A hint about the login identifier of the end-user. The value comes from `login_hint` request parameter.
     * @type {string}
     * @memberof AuthorizationResponse
     */
    loginHint?: string;
    /**
     * The list of values of prompt request parameter. See \"[OpenID Connect Core 1.0, 3.1.2.1. Authentication Request](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest), prompt\" for prompt request parameter.
     * @type {Array<Prompt>}
     * @memberof AuthorizationResponse
     */
    prompts?: Array<Prompt>;
    /**
     * @type {Prompt}
     * @memberof AuthorizationResponse
     */
    lowestPrompt?: Prompt;
    /**
     * The payload part of the request object. The value of this proprty is `null` if the authorization request does not include a request object. 
     * @type {string}
     * @memberof AuthorizationResponse
     */
    requestObjectPayload?: string;
    /**
     * The value of the `id_token` property in the claims request parameter or in the claims property in a request object.  A client application may request certain claims be embedded in an ID token or in a response from the userInfo endpoint. There are several ways. Including the `claims` request parameter and including the `claims` property in a request object are such examples. In both the cases, the value of the `claims` parameter/property is JSON. Its format is described in [5.5. Requesting Claims using the \"claims\" Request Parameter](https://openid.net/specs/openid-connect-core-1_0.html#ClaimsParameter).  The following is an excerpt from the specification. You can find `userinfo` and `id_token` are top-level properties.  ```json {   \"userinfo\":   {     \"given_name\": { \"essential\": true },     \"nickname\": null,     \"email\": { \"essential\": true },     \"email_verified\": { \"essential\": true },     \"picture\": null,     \"http://example.info/claims/groups\": null   },   \"id_token\":   {     \"auth_time\": { \"essential\": true },     \"acr\": { \"values\": [ \"urn:mace:incommon:iap:silver\" ] }   } } ```  This value of this property is the value of the `id_token` property in JSON format. For example, if the JSON above is included in an authorization request, this property holds JSON equivalent to the following.  ```json {   \"auth_time\": { \"essential\": true },   \"acr\": { \"values\": [ \"urn:mace:incommon:iap:silver\" ] } } ```  Note that if a request object is given and it contains the `claims` property and if the `claims` request parameter is also given, this property holds the former value. 
     * @type {string}
     * @memberof AuthorizationResponse
     */
    idTokenClaims?: string;
    /**
     * The value of the `userinfo` property in the `claims` request parameter or in the `claims` property in a request object.  A client application may request certain claims be embedded in an ID token or in a response from the userInfo endpoint. There are several ways. Including the `claims` request parameter and including the `claims` property in a request object are such examples. In both the cases, the value of the `claims` parameter/property is JSON. Its format is described in [5.5. Requesting Claims using the \"claims\" Request Parameter](https://openid.net/specs/openid-connect-core-1_0.html#ClaimsParameter).  The following is an excerpt from the specification. You can find `userinfo` and `id_token` are top-level properties.  ```json {   \"userinfo\":   {     \"given_name\": { \"essential\": true },     \"nickname\": null,     \"email\": { \"essential\": true },     \"email_verified\": { \"essential\": true },     \"picture\": null,     \"http://example.info/claims/groups\": null   },   \"id_token\":   {     \"auth_time\": { \"essential\": true },     \"acr\": { \"values\": [ \"urn:mace:incommon:iap:silver\" ] }   } } ````  The value of this property is the value of the `userinfo` property in JSON format. For example, if the JSON above is included in an authorization request, this property holds JSON equivalent to the following.  ```json {   \"given_name\": { \"essential\": true },   \"nickname\": null,   \"email\": { \"essential\": true },   \"email_verified\": { \"essential\": true },   \"picture\": null,   \"http://example.info/claims/groups\": null } ```  Note that if a request object is given and it contains the `claims` property and if the `claims` request parameter is also given, the value of this property holds the former value. 
     * @type {string}
     * @memberof AuthorizationResponse
     */
    userInfoClaims?: string;
    /**
     * The resources specified by the `resource` request parameters or by the `resource` property in the request object. If both are given, the values in the request object should be set. See \"Resource Indicators for OAuth 2.0\" for details. 
     * @type {Array<string>}
     * @memberof AuthorizationResponse
     */
    resources?: Array<string>;
    /**
     * @type {AuthzDetails}
     * @memberof AuthorizationResponse
     */
    authorizationDetails?: AuthzDetails;
    /**
     * The `purpose` request parameter is defined in [9. Transaction-specific Purpose](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html#name-transaction-specific-purpos) of [OpenID Connect for Identity Assurance 1.0](https://openid.net/specs/openid-connect-4-identity-assurance-1_0.html) as follows:  > purpose: OPTIONAL. String describing the purpose for obtaining certain user data from the OP. The purpose MUST NOT be shorter than 3 characters and MUST NOT be longer than 300 characters. If these rules are violated, the authentication request MUST fail and the OP returns an error invalid_request to the RP. 
     * @type {string}
     * @memberof AuthorizationResponse
     */
    purpose?: string;
    /**
     * The content that the authorization server implementation is to return to the client application. Its format varies depending on the value of `action` parameter. 
     * @type {string}
     * @memberof AuthorizationResponse
     */
    responseContent?: string;
    /**
     * A ticket issued by Authlete to the service implementation. This is needed when the service implementation calls either `/auth/authorization/fail` API or `/auth/authorization/issue` API. 
     * @type {string}
     * @memberof AuthorizationResponse
     */
    ticket?: string;
    /**
     * The dynamic scopes which the client application requested by the scope request parameter. 
     * @type {Array<DynamicScope>}
     * @memberof AuthorizationResponse
     */
    dynamicScopes?: Array<DynamicScope>;
    /**
     * @type {GrantManagementAction}
     * @memberof AuthorizationResponse
     */
    gmAction?: GrantManagementAction;
    /**
     * the value of the `grant_id` request parameter of the device authorization request.  The `grant_id` request parameter is defined in [Grant Management for OAuth 2.0](https://openid.net/specs/fapi-grant-management.html) , which is supported by Authlete 2.3 and newer versions. 
     * @type {string}
     * @memberof AuthorizationResponse
     */
    grantId?: string;
    /**
     * @type {Grant}
     * @memberof AuthorizationResponse
     */
    grant?: Grant;
    /**
     * The subject identifying the user who has given the grant identified by the `grant_id` request parameter of the device authorization request.  Authlete 2.3 and newer versions support <a href= \"https://openid.net/specs/fapi-grant-management.html\">Grant Management for OAuth 2.0</a>. An authorization request may contain a `grant_id` request parameter which is defined in the specification. If the value of the request parameter is valid, {@link #getGrantSubject()} will return the subject of the user who has given the grant to the client application. Authorization server implementations may use the value returned from {@link #getGrantSubject()} in order to determine the user to authenticate.  The user your system will authenticate during the authorization process (or has already authenticated) may be different from the user of the grant. The first implementer\'s draft of \"Grant Management for OAuth 2.0\" does not mention anything about the case, so the behavior in the case is left to implementations. Authlete will not perform the grant management action when the `subject` passed to Authlete does not match the user of the grant. 
     * @type {string}
     * @memberof AuthorizationResponse
     */
    grantSubject?: string;
    /**
     * Get names of claims that are requested indirectly by <i>\"transformed claims\"</i>.  <p> A client application can request <i>\"transformed claims\"</i> by adding names of transformed claims in the `claims` request parameter. The following is an example of the `claims` request parameter that requests a predefined transformed claim named `18_or_over` and a transformed claim named `nationality_usa` to be embedded in the response from the userinfo endpoint. </p>  ```json {   \"transformed_claims\": {     \"nationality_usa\": {       \"claim\": \"nationalities\",       \"fn\": [         [ \"eq\", \"USA\" ],         \"any\"       ]     }   },   \"userinfo\": {     \"::18_or_over\": null,     \":nationality_usa\": null   } } ```  The example above assumes that a transformed claim named `18_or_over` is predefined by the authorization server like below.  ```json {   \"18_or_over\": {     \"claim\": \"birthdate\",     \"fn\": [       \"years_ago\",       [ \"gte\", 18 ]     ]   } } ```  In the example, the `nationalities` claim is requested indirectly by the `nationality_usa` transformed claim. Likewise, the `birthdate` claim is requested indirectly by the `18_or_over` transformed claim.  When the `claims` request parameter of an authorization request is like the example above, this `requestedClaimsForTx` property will hold the following value.  ```json [ \"birthdate\", \"nationalities\" ] ```  It is expected that the authorization server implementation prepares values of the listed claims and passes them as the value of the `claimsForTx` request parameter when it calls the `/api/auth/userinfo/issue` API. The following is an example of the value of the `claimsForTx` request parameter.  ```json {   \"birthdate\": \"1970-01-23\",   \"nationalities\": [ \"DEU\", \"USA\" ] } ``` 
     * @type {Array<string>}
     * @memberof AuthorizationResponse
     */
    requestedClaimsForTx?: Array<string>;
    /**
     * Names of verified claims that will be referenced when transformed claims are computed. 
     * @type {Array<Array<string>>}
     * @memberof AuthorizationResponse
     */
    requestedVerifiedClaimsForTx?: Array<Array<string>>;
    /**
     * the value of the `transformed_claims` property in the `claims` request parameter of an authorization request or in the `claims` property in a request object. 
     * @type {string}
     * @memberof AuthorizationResponse
     */
    transformedClaims?: string;
    /**
     * Flag which indicates whether the entity ID of the client was used when the request for the access token was made.
     * @type {boolean}
     * @memberof AuthorizationResponse
     */
    clientEntityIdUsed?: boolean;
}

/**
 * @export
 * @enum {string}
 */
export enum AuthorizationResponseActionEnum {
    InternalServerError = 'INTERNAL_SERVER_ERROR',
    BadRequest = 'BAD_REQUEST',
    Location = 'LOCATION',
    Form = 'FORM',
    NoInteraction = 'NO_INTERACTION',
    Interaction = 'INTERACTION'
}

