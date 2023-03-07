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
    Result,
    RevocationRequest,
    RevocationResponse,
} from '../models';

export interface AuthRevocationApiRequest {
    revocationRequest: RevocationRequest;
}

/**
 * no description
 */
export class RevocationEndpointApi extends BaseAPI {

    /**
     * This API revokes access tokens and refresh tokens.  <br> <details> <summary>Description</summary>  This API is supposed to be called from within the implementation of the revocation endpoint ([RFC 7009](tools.ietf.org/html/rfc7009)) of the authorization server implementation in order to revoke access tokens and refresh tokens.  The response from `/auth/revocation` API has some parameters. Among them, it is `action` parameter that the authorization server implementation should check first because it denotes the next action that the authorization server implementation should take. According to the value of `action`, the authorization server implementation must take the steps described below.  **INTERNAL_SERVER_ERROR**  When the value of `action` is `INTERNAL_SERVER_ERROR`, it means that the request from the authorization server implementation was wrong or that an error occurred in Authlete. In either case, from the viewpoint of the client application, it is an error on the server side. Therefore, the service implementation should generate a response to the client application with HTTP status of \"500 Internal Server Error\".  The value of `responseContent` is a JSON string which describes the error, so it can be used as the entity body of the response.  The following illustrates the response which the service implementation should generate and return to the client application.  ``` HTTP/1.1 500 Internal Server Error Content-Type: application/json Cache-Control: no-store Pragma: no-cache  {responseContent} ```  **INVALID_CLIENT**  When the value of `action` is `INVALID_CLIENT`, it means that authentication of the client failed. In this case, the HTTP status of the response to the client application is either \"400 Bad Request\" or \"401 Unauthorized\". The description about `invalid_client` shown below is an excerpt from [RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749).  `invalid_client`  > Client authentication failed (e.g., unknown client, no client authentication included, or unsupported authentication method). The authorization server MAY return an HTTP 401 (Unauthorized) status code to indicate which HTTP authentication schemes are supported. If the client attempted to authenticate via the `Authorization` request header field, the authorization server MUST respond with an HTTP 401 (Unauthorized) status code and include the `WWW-Authenticate` response header field matching the authentication scheme used by the client.  In either case, the value of `responseContent` is a JSON string which can be used as the entity body of the response to the client application.  The following illustrates the response which the service implementation should generate and return to the client application.  ``` HTTP/1.1 400 Bad Request Content-Type: application/json Cache-Control: no-store Pragma: no-cache  {responseContent} ```  <br>  ``` HTTP/1.1 401 Unauthorized WWW-Authenticate: {challenge} Content-Type: application/json Cache-Control: no-store Pragma: no-cache  {responseContent} ```  **BAD_REQUEST**  When the value of `action` is `BAD_REQUEST`, it means that the request from the client application is invalid.  The HTTP status of the response returned to the client application must be \"400 Bad Request\" and the content type must be `application/json`. [RFC 7009](https://datatracker.ietf.org/doc/html/rfc7009), [2.2.1. Error Respons](https://datatracker.ietf.org/doc/html/rfc7009#section-2.2.1) states \"The error presentation conforms to the definition in [Section 5.2](https://datatracker.ietf.org/doc/html/rfc6749#section-5.2) of [[RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749)].\"  The value of `responseContent` is a JSON string which describes the error, so it can be used as the entity body of the response.  The following illustrates the response which the authorization server implementation should generate and return to the client application.  ``` HTTP/1.1 400 Bad Request Content-Type: application/json Cache-Control: no-store Pragma: no-cache  {responseContent} ```  **OK**  When the value of `action` is `OK`, it means that the request from the client application is valid and the presented token has been revoked successfully or if the client submitted an invalid token. Note that invalid tokens do not cause an error. See [2.2. Revocation Response](https://datatracker.ietf.org/doc/html/rfc7009#section-2.2) for details.  The HTTP status of the response returned to the client application must be 200 OK.  If the original request from the client application contains callback request parameter and its value is not empty, the content type should be `application/javascript` and the content should be a JavaScript snippet for JSONP.  The value of `responseContent` is JavaScript snippet if the original request from the client application contains callback request parameter and its value is not empty. Otherwise, the value of `responseContent` is `null`.  ``` HTTP/1.1 200 OK Content-Type: application/javascript Cache-Control: no-store Pragma: no-cache  {responseContent} ``` </details> 
     * /api/auth/revocation API
     */
    authRevocationApi({ revocationRequest }: AuthRevocationApiRequest): Observable<RevocationResponse>
    authRevocationApi({ revocationRequest }: AuthRevocationApiRequest, opts?: OperationOpts): Observable<AjaxResponse<RevocationResponse>>
    authRevocationApi({ revocationRequest }: AuthRevocationApiRequest, opts?: OperationOpts): Observable<RevocationResponse | AjaxResponse<RevocationResponse>> {
        throwIfNullOrUndefined(revocationRequest, 'revocationRequest', 'authRevocationApi');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<RevocationResponse>({
            url: '/api/auth/revocation',
            method: 'POST',
            headers,
            body: revocationRequest,
        }, opts?.responseOpts);
    };

}
