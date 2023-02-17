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

import type {
    AccessToken,
    Client,
} from './';

/**
 * @export
 * @interface TokenGetListResponse
 */
export interface TokenGetListResponse {
    /**
     * Start index of search results (inclusive). 
     * @type {number}
     * @memberof TokenGetListResponse
     */
    start?: number;
    /**
     * End index of search results (exclusive). 
     * @type {number}
     * @memberof TokenGetListResponse
     */
    end?: number;
    /**
     * Unique ID of a client developer. 
     * @type {number}
     * @memberof TokenGetListResponse
     */
    totalCount?: number;
    /**
     * @type {Client}
     * @memberof TokenGetListResponse
     */
    client?: Client;
    /**
     * Unique user ID of an end-user. 
     * @type {string}
     * @memberof TokenGetListResponse
     */
    subject?: string;
    /**
     * An array of access tokens. 
     * @type {Array<AccessToken>}
     * @memberof TokenGetListResponse
     */
    accessTokens?: Array<AccessToken>;
}
