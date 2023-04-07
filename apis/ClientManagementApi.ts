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
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from '../runtime';
import type { OperationOpts, HttpHeaders, HttpQuery } from '../runtime';
import type {
    Client,
    ClientAuthorizationDeleteResponse,
    ClientAuthorizationGetListResponse,
    ClientAuthorizationUpdateRequest,
    ClientAuthorizationUpdateResponse,
    ClientFlagUpdateRequest,
    ClientFlagUpdateResponse,
    ClientGetListResponse,
    ClientGrantedScopesDeleteResponse,
    ClientSecretRefreshResponse,
    ClientSecretUpdateRequest,
    ClientSecretUpdateResponse,
    Result,
} from '../models';

export interface ClientAuthorizationDeleteApiRequest {
    clientId: string;
    subject: string;
}

export interface ClientAuthorizationGetListApiRequest {
    subject: string;
    developer?: string;
    start?: number;
    end?: number;
}

export interface ClientAuthorizationUpdateApiRequest {
    clientId: string;
    clientAuthorizationUpdateRequest?: ClientAuthorizationUpdateRequest;
}

export interface ClientCreateApiRequest {
    client?: Client;
}

export interface ClientDeleteApiRequest {
    clientId: string;
}

export interface ClientFlagUpdateApiRequest {
    clientIdentifier: string;
    clientFlagUpdateRequest?: ClientFlagUpdateRequest;
}

export interface ClientGetApiRequest {
    clientId: string;
    clientAliasId: string;
    resourceClientId: string;
}

export interface ClientGetListApiRequest {
    developer?: string;
    start?: number;
    end?: number;
}

export interface ClientGrantedScopesDeleteApiRequest {
    clientId: string;
    subject: string;
}

export interface ClientGrantedScopesGetApiRequest {
    clientId: string;
    subject: string;
}

export interface ClientSecretRefreshApiRequest {
    clientIdentifier: string;
}

export interface ClientSecretUpdateApiRequest {
    clientIdentifier: string;
    clientSecretUpdateRequest: ClientSecretUpdateRequest;
}

export interface ClientUpdateApiRequest {
    clientId: string;
    client?: Client;
}

/**
 * no description
 */
export class ClientManagementApi extends BaseAPI {

