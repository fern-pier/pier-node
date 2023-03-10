/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PierApi } from "@fern-api/pier";

/**
 * @example
 *     PierApi.Borrower.business({
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
 *         id: "bor_18e5a3726b3943cda2635f40e1041ba4",
 *         businessName: "Apple Landscaping",
 *         businessType: PierApi.BusinessType.Corporation,
 *         dbaName: "Apple Landscaping",
 *         ein: "130256721",
 *         incorporationDate: "2000-12-12",
 *         kybCompletionDate: "2022-11-15",
 *         phone: "4152556465",
 *         stateOfIncorporation: "DE",
 *         createdOn: "2022-12-30T07:23:36.665Z"
 *     })
 *
 * @example
 *     PierApi.Borrower.consumer({
 *         address: {
 *             line1: "15 Main Street",
 *             line2: "Unit 204",
 *             city: "Austin",
 *             state: "TX",
 *             zip: "73301"
 *         },
 *         dateOfBirth: "1991-12-18",
 *         email: "jdough@acme.co",
 *         firstName: "Jane",
 *         lastName: "Dough",
 *         ssn: "999888777",
 *         kycCompletionDate: "2022-11-15",
 *         phone: "2065886919",
 *         id: "bor_a1d0c30d77104f35b4c842b99132624e",
 *         createdOn: new Date("2022-12-30T07:23:36.665Z")
 *     })
 */
export type Borrower = PierApi.Borrower.Business | PierApi.Borrower.Consumer | PierApi.Borrower._Unknown;

export declare namespace Borrower {
    interface Business extends PierApi.BusinessBorrower, _Utils {
        type: "business";
    }

    interface Consumer extends PierApi.ConsumerBorrower, _Utils {
        type: "consumer";
    }

    interface _Unknown extends _Utils {
        type: void;
    }

    interface _Utils {
        _visit: <_Result>(visitor: PierApi.Borrower._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        business: (value: PierApi.BusinessBorrower) => _Result;
        consumer: (value: PierApi.ConsumerBorrower) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const Borrower = {
    business: (value: PierApi.BusinessBorrower): PierApi.Borrower.Business => {
        return {
            ...value,
            type: "business",
            _visit: function <_Result>(this: PierApi.Borrower.Business, visitor: PierApi.Borrower._Visitor<_Result>) {
                return PierApi.Borrower._visit(this, visitor);
            },
        };
    },

    consumer: (value: PierApi.ConsumerBorrower): PierApi.Borrower.Consumer => {
        return {
            ...value,
            type: "consumer",
            _visit: function <_Result>(this: PierApi.Borrower.Consumer, visitor: PierApi.Borrower._Visitor<_Result>) {
                return PierApi.Borrower._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): PierApi.Borrower._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(this: PierApi.Borrower._Unknown, visitor: PierApi.Borrower._Visitor<_Result>) {
                return PierApi.Borrower._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(value: PierApi.Borrower, visitor: PierApi.Borrower._Visitor<_Result>): _Result => {
        switch (value.type) {
            case "business":
                return visitor.business(value);
            case "consumer":
                return visitor.consumer(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
