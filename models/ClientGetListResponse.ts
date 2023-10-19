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

/**
 * @export
 * @interface ClientGetListResponse
 */
export interface ClientGetListResponse {
    /**
     * The developer of the client applications. If the request did not contain `developer` request parameter, this property is set to `null`. 
     * @type {string}
     * @memberof ClientGetListResponse
     */
    developer?: string;
    /**
     * Start index (inclusive) of the result set of the query. 
     * @type {number}
     * @memberof ClientGetListResponse
     */
    start?: number;
    /**
     * End index (exclusive) of the result set of the query. 
     * @type {number}
     * @memberof ClientGetListResponse
     */
    end?: number;
    /**
     * Total number of clients that belong to the service. This doesn\'t mean the number of clients contained in the response. 
     * @type {number}
     * @memberof ClientGetListResponse
     */
    totalCount?: number;
    /**
     * An array of clients. 
     * @type {Array<object>}
     * @memberof ClientGetListResponse
     */
    clients?: Array<object>;
}
