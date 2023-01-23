/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PierApi } from "@fern-api/pier";

/**
 * A person who owns owns 25% or more of the business as well as those who control the funds.
 */
export interface BeneficialOwners {
    id: PierApi.BeneficialOwnerId;
    /** The person's address. */
    address: PierApi.Address;
    /** The person's date of birth (YYYY-MM-DD) */
    dateOfBirth: string;
    /** The person's valid email address */
    email: string;
    /** The person's first name */
    firstName: string;
    /** The person's last name */
    lastName: string;
    /** The person's 10-digit US phone number (e.g. 4152251000) */
    phone: string;
    /** The percent ownership the person has in the business in basis points (e.g. 2500 for 25%) */
    percentOwnership: number;
    /** The person's 9-digit US social security number (e.g. 123456789) */
    ssn: string;
}
