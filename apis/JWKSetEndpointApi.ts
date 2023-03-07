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
    ServiceJwksGetResponse,
} from '../models';

export interface ServiceJwksGetApiRequest {
    includePrivateKeys?: boolean;
    pretty?: boolean;
}

/**
 * no description
 */
export class JWKSetEndpointApi extends BaseAPI {

    /**
     * This API gathers JWK Set information for a service so that its client applications can verify signatures by the service and encrypt their requests to the service.  <br> <details> <summary>Description</summary>  This API is supposed to be called from within the implementation of the jwk set endpoint of the service where the service that supports OpenID Connect must expose its JWK Set information so that client applications can verify signatures by the service and encrypt their requests to the service. The URI of the endpoint can be found as the value of `jwks_uri` in [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata) if the service supports [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html).  </details> 
     * /api/service/jwks/get API
     */
    serviceJwksGetApi({ includePrivateKeys, pretty }: ServiceJwksGetApiRequest): Observable<ServiceJwksGetResponse>
    serviceJwksGetApi({ includePrivateKeys, pretty }: ServiceJwksGetApiRequest, opts?: OperationOpts): Observable<AjaxResponse<ServiceJwksGetResponse>>
    serviceJwksGetApi({ includePrivateKeys, pretty }: ServiceJwksGetApiRequest, opts?: OperationOpts): Observable<ServiceJwksGetResponse | AjaxResponse<ServiceJwksGetResponse>> {

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = {};

        if (includePrivateKeys != null) { query['includePrivateKeys'] = includePrivateKeys; }
        if (pretty != null) { query['pretty'] = pretty; }

        return this.request<ServiceJwksGetResponse>({
            url: '/api/service/jwks/get',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

}
