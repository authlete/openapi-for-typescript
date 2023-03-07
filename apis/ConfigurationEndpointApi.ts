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
import { BaseAPI } from '../runtime';
import type { OperationOpts, HttpHeaders, HttpQuery } from '../runtime';
import type {
    Result,
} from '../models';

export interface ServiceConfigurationApiRequest {
    pretty?: boolean;
}

/**
 * no description
 */
export class ConfigurationEndpointApi extends BaseAPI {

    /**
     * This API gathers configuration information about a service.  <br> <details> <summary>Description</summary>  This API is supposed to be called from within the implementation of the configuration endpoint of the service where the service that supports OpenID Connect and [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html) must expose its configuration information in a JSON format. Details about the format are described in \"[3. OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata)\" in OpenID Connect Discovery 1.0.  </details> 
     * /api/service/configuration API
     */
    serviceConfigurationApi({ pretty }: ServiceConfigurationApiRequest): Observable<object>
    serviceConfigurationApi({ pretty }: ServiceConfigurationApiRequest, opts?: OperationOpts): Observable<AjaxResponse<object>>
    serviceConfigurationApi({ pretty }: ServiceConfigurationApiRequest, opts?: OperationOpts): Observable<object | AjaxResponse<object>> {

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = {};

        if (pretty != null) { query['pretty'] = pretty; }

        return this.request<object>({
            url: '/api/service/configuration',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

}