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

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined } from '../runtime';
import type { OperationOpts, HttpHeaders } from '../runtime';
import type {
    Result,
    TokenFailRequest,
    TokenFailResponse,
    TokenIssueRequest,
    TokenIssueResponse,
    TokenRequest,
    TokenResponse,
} from '../models';

export interface AuthTokenApiRequest {
    tokenRequest: TokenRequest;
}

export interface AuthTokenFailApiRequest {
    tokenFailRequest: TokenFailRequest;
}

export interface AuthTokenIssueApiRequest {
    tokenIssueRequest: TokenIssueRequest;
}

/**
 * no description
 */
export class TokenEndpointApi extends BaseAPI {

    /**
     * This API parses request parameters of an authorization request and returns necessary data for the authorization server implementation to process the authorization request further.  <br> <details> <summary>Description</summary>  This API is supposed to be called from with the implementation of the token endpoint of the service. The endpoint implementation must extract the request parameters from the token request from the client application and pass them as the value of parameters request parameter to Authlete\'s `/auth/token` API. The value of parameters is the entire entity body (which is formatted in `application/x-www-form-urlencoded`) of the token request.  In addition, if the token endpoint of the authorization server implementation supports basic authentication as a means of [client authentication](https://datatracker.ietf.org/doc/html/rfc6749#section-2.3), the client credentials must be extracted from `Authorization` header and they must be passed as `clientId` request parameter and `clientSecret` request parameter to Authlete\'s `/auth/token` API.  The following code snippet is an example in JAX-RS showing how to extract request parameters from the token request and client credentials from Authorization header.  ```java @POST @Consumes(MediaType.APPLICATION_FORM_URLENCODED) public Response post(         @HeaderParam(HttpHeaders.AUTHORIZATION) String auth,         String parameters) {     // Convert the value of Authorization header (credentials of     // the client application), if any, into BasicCredentials.     BasicCredentials credentials = BasicCredentials.parse(auth);      // The credentials of the client application extracted from     // \'Authorization\' header. These may be null.     String clientId     = credentials == null ? null                         : credentials.getUserId();     String clientSecret = credentials == null ? null                         : credentials.getPassword();      // Process the given parameters.     return process(parameters, clientId, clientSecret); } ```  The response from `/auth/token` API has some parameters. Among them, it is action parameter that the service implementation should check first because it denotes the next action that the authorization server implementation should take. According to the value of action, the authorization server implementation must take the steps described below.  **INTERNAL_SERVER_ERROR**  When the value of `action` is `INTERNAL_SERVER_ERROR`, it means that the request from the authorization server implementation was wrong or that an error occurred in Authlete. In either case, from the viewpoint of the client application, it is an error on the server side. Therefore, the service implementation should generate a response to the client application with HTTP status of \"500 Internal Server Error\". Authlete recommends `application/json` as the content type although OAuth 2.0 specification does not mention the format of the error response when the redirect URI is not usable.  The value of `responseContent` is a JSON string which describes the error, so it can be used as the entity body of the response.  The following illustrates the response which the service implementation should generate and return to the client application.  ``` HTTP/1.1 500 Internal Server Error Content-Type: application/json Cache-Control: no-store Pragma: no-cache  {responseContent} ```  The endpoint implementation may return another different response to the client application since \"500 Internal Server Error\" is not required by OAuth 2.0.   **INVALID_CLIENT**  When the value of `action` is `INVALID_CLIENT`, it means that authentication of the client failed. In this case, the HTTP status of the response to the client application is either \"400 Bad Request\" or \"401 Unauthorized\". This requirement comes from [RFC 6749, 5.2. Error Response](https://datatracker.ietf.org/doc/html/rfc6749#section-5.2). The description about `invalid_client` shown below is an excerpt from RFC 6749.  Client authentication failed (e.g., unknown client, no client authentication included, or unsupported authentication method). The authorization server MAY return an HTTP 401 (Unauthorized) status code to indicate which HTTP authentication schemes are supported. If the client attempted to authenticate via the `Authorization` request header field, the authorization server MUST respond with an HTTP 401 (Unauthorized) status code and include the `WWW-Authenticate` response header field matching the authentication scheme used by the client.  In either case, the value of `responseContent` is a JSON string which can be used as the entity body of the response to the client application.  The following illustrate responses which the service implementation must generate and return to the client application.  ``` HTTP/1.1 400 Bad Request Content-Type: application/json Cache-Control: no-store Pragma: no-cache  {responseContent} ```  <br>  ``` HTTP/1.1 401 Unauthorized WWW-Authenticate: {challenge} Content-Type: application/json Cache-Control: no-store Pragma: no-cache  {responseContent} ```  **BAD_REQUEST**  When the value of `action` is `BAD_REQUEST`, it means that the request from the client application is invalid.  A response with HTTP status of \"400 Bad Request\" must be returned to the client application and the content type must be `application/json`.  The value of `responseContent` is a JSON string which describes the error, so it can be used as the entity body of the response.  The following illustrates the response which the service implementation should generate and return to the client application.  ``` HTTP/1.1 400 Bad Request Content-Type: application/json Cache-Control: no-store Pragma: no-cache  {responseContent} ```  **OK**  When the value of `action` is `OK`, it means that the request from the client application is valid and an access token, and optionally an ID token, is ready to be issued.  The HTTP status of the response returned to the client application must be \"200 OK\" and the content type must be `application/json`.  The value of `responseContent` is a JSON string which contains an access token (and optionally an ID token), so it can be used as the entity body of the response.  The following illustrates the response which the service implementation must generate and return to the client application.  ``` HTTP/1.1 200 OK Content-Type: application/json Cache-Control: no-store Pragma: no-cache  {responseContent} ``` </details> 
     * /api/auth/token API
     */
    authTokenApi({ tokenRequest }: AuthTokenApiRequest): Observable<TokenResponse>
    authTokenApi({ tokenRequest }: AuthTokenApiRequest, opts?: OperationOpts): Observable<AjaxResponse<TokenResponse>>
    authTokenApi({ tokenRequest }: AuthTokenApiRequest, opts?: OperationOpts): Observable<TokenResponse | AjaxResponse<TokenResponse>> {
        throwIfNullOrUndefined(tokenRequest, 'tokenRequest', 'authTokenApi');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<TokenResponse>({
            url: '/api/auth/token',
            method: 'POST',
            headers,
            body: tokenRequest,
        }, opts?.responseOpts);
    };

