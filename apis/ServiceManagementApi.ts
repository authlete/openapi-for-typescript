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
    Result,
    Service,
    ServiceGetListResponse,
} from '../models';

export interface ServiceCreateApiRequest {
    service?: Service;
}

export interface ServiceDeleteApiRequest {
    serviceApiKey: string;
}

export interface ServiceGetApiRequest {
    serviceApiKey: string;
}

export interface ServiceGetListApiRequest {
    start?: number;
    end?: number;
}

export interface ServiceUpdateApiRequest {
    serviceApiKey: string;
    service?: Service;
}

/**
 * no description
 */
export class ServiceManagementApi extends BaseAPI {

    /**
     * Create a new service. 
     * /api/service/create API
     */
    serviceCreateApi({ service }: ServiceCreateApiRequest): Observable<Service>
    serviceCreateApi({ service }: ServiceCreateApiRequest, opts?: OperationOpts): Observable<AjaxResponse<Service>>
    serviceCreateApi({ service }: ServiceCreateApiRequest, opts?: OperationOpts): Observable<Service | AjaxResponse<Service>> {

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Service>({
            url: '/api/service/create',
            method: 'POST',
            headers,
            body: service,
        }, opts?.responseOpts);
    };

    /**
     * Delete a service. 
     * /api/service/delete/{serviceApiKey} API
     */
    serviceDeleteApi({ serviceApiKey }: ServiceDeleteApiRequest): Observable<void>
    serviceDeleteApi({ serviceApiKey }: ServiceDeleteApiRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    serviceDeleteApi({ serviceApiKey }: ServiceDeleteApiRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(serviceApiKey, 'serviceApiKey', 'serviceDeleteApi');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<void>({
            url: '/api/service/delete/{serviceApiKey}'.replace('{serviceApiKey}', encodeURI(serviceApiKey)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Get a service. 
     * /api/service/get/{serviceApiKey} API
     */
    serviceGetApi({ serviceApiKey }: ServiceGetApiRequest): Observable<Service>
    serviceGetApi({ serviceApiKey }: ServiceGetApiRequest, opts?: OperationOpts): Observable<AjaxResponse<Service>>
    serviceGetApi({ serviceApiKey }: ServiceGetApiRequest, opts?: OperationOpts): Observable<Service | AjaxResponse<Service>> {
        throwIfNullOrUndefined(serviceApiKey, 'serviceApiKey', 'serviceGetApi');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Service>({
            url: '/api/service/get/{serviceApiKey}'.replace('{serviceApiKey}', encodeURI(serviceApiKey)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Get a list of services. 
     * /api/service/get/list API
     */
    serviceGetListApi({ start, end }: ServiceGetListApiRequest): Observable<ServiceGetListResponse>
    serviceGetListApi({ start, end }: ServiceGetListApiRequest, opts?: OperationOpts): Observable<AjaxResponse<ServiceGetListResponse>>
    serviceGetListApi({ start, end }: ServiceGetListApiRequest, opts?: OperationOpts): Observable<ServiceGetListResponse | AjaxResponse<ServiceGetListResponse>> {

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = {};

        if (start != null) { query['start'] = start; }
        if (end != null) { query['end'] = end; }

        return this.request<ServiceGetListResponse>({
            url: '/api/service/get/list',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * Update a service. 
     * /api/service/update/{serviceApiKey} API
     */
    serviceUpdateApi({ serviceApiKey, service }: ServiceUpdateApiRequest): Observable<Service>
    serviceUpdateApi({ serviceApiKey, service }: ServiceUpdateApiRequest, opts?: OperationOpts): Observable<AjaxResponse<Service>>
    serviceUpdateApi({ serviceApiKey, service }: ServiceUpdateApiRequest, opts?: OperationOpts): Observable<Service | AjaxResponse<Service>> {
        throwIfNullOrUndefined(serviceApiKey, 'serviceApiKey', 'serviceUpdateApi');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Service>({
            url: '/api/service/update/{serviceApiKey}'.replace('{serviceApiKey}', encodeURI(serviceApiKey)),
            method: 'POST',
            headers,
            body: service,
        }, opts?.responseOpts);
    };

}
