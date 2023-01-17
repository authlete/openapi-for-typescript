// tslint:disable
/**
 * Authlete API
 * Authlete API Document. 
 *
 * The version of the OpenAPI document: 2.2.25
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface Property
 */
export interface Property {
    /**
     * The key part.
     * @type {string}
     * @memberof Property
     */
    key?: string;
    /**
     * The value part.
     * @type {string}
     * @memberof Property
     */
    value?: string;
    /**
     * The flag to indicate whether this property hidden from or visible to client applications. If `true`, this property is hidden from client applications. Otherwise, this property is visible to client applications.
     * @type {boolean}
     * @memberof Property
     */
    hidden?: boolean;
}