    /**
     * This API generates a content of an error token response that the authorization server implementation returns to the client application.  <br> <details> <summary>Description</summary>  This API is supposed to be called from within the implementation of the token endpoint of the service in order to generate an error response to the client application.  The description of the `/auth/token` API describes the timing when this API should be called. See the description for the case of `action=PASSWORD`.  The response from `/auth/token/fail` API has some parameters. Among them, it is `action` parameter that the authorization server implementation should check first because it denotes the next action that the authorization server implementation should take. According to the value of `action`, the authorization server implementation must take the steps described below.  **INTERNAL_SERVER_ERROR**  When the value of `action` is `INTERNAL_SERVER_ERROR`, it means that the request from the authorization server implementation was wrong or that an error occurred in Authlete.  In either case, from the viewpoint of the client application, it is an error on the server side. Therefore, the service implementation should generate a response to the client application with HTTP status of \"500 Internal Server Error\".  The value of `responseContent` is a JSON string which describes the error, so it can be used as the entity body of the response.  The following illustrates the response which the service implementation should generate and return to the client application.  ``` HTTP/1.1 500 Internal Server Error Content-Type: application/json Cache-Control: no-store Pragma: no-cache  {responseContent} ```  The endpoint implementation may return another different response to the client application since \"500 Internal Server Error\" is not required by OAuth 2.0.  **BAD_REQUEST**  When the value of `action` is `BAD_REQUEST`, it means that Authlete\'s `/auth/token/fail` API successfully generated an error response for the client application.  The HTTP status of the response returned to the client application must be \"400 Bad Request\" and the content type must be `application/json`.  The value of `responseContent` is a JSON string which describes the error, so it can be used as the entity body of the response.  The following illustrates the response which the service implementation should generate and return to the client application.  ``` HTTP/1.1 400 Bad Request Content-Type: application/json Cache-Control: no-store Pragma: no-cache  {responseContent} ```  </details> 
     * /api/auth/token/fail API
     */
    authTokenFailApi({ tokenFailRequest }: AuthTokenFailApiRequest): Observable<TokenFailResponse>
    authTokenFailApi({ tokenFailRequest }: AuthTokenFailApiRequest, opts?: OperationOpts): Observable<AjaxResponse<TokenFailResponse>>
    authTokenFailApi({ tokenFailRequest }: AuthTokenFailApiRequest, opts?: OperationOpts): Observable<TokenFailResponse | AjaxResponse<TokenFailResponse>> {
        throwIfNullOrUndefined(tokenFailRequest, 'tokenFailRequest', 'authTokenFailApi');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<TokenFailResponse>({
            url: '/api/auth/token/fail',
            method: 'POST',
            headers,
            body: tokenFailRequest,
        }, opts?.responseOpts);
    };