    /**
     * Delete all existing access tokens issued to a client application by an end-user. 
     * /api/client/authorization/delete/{clientId}/{subject} API
     */
    clientAuthorizationDeleteApi({ clientId, subject }: ClientAuthorizationDeleteApiRequest): Observable<ClientAuthorizationDeleteResponse>
    clientAuthorizationDeleteApi({ clientId, subject }: ClientAuthorizationDeleteApiRequest, opts?: OperationOpts): Observable<AjaxResponse<ClientAuthorizationDeleteResponse>>
    clientAuthorizationDeleteApi({ clientId, subject }: ClientAuthorizationDeleteApiRequest, opts?: OperationOpts): Observable<ClientAuthorizationDeleteResponse | AjaxResponse<ClientAuthorizationDeleteResponse>> {
        throwIfNullOrUndefined(clientId, 'clientId', 'clientAuthorizationDeleteApi');
        throwIfNullOrUndefined(subject, 'subject', 'clientAuthorizationDeleteApi');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<ClientAuthorizationDeleteResponse>({
            url: '/api/client/authorization/delete/{clientId}/{subject}'.replace('{clientId}', encodeURI(clientId)).replace('{subject}', encodeURI(subject)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Get a list of client applications that an end-user has authorized. 
     * /api/client/authorization/get/list/{subject} API
     */
    clientAuthorizationGetListApi({ subject, developer, start, end }: ClientAuthorizationGetListApiRequest): Observable<ClientAuthorizationGetListResponse>
    clientAuthorizationGetListApi({ subject, developer, start, end }: ClientAuthorizationGetListApiRequest, opts?: OperationOpts): Observable<AjaxResponse<ClientAuthorizationGetListResponse>>
    clientAuthorizationGetListApi({ subject, developer, start, end }: ClientAuthorizationGetListApiRequest, opts?: OperationOpts): Observable<ClientAuthorizationGetListResponse | AjaxResponse<ClientAuthorizationGetListResponse>> {
        throwIfNullOrUndefined(subject, 'subject', 'clientAuthorizationGetListApi');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = {};

        if (developer != null) { query['developer'] = developer; }
        if (start != null) { query['start'] = start; }
        if (end != null) { query['end'] = end; }

        return this.request<ClientAuthorizationGetListResponse>({
            url: '/api/client/authorization/get/list/{subject}'.replace('{subject}', encodeURI(subject)),
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * Update attributes of all existing access tokens given to a client application. 
     * /api/client/authorization/update/{clientId} API
     */
    clientAuthorizationUpdateApi({ clientId, clientAuthorizationUpdateRequest }: ClientAuthorizationUpdateApiRequest): Observable<ClientAuthorizationUpdateResponse>
    clientAuthorizationUpdateApi({ clientId, clientAuthorizationUpdateRequest }: ClientAuthorizationUpdateApiRequest, opts?: OperationOpts): Observable<AjaxResponse<ClientAuthorizationUpdateResponse>>
    clientAuthorizationUpdateApi({ clientId, clientAuthorizationUpdateRequest }: ClientAuthorizationUpdateApiRequest, opts?: OperationOpts): Observable<ClientAuthorizationUpdateResponse | AjaxResponse<ClientAuthorizationUpdateResponse>> {
        throwIfNullOrUndefined(clientId, 'clientId', 'clientAuthorizationUpdateApi');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<ClientAuthorizationUpdateResponse>({
            url: '/api/client/authorization/update/{clientId}'.replace('{clientId}', encodeURI(clientId)),
            method: 'POST',
            headers,
            body: clientAuthorizationUpdateRequest,
        }, opts?.responseOpts);
    };

    /**
     * Create a new client. 
     * /api/client/create API
     */
    clientCreateApi({ client }: ClientCreateApiRequest): Observable<Client>
    clientCreateApi({ client }: ClientCreateApiRequest, opts?: OperationOpts): Observable<AjaxResponse<Client>>
    clientCreateApi({ client }: ClientCreateApiRequest, opts?: OperationOpts): Observable<Client | AjaxResponse<Client>> {

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Client>({
            url: '/api/client/create',
            method: 'POST',
            headers,
            body: client,
        }, opts?.responseOpts);
    };

    /**
     * Delete a client. 
     * /api/client/delete/{clientId} API
     */
    clientDeleteApi({ clientId }: ClientDeleteApiRequest): Observable<void>
    clientDeleteApi({ clientId }: ClientDeleteApiRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    clientDeleteApi({ clientId }: ClientDeleteApiRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(clientId, 'clientId', 'clientDeleteApi');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<void>({
            url: '/api/client/delete/{clientId}'.replace('{clientId}', encodeURI(clientId)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Lock and unlock a client 
     * /api/client/lock_flag/update/{clientIdentifier} API
     */
    clientFlagUpdateApi({ clientIdentifier, clientFlagUpdateRequest }: ClientFlagUpdateApiRequest): Observable<ClientFlagUpdateResponse>
    clientFlagUpdateApi({ clientIdentifier, clientFlagUpdateRequest }: ClientFlagUpdateApiRequest, opts?: OperationOpts): Observable<AjaxResponse<ClientFlagUpdateResponse>>
    clientFlagUpdateApi({ clientIdentifier, clientFlagUpdateRequest }: ClientFlagUpdateApiRequest, opts?: OperationOpts): Observable<ClientFlagUpdateResponse | AjaxResponse<ClientFlagUpdateResponse>> {
        throwIfNullOrUndefined(clientIdentifier, 'clientIdentifier', 'clientFlagUpdateApi');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<ClientFlagUpdateResponse>({
            url: '/api/client/lock_flag/update/{clientIdentifier}'.replace('{clientIdentifier}', encodeURI(clientIdentifier)),
            method: 'POST',
            headers,
            body: clientFlagUpdateRequest,
        }, opts?.responseOpts);
    };

    /**
     * Get a client. 
     * /api/client/get/{clientId} API
     */
    clientGetApi({ clientId, clientAliasId, resourceClientId }: ClientGetApiRequest): Observable<Client>
    clientGetApi({ clientId, clientAliasId, resourceClientId }: ClientGetApiRequest, opts?: OperationOpts): Observable<AjaxResponse<Client>>
    clientGetApi({ clientId, clientAliasId, resourceClientId }: ClientGetApiRequest, opts?: OperationOpts): Observable<Client | AjaxResponse<Client>> {
        throwIfNullOrUndefined(clientId, 'clientId', 'clientGetApi');
        throwIfNullOrUndefined(clientAliasId, 'clientAliasId', 'clientGetApi');
        throwIfNullOrUndefined(resourceClientId, 'resourceClientId', 'clientGetApi');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Client>({
            url: '/api/client/get/{clientId}'.replace('{clientId}', encodeURI(clientId)).replace('{clientAliasId}', encodeURI(clientAliasId)).replace('{resourceClientId}', encodeURI(resourceClientId)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Get a list of clients. 
     * /api/client/get/list API
     */
    clientGetListApi({ developer, start, end }: ClientGetListApiRequest): Observable<ClientGetListResponse>
    clientGetListApi({ developer, start, end }: ClientGetListApiRequest, opts?: OperationOpts): Observable<AjaxResponse<ClientGetListResponse>>
    clientGetListApi({ developer, start, end }: ClientGetListApiRequest, opts?: OperationOpts): Observable<ClientGetListResponse | AjaxResponse<ClientGetListResponse>> {

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = {};

        if (developer != null) { query['developer'] = developer; }
        if (start != null) { query['start'] = start; }
        if (end != null) { query['end'] = end; }

        return this.request<ClientGetListResponse>({
            url: '/api/client/get/list',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * Delete the set of scopes that an end-user has granted to a client application.  <br> <details> <summary>Description</summary>  Even if records about granted scopes are deleted by calling this API, existing access tokens are not deleted and scopes of existing access tokens are not changed. </details> 
     * /api/client/granted_scopes/delete/{clientId}/{subject} API
     */
    clientGrantedScopesDeleteApi({ clientId, subject }: ClientGrantedScopesDeleteApiRequest): Observable<ClientGrantedScopesDeleteResponse>
    clientGrantedScopesDeleteApi({ clientId, subject }: ClientGrantedScopesDeleteApiRequest, opts?: OperationOpts): Observable<AjaxResponse<ClientGrantedScopesDeleteResponse>>
    clientGrantedScopesDeleteApi({ clientId, subject }: ClientGrantedScopesDeleteApiRequest, opts?: OperationOpts): Observable<ClientGrantedScopesDeleteResponse | AjaxResponse<ClientGrantedScopesDeleteResponse>> {
        throwIfNullOrUndefined(clientId, 'clientId', 'clientGrantedScopesDeleteApi');
        throwIfNullOrUndefined(subject, 'subject', 'clientGrantedScopesDeleteApi');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<ClientGrantedScopesDeleteResponse>({
            url: '/api/client/granted_scopes/delete/{clientId}/{subject}'.replace('{clientId}', encodeURI(clientId)).replace('{subject}', encodeURI(subject)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Get the set of scopes that a user has granted to a client application.  <br> <details> <summary>Description</summary>  Possible values for `requestableScopes` parameter in the response from this API are as follows.  **null**  The user has not granted authorization to the client application in the past, or records about the combination of the user and the client application have been deleted from Authlete\'s DB.  **An empty set**  The user has granted authorization to the client application in the past, but no scopes are associated with the authorization.  **A set with at least one element**  The user has granted authorization to the client application in the past and some scopes are associated with the authorization. These scopes are returned. Example: `[ \"profile\", \"email\" ]` </details> 
     * /api/client/granted_scopes/get/{clientId}/{subject} API
     */
    clientGrantedScopesGetApi({ clientId, subject }: ClientGrantedScopesGetApiRequest): Observable<ClientAuthorizationDeleteResponse>
    clientGrantedScopesGetApi({ clientId, subject }: ClientGrantedScopesGetApiRequest, opts?: OperationOpts): Observable<AjaxResponse<ClientAuthorizationDeleteResponse>>
    clientGrantedScopesGetApi({ clientId, subject }: ClientGrantedScopesGetApiRequest, opts?: OperationOpts): Observable<ClientAuthorizationDeleteResponse | AjaxResponse<ClientAuthorizationDeleteResponse>> {
        throwIfNullOrUndefined(clientId, 'clientId', 'clientGrantedScopesGetApi');
        throwIfNullOrUndefined(subject, 'subject', 'clientGrantedScopesGetApi');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<ClientAuthorizationDeleteResponse>({
            url: '/api/client/granted_scopes/get/{clientId}/{subject}'.replace('{clientId}', encodeURI(clientId)).replace('{subject}', encodeURI(subject)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Refresh the client secret of a client. A new value of the client secret will be generated by the Authlete server.  If you want to specify a new value, use `/api/client/secret/update` API. 
     * /api/client/secret/refresh API
     */
    clientSecretRefreshApi({ clientIdentifier }: ClientSecretRefreshApiRequest): Observable<ClientSecretRefreshResponse>
    clientSecretRefreshApi({ clientIdentifier }: ClientSecretRefreshApiRequest, opts?: OperationOpts): Observable<AjaxResponse<ClientSecretRefreshResponse>>
    clientSecretRefreshApi({ clientIdentifier }: ClientSecretRefreshApiRequest, opts?: OperationOpts): Observable<ClientSecretRefreshResponse | AjaxResponse<ClientSecretRefreshResponse>> {
        throwIfNullOrUndefined(clientIdentifier, 'clientIdentifier', 'clientSecretRefreshApi');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<ClientSecretRefreshResponse>({
            url: '/api/client/secret/refresh/{clientIdentifier}'.replace('{clientIdentifier}', encodeURI(clientIdentifier)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Update the client secret of a client.  If you want to have the Authlete server generate a new value of the client secret, use `/api/client/secret/refresh` API. 
     * /api/client/secret/update API
     */
    clientSecretUpdateApi({ clientIdentifier, clientSecretUpdateRequest }: ClientSecretUpdateApiRequest): Observable<ClientSecretUpdateResponse>
    clientSecretUpdateApi({ clientIdentifier, clientSecretUpdateRequest }: ClientSecretUpdateApiRequest, opts?: OperationOpts): Observable<AjaxResponse<ClientSecretUpdateResponse>>
    clientSecretUpdateApi({ clientIdentifier, clientSecretUpdateRequest }: ClientSecretUpdateApiRequest, opts?: OperationOpts): Observable<ClientSecretUpdateResponse | AjaxResponse<ClientSecretUpdateResponse>> {
        throwIfNullOrUndefined(clientIdentifier, 'clientIdentifier', 'clientSecretUpdateApi');
        throwIfNullOrUndefined(clientSecretUpdateRequest, 'clientSecretUpdateRequest', 'clientSecretUpdateApi');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<ClientSecretUpdateResponse>({
            url: '/api/client/secret/update/{clientIdentifier}'.replace('{clientIdentifier}', encodeURI(clientIdentifier)),
            method: 'POST',
            headers,
            body: clientSecretUpdateRequest,
        }, opts?.responseOpts);
    };

    /**
     * Update a client. 
     * /api/client/update/{clientId} API
     */
    clientUpdateApi({ clientId, client }: ClientUpdateApiRequest): Observable<Client>
    clientUpdateApi({ clientId, client }: ClientUpdateApiRequest, opts?: OperationOpts): Observable<AjaxResponse<Client>>
    clientUpdateApi({ clientId, client }: ClientUpdateApiRequest, opts?: OperationOpts): Observable<Client | AjaxResponse<Client>> {
        throwIfNullOrUndefined(clientId, 'clientId', 'clientUpdateApi');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Client>({
            url: '/api/client/update/{clientId}'.replace('{clientId}', encodeURI(clientId)),
            method: 'POST',
            headers,
            body: client,
        }, opts?.responseOpts);
    };

}
