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

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined } from '../runtime';
import type { OperationOpts, HttpHeaders } from '../runtime';
import type {
    IntrospectionRequest,
    IntrospectionResponse,
    Result,
    StandardIntrospectionRequest,
    StandardIntrospectionResponse,
} from '../models';

export interface AuthIntrospectionApiRequest {
    introspectionRequest: IntrospectionRequest;
}

export interface AuthIntrospectionStandardApiRequest {
    standardIntrospectionRequest: StandardIntrospectionRequest;
}

/**
 * no description
 */
export class IntrospectionEndpointApi extends BaseAPI {

    /**
     * This API gathers information about an access token.  <br> <details> <summary>Description</summary>  This API is supposed to be called from within the implementations of protected resource endpoints of the authorization server implementation in order to get information about the access token which was presented by the client application.  In general, a client application accesses a protected resource endpoint of a service with an access token, and the implementation of the endpoint checks whether the presented access token has enough privileges (= scopes) to access the protected resource before returning the protected resource to the client application. To achieve this flow, the endpoint implementation has to know detailed information about the access token. Authlete `/auth/introspection` API can be used to get such information.  The response from `/auth/introspection` API has some parameters. Among them, it is `action` parameter that the authorization server implementation should check first because it denotes the next action that the authorization server implementation should take. According to the value of `action`, the authorization server implementation must take the steps described below.  **INTERNAL_SERVER_ERROR**  When the value of `action` is `INTERNAL_SERVER_ERROR`, it means that the request from the authorization server implementation was wrong or that an error occurred in Authlete. In either case, from the viewpoint of the client application, it is an error on the server side. Therefore, the service implementation should generate a response to the client application with HTTP status of \"500 Internal Server Error\". Authlete recommends `application/json` as the content type although OAuth 2.0 specification does not mention the format of the error response when the redirect URI is not usable.  The value of `responseContent` is a string which describes the error in the format of [RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750) (OAuth 2.0 Bearer Token Usage), so if the protected resource of the service implementation wants to return an error response to the client application in the way that complies with RFC 6750 (in other words, if `accessTokenType` configuration parameter of the service is Bearer), the value of `responseContent` can be used as the value of `WWW-Authenticate` header.  The following is an example response which complies with RFC 6750.  ``` HTTP/1.1 500 Internal Server Error Content-Type: application/json Cache-Control: no-store Pragma: no-cache  {responseContent} ```  **BAD_REQUEST**  When the value of `action` is `BAD_REQUEST`, it means that the request from the client application does not contain an access token (= the request from the authorization server implementation to Authlete does not contain `token` request parameter).  A response with HTTP status of \"400 Bad Request\" must be returned to the client application and the content type must be `application/json`.   The value of `responseContent` is a string which describes the error in the format of [RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750) (OAuth 2.0 Bearer Token Usage), so if the protected resource of the service implementation wants to return an error response to the client application in the way that complies with RFC 6750 (in other words, if `accessTokenType` configuration parameter of the service is `Bearer`), the value of `responseContent` can be used as the value of `WWW-Authenticate` header.  The following is an example response which complies with RFC 6750.  ``` HTTP/1.1 400 Bad Request WWW-Authenticate: {responseContent} Cache-Control: no-store Pragma: no-cache ```  **UNAUTHORIZED**  When the value of `action` is `UNAUTHORIZED`, it means that the access token does not exist or has expired.  The value of `responseContent` is a string which describes the error in the format of RFC 6750 (OAuth 2.0 Bearer Token Usage), so if the protected resource of the service implementation wants to return an error response to the client application in the way that complies with [RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750) (in other words, if `accessTokenType` configuration parameter of the service is `Bearer`), the value of `responseContent` can be used as the value of `WWW-Authenticate` header.  The following is an example response which complies with RFC 6750.  ``` HTTP/1.1 401 Unauthorized WWW-Authenticate: {responseContent} Cache-Control: no-store Pragma: no-cache ```  **FORBIDDEN**  When the value of `action` is `FORBIDDEN`, it means that the access token does not cover the required scopes or that the subject associated with the access token is different from the subject contained in the request.  A response with HTTP status of \"400 Bad Request\" must be returned to the client application and the content type must be `application/json`.  The value of `responseContent` is a string which describes the error in the format of [RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750) (OAuth 2.0 Bearer Token Usage), so if the protected resource of the service implementation wants to return an error response to the client application in the way that complies with RFC 6750 (in other words, if `accessTokenType` configuration parameter of the service is Bearer), the value of `responseContent` can be used as the value of `WWW-Authenticate` header.  The following is an example response which complies with RFC 6750.  ``` HTTP/1.1 403 Forbidden WWW-Authenticate: {responseContent} Cache-Control: no-store Pragma: no-cache ```  **OK**  When the value of `action` is `OK`, it means that the access token which the client application presented is valid (= exists and has not expired).  The implementation of the protected resource endpoint is supposed to return the protected resource to the client application.  When action is `OK`, the value of `responseContent` is `\"Bearer error=\\\"invalid_request\\\"\"`. This is the simplest string which can be used as the value of `WWW-Authenticate` header to indicate \"400 Bad Request\". The implementation of the protected resource endpoint may use this string to tell the client application that the request was bad (e.g. in case necessary request parameters for the protected resource endpoint are missing). However, in such a case, the implementation should generate a more informative error message to help developers of client applications.  The following is an example error response which complies with RFC 6750.  ``` HTTP/1.1 400 Bad Request WWW-Authenticate: {responseContent} Cache-Control: no-store Pragma: no-cache ```  Basically, The value of `responseContent` is a string which describes the error in the format of [RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750) (OAuth 2.0 Bearer Token Usage). So, if the service has selected `Bearer` as the value of `accessTokenType` configuration parameter, the value of `responseContent` can be used directly as the value of `WWW-Authenticate` header. However, if the service has selected another different token type, the service has to generate error messages for itself.  _**JWT-based access token**_  Since version 2.1, Authlete provides a feature to issue access tokens in JWT format. This feature can be enabled by setting a non-null value to the `accessTokenSignAlg` property of the service (see the description of the Service class for details). `/api/auth/introspection` API can accept access tokens in JWT format. However, note that the API does not return information contained in a given JWT-based access token but returns information stored in the database record which corresponds to the given JWT-based access token. Because attributes of the database record can be modified after the access token is issued (for example, by using `/api/auth/token/update` API), information returned by `/api/auth/introspection` API and information the given JWT-based access token holds may be different.  </details> 
     * /api/auth/introspection API
     */
    authIntrospectionApi({ introspectionRequest }: AuthIntrospectionApiRequest): Observable<IntrospectionResponse>
    authIntrospectionApi({ introspectionRequest }: AuthIntrospectionApiRequest, opts?: OperationOpts): Observable<AjaxResponse<IntrospectionResponse>>
    authIntrospectionApi({ introspectionRequest }: AuthIntrospectionApiRequest, opts?: OperationOpts): Observable<IntrospectionResponse | AjaxResponse<IntrospectionResponse>> {
        throwIfNullOrUndefined(introspectionRequest, 'introspectionRequest', 'authIntrospectionApi');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<IntrospectionResponse>({
            url: '/api/auth/introspection',
            method: 'POST',
            headers,
            body: introspectionRequest,
        }, opts?.responseOpts);
    };