    /**
     * This API generates a content of a successful token response that the authorization server implementation returns to the client application.  <br> <details> <summary>Description</summary>  This API is supposed to be called from within the implementation of the token endpoint of the service in order to generate a successful response to the client application.  The description of the `/auth/token` API describes the timing when this API should be called. See the description for the case of `action=PASSWORD`.  The response from `/auth/token/issue` API has some parameters. Among them, it is `action` parameter that the authorization server implementation should check first because it denotes the next action that the authorization server implementation should take. According to the value of `action`, the authorization server implementation must take the steps described below.  **INTERNAL_SERVER_ERROR**  When the value of `action` is `INTERNAL_SERVER_ERROR`, it means that the request from the authorization server implementation was wrong or that an error occurred in Authlete.  In either case, from the viewpoint of the client application, it is an error on the server side. Therefore, the service implementation should generate a response to the client application with HTTP status of \"500 Internal Server Error\".  The value of `responseContent` is a JSON string which describes the error, so it can be used as the entity body of the response.  The following illustrates the response which the service implementation should generate and return to the client application.  ``` HTTP/1.1 500 Internal Server Error Content-Type: application/json Cache-Control: no-store Pragma: no-cache  {responseContent} ```  The endpoint implementation may return another different response to the client application since \"500 Internal Server Error\" is not required by OAuth 2.0.  **OK**  When the value of `action` is `OK`, it means that Authlete\'s `/auth/token/issue` API successfully generated an access token.  The HTTP status of the response returned to the client application must be \"200 OK\" and the content type must be`application/json`.  The value of `responseContent` is a JSON string which contains an access token, so it can be used as the entity body of the response.  The following illustrates the response which the service implementation must generate and return to the client application.  ``` HTTP/1.1 200 OK Content-Type: application/json Cache-Control: no-store Pragma: no-cache  {responseContent} ```  </details> 
     * /api/auth/token/issue API
     */
    authTokenIssueApi({ tokenIssueRequest }: AuthTokenIssueApiRequest): Observable<TokenIssueResponse>
    authTokenIssueApi({ tokenIssueRequest }: AuthTokenIssueApiRequest, opts?: OperationOpts): Observable<AjaxResponse<TokenIssueResponse>>
    authTokenIssueApi({ tokenIssueRequest }: AuthTokenIssueApiRequest, opts?: OperationOpts): Observable<TokenIssueResponse | AjaxResponse<TokenIssueResponse>> {
        throwIfNullOrUndefined(tokenIssueRequest, 'tokenIssueRequest', 'authTokenIssueApi');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<TokenIssueResponse>({
            url: '/api/auth/token/issue',
            method: 'POST',
            headers,
            body: tokenIssueRequest,
        }, opts?.responseOpts);
    };

}
