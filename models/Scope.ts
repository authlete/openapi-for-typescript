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
    Pair,
    TaggedValue,
} from './';

/**
 * @export
 * @interface Scope
 */
export interface Scope {
    /**
     * The name of the scope.
     * @type {string}
     * @memberof Scope
     */
    name?: string;
    /**
     * `true` to mark the scope as default. Scopes marked as default are regarded as requested when an authorization request from a client application does not contain scope request parameter. 
     * @type {boolean}
     * @memberof Scope
     */
    defaultEntry?: boolean;
    /**
     * The description about the scope.
     * @type {string}
     * @memberof Scope
     */
    description?: string;
    /**
     * The descriptions about this scope in multiple languages.
     * @type {Array<TaggedValue>}
     * @memberof Scope
     */
    descriptions?: Array<TaggedValue>;
    /**
     * The attributes of the scope.
     * @type {Array<Pair>}
     * @memberof Scope
     */
    attributes?: Array<Pair>;
}
