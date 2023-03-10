/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PierApi } from "@fern-api/pier";

/**
 * @example
 *     {
 *         address: {
 *             line1: "15 Market St",
 *             line2: undefined,
 *             city: "San Francisco",
 *             state: "NJ",
 *             zip: "94133"
 *         },
 *         businessContact: {
 *             firstName: "alex",
 *             lastName: "montana",
 *             phone: "4155555555",
 *             email: "alex@acme.co",
 *             title: "COO"
 *         },
 *         beneficialOwners: [{
 *                 address: {
 *                     line1: "15 Market St",
 *                     line2: undefined,
 *                     city: "San Francisco",
 *                     state: "CA",
 *                     zip: "91133"
 *                 },
 *                 dateOfBirth: "1991-12-18",
 *                 email: "jdoe@acme.com",
 *                 firstName: "Jane",
 *                 lastName: "Dough",
 *                 percentOwnership: 2500,
 *                 phone: "4155555555",
 *                 ssn: "123456789",
 *                 id: "63ae91f8eae458cb0d79f77e"
 *             }],
 *         businessName: "Apple Landscaping",
 *         businessType: PierApi.BusinessType.Corporation,
 *         dbaName: "Apple Landscaping",
 *         ein: "130256721",
 *         incorporationDate: "2000-12-12",
 *         kybCompletionDate: "2022-11-15",
 *         phone: "4152556465",
 *         stateOfIncorporation: "DE"
 *     }
 */
export interface BusinessBorrowerRequest {
    /** The address of the business. */
    address: PierApi.Address;
    /**
     * An array of objects representing owners of the business and those who control the funds of the business.
     * If no one owns more than 25% of the business, just the individual who has ultimate control of the funds must be included.
     * A maximum of 5 objects can be added.
     *
     */
    beneficialOwners: PierApi.BeneficialOwners[];
    /** The person executing the loan agreement. */
    businessContact: PierApi.BusinessContact;
    /** Legal name of the business. */
    businessName: string;
    /** The type of business entity. */
    businessType: PierApi.BusinessType;
    /** Doing-business-as name of the business */
    dbaName: string;
    /** 9-digit IRS employee identification number of the business (e.g. 345543221) */
    ein: string;
    /** Incorporation date of the business (YYYY-MM-DD) */
    incorporationDate: string;
    /** Date kyb completed on the business (YYYY-MM-DD) */
    kybCompletionDate: string;
    /** Required 2-digit US state code (e.g. CA, IL, FL, ???) */
    stateOfIncorporation: string;
    /** The phone number of the business */
    phone: string;
}
