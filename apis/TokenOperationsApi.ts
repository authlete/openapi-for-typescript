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
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from '../runtime';
import type { OperationOpts, HttpHeaders, HttpQuery } from '../runtime';
import type {
    Result,
    TokenCreateRequest,
    TokenCreateResponse,
    TokenGetListResponse,
    TokenRevokeRequest,
    TokenRevokeResponse,
    TokenUpdateRequest,
    TokenUpdateResponse,
} from '../models';

export interface AuthTokenCreateApiRequest {
    tokenCreateRequest: TokenCreateRequest;
}

export interface AuthTokenDeleteApiRequest {
    tokenIdentifier: string;
}

export interface AuthTokenGetListApiRequest {
    subject: string;
    clientIdentifier?: string;
    start?: number;
    end?: number;
}

export interface AuthTokenRevokeApiRequest {
    tokenRevokeRequest: TokenRevokeRequest;
}

export interface AuthTokenUpdateApiRequest {
    tokenUpdateRequest: TokenUpdateRequest;
}

/**
 * no description
 */
export class TokenOperationsApi extends BaseAPI {

    /**
     * Create an access token. 
     * /api/auth/token/create API
     */
    authTokenCreateApi({ tokenCreateRequest }: AuthTokenCreateApiRequest): Observable<TokenCreateResponse>
    authTokenCreateApi({ tokenCreateRequest }: AuthTokenCreateApiRequest, opts?: OperationOpts): Observable<AjaxResponse<TokenCreateResponse>>
    authTokenCreateApi({ tokenCreateRequest }: AuthTokenCreateApiRequest, opts?: OperationOpts): Observable<TokenCreateResponse | AjaxResponse<TokenCreateResponse>> {
        throwIfNullOrUndefined(tokenCreateRequest, 'tokenCreateRequest', 'authTokenCreateApi');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<TokenCreateResponse>({
            url: '/api/auth/token/create',
            method: 'POST',
            headers,
            body: tokenCreateRequest,
        }, opts?.responseOpts);
    };

    /**
     * Delete an access token. 
     * /api/auth/token/delete/{tokenIdentifier} API
     */
    authTokenDeleteApi({ tokenIdentifier }: AuthTokenDeleteApiRequest): Observable<void>
    authTokenDeleteApi({ tokenIdentifier }: AuthTokenDeleteApiRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    authTokenDeleteApi({ tokenIdentifier }: AuthTokenDeleteApiRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(tokenIdentifier, 'tokenIdentifier', 'authTokenDeleteApi');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<void>({
            url: '/api/auth/token/delete/{accessTokenIdentifier}'.replace('{tokenIdentifier}', encodeURI(tokenIdentifier)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Get a list of client applications that an end-user has authorized. 
     * /api/auth/token/get/list API
     */
    authTokenGetListApi({ subject, clientIdentifier, start, end }: AuthTokenGetListApiRequest): Observable<TokenGetListResponse>
    authTokenGetListApi({ subject, clientIdentifier, start, end }: AuthTokenGetListApiRequest, opts?: OperationOpts): Observable<AjaxResponse<TokenGetListResponse>>
    authTokenGetListApi({ subject, clientIdentifier, start, end }: AuthTokenGetListApiRequest, opts?: OperationOpts): Observable<TokenGetListResponse | AjaxResponse<TokenGetListResponse>> {
        throwIfNullOrUndefined(subject, 'subject', 'authTokenGetListApi');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'subject': subject,
        };

        if (clientIdentifier != null) { query['clientIdentifier'] = clientIdentifier; }
        if (start != null) { query['start'] = start; }
        if (end != null) { query['end'] = end; }

        return this.request<TokenGetListResponse>({
            url: '/api/auth/token/get/list',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * Revoke access tokens. 
     * /api/auth/token/revoke API
     */
    authTokenRevokeApi({ tokenRevokeRequest }: AuthTokenRevokeApiRequest): Observable<TokenRevokeResponse>
    authTokenRevokeApi({ tokenRevokeRequest }: AuthTokenRevokeApiRequest, opts?: OperationOpts): Observable<AjaxResponse<TokenRevokeResponse>>
    authTokenRevokeApi({ tokenRevokeRequest }: AuthTokenRevokeApiRequest, opts?: OperationOpts): Observable<TokenRevokeResponse | AjaxResponse<TokenRevokeResponse>> {
        throwIfNullOrUndefined(tokenRevokeRequest, 'tokenRevokeRequest', 'authTokenRevokeApi');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<TokenRevokeResponse>({
            url: '/api/auth/token/revoke',
            method: 'POST',
            headers,
            body: tokenRevokeRequest,
        }, opts?.responseOpts);
    };

    /**
     * Update an access token. 
     * /api/auth/token/update API
     */
    authTokenUpdateApi({ tokenUpdateRequest }: AuthTokenUpdateApiRequest): Observable<TokenUpdateResponse>
    authTokenUpdateApi({ tokenUpdateRequest }: AuthTokenUpdateApiRequest, opts?: OperationOpts): Observable<AjaxResponse<TokenUpdateResponse>>
    authTokenUpdateApi({ tokenUpdateRequest }: AuthTokenUpdateApiRequest, opts?: OperationOpts): Observable<TokenUpdateResponse | AjaxResponse<TokenUpdateResponse>> {
        throwIfNullOrUndefined(tokenUpdateRequest, 'tokenUpdateRequest', 'authTokenUpdateApi');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<TokenUpdateResponse>({
            url: '/api/auth/token/update',
            method: 'POST',
            headers,
            body: tokenUpdateRequest,
        }, opts?.responseOpts);
    };

}
