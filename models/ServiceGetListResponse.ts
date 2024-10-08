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
    Service,
} from './';

/**
 * @export
 * @interface ServiceGetListResponse
 */
export interface ServiceGetListResponse {
    /**
     * Start index (inclusive) of the result set. The default value is 0. Must not be a negative number. 
     * @type {number}
     * @memberof ServiceGetListResponse
     */
    start?: number;
    /**
     * Start index (inclusive) of the result set. The default value is 0. Must not be a negative number. 
     * @type {number}
     * @memberof ServiceGetListResponse
     */
    end?: number;
    /**
     * Total number of services owned by the service owner. This doesn\'t mean the number of services contained in the response. 
     * @type {number}
     * @memberof ServiceGetListResponse
     */
    totalCount?: number;
    /**
     * An array of services. 
     * @type {Array<Service>}
     * @memberof ServiceGetListResponse
     */
    services?: Array<Service>;
}
