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

import type {
    AuthorizationDetailsElement,
} from './';

/**
 * The authorization details. This represents the value of the `authorization_details` request parameter in the preceding device authorization request which is defined in \"OAuth 2.0 Rich Authorization Requests\". 
 * @export
 * @interface AuthorizationDetails
 */
export interface AuthorizationDetails {
    /**
     * Elements of this authorization details. 
     * @type {Array<AuthorizationDetailsElement>}
     * @memberof AuthorizationDetails
     */
    elements?: Array<AuthorizationDetailsElement>;
}
