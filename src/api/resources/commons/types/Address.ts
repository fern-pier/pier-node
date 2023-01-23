/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Address {
    line1: string;
    line2?: string;
    city: string;
    /** 2-digit US state code (e.g. CA, IL, FL) */
    state: string;
    /** 5-digit US zip code */
    zip: string;
}