    /**
     * This API exists to help your authorization server provide its own introspection API which complies with [RFC 7662](https://tools.ietf.org/html/rfc7662) (OAuth 2.0 Token Introspection).  <br> <details> <summary>Description</summary>  This API is supposed to be called from within the implementations of the introspection endpoint of your service. The authorization server implementation should retrieve the value of `action` from the response and take the following steps according to the value.  In general, a client application accesses a protected resource endpoint of a service with an access token, and the implementation of the endpoint checks whether the presented access token has enough privileges (= scopes) to access the protected resource before returning the protected resource to the client application. To achieve this flow, the endpoint implementation has to know detailed information about the access token. Authlete `/auth/introspection` API can be used to get such information.  The response from `/auth/introspection` API has some parameters. Among them, it is `action` parameter that the authorization server implementation should check first because it denotes the next action that the authorization server implementation should take. According to the value of `action`, the authorization server implementation must take the steps described below.  **INTERNAL_SERVER_ERROR**  When the value of `action` is `INTERNAL_SERVER_ERROR`, it means that the request from the authorization server implementation was wrong or that an error occurred in Authlete.  In either case, from the viewpoint of the client application, it is an error on the server side. Therefore, the service implementation should generate a response to the client application with HTTP status of \"500 Internal Server Error\".  The value of `responseContent` is a JSON string which describes the error, so it can be used as the entity body of the response if you want. Note that, however, [RFC 7662](https://datatracker.ietf.org/doc/html/rfc7662) does not mention anything about the response body of error responses.  The following illustrates an example response which the introspection endpoint of the authorization server implementation generates and returns to the client application.  ``` HTTP/1.1 500 Internal Server Error Content-Type: application/json  {responseContent} ```  **BAD_REQUEST**  When the value of `action` is `BAD_REQUEST`, it means that the request from the client application is invalid. This happens when the request from the client did not include the token request parameter. See \"[2.1. Introspection Request](https://datatracker.ietf.org/doc/html/rfc7662#section-2.1)\" in RFC 7662 for details about requirements for introspection requests.  The HTTP status of the response returned to the client application should be \"400 Bad Request\".  The value of `responseContent` is a JSON string which describes the error, so it can be used as the entity body of the response if you want. Note that, however, [RFC 7662](https://datatracker.ietf.org/doc/html/rfc7662) does not mention anything about the response body of error responses.  The following illustrates an example response which the introspection endpoint of the authorization server implementation generates and returns to the client application.  ``` HTTP/1.1 400 Bad Request Content-Type: application/json  {responseContent} ```  **OK**  When the value of `action` is `OK`, the request from the client application is valid.  The HTTP status of the response returned to the client application must be \"200 OK\" and its content type must be `application/json`.  The value of `responseContent` is a JSON string which complies with the introspection response defined in \"2.2. Introspection Response\" in RFC7662.  The following illustrates the response which the introspection endpoint of your authorization server implementation should generate and return to the client application.  ``` HTTP/1.1 200 OK Content-Type: application/json  {responseContent} ```  Note that RFC 7662 says _\"To prevent token scanning attacks, **the endpoint MUST also require some form of authorization to access this endpoint**\"_. This means that you have to protect your introspection endpoint in some way or other. Authlete does not care about how your introspection endpoint is protected. In most cases, as mentioned in RFC 7662, \"401 Unauthorized\" is a proper response when an introspection request does not satisfy authorization requirements imposed by your introspection endpoint.  </details> 
     * /api/auth/introspection/standard API
     */
    authIntrospectionStandardApi({ standardIntrospectionRequest }: AuthIntrospectionStandardApiRequest): Observable<StandardIntrospectionResponse>
    authIntrospectionStandardApi({ standardIntrospectionRequest }: AuthIntrospectionStandardApiRequest, opts?: OperationOpts): Observable<AjaxResponse<StandardIntrospectionResponse>>
    authIntrospectionStandardApi({ standardIntrospectionRequest }: AuthIntrospectionStandardApiRequest, opts?: OperationOpts): Observable<StandardIntrospectionResponse | AjaxResponse<StandardIntrospectionResponse>> {
        throwIfNullOrUndefined(standardIntrospectionRequest, 'standardIntrospectionRequest', 'authIntrospectionStandardApi');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<StandardIntrospectionResponse>({
            url: '/api/auth/introspection/standard',
            method: 'POST',
            headers,
            body: standardIntrospectionRequest,
        }, opts?.responseOpts);
    };

}
