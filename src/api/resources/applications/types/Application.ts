/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PierApi } from "@fern-api/pier";

/**
 * @example
 *     {
 *         id: "app_f0467657bba948e6a87292e182132848",
 *         borrowerId: "bor_a1d0c30d77104f35b4c842b99132624e",
 *         creditType: PierApi.CreditType.InstallmentLoan,
 *         status: PierApi.ApplicationStatus.Pending,
 *         createdOn: new Date("2022-12-31T01:36:52.606Z")
 *     }
 *
 * @example
 *     {
 *         id: "app_f0467657bba948e6a87292e182132848",
 *         borrowerId: "bor_d965bea9f47a4b108562642dbb1dae9f",
 *         creditType: PierApi.CreditType.RevolvingLineOfCredit,
 *         status: PierApi.ApplicationStatus.Approved,
 *         createdOn: new Date("2022-12-31T01:36:52.606Z"),
 *         decisionedOn: new Date("2023-01-17T05:31:52.955Z"),
 *         offer: PierApi.Offer.lineOfCredit({
 *             amount: 1000000,
 *             apr: 0,
 *             annualFee: 0,
 *             billingCycle: 30,
 *             financeCharge: 0,
 *             gracePeriod: 21,
 *             gracePeriodInterestRate: 0,
 *             interestRate: 0,
 *             latePaymentFee: 0,
 *             originationFee: 0,
 *             term: 24
 *         })
 *     }
 *
 * @example
 *     {
 *         rejectionReasons: [PierApi.RejectionReason.BankBalanceTooLow],
 *         id: "app_f0467657bba948e6a87292e182132848",
 *         borrowerId: "bor_1677bbbaf21a4954bb114bd9c4348d8a",
 *         creditType: PierApi.CreditType.InstallmentLoan,
 *         status: PierApi.ApplicationStatus.Rejected,
 *         createdOn: new Date("2022-12-31T02:20:35.934Z"),
 *         decisionedOn: new Date("2022-12-31T02:21:01.842Z")
 *     }
 */
export interface Application {
    id?: PierApi.ApplicationId;
    /** The `borrower_id` of the borrower the application belongs to */
    borrowerId?: PierApi.ConsumerBorrowerId;
    /** Timestamp the application object is created on */
    createdOn?: Date;
    /** The type of credit product. */
    creditType?: PierApi.CreditType;
    /** Timestamp when the application is either approved or rejected on */
    decisionedOn?: Date;
    /** If the application is approved, an object containing the credit offer details */
    offer?: PierApi.Offer;
    /**
     * If the application is rejected, a list containing 1-4 rejection reason(s).  The Rejection Reasons endpoint provides a list of valid reasons and descriptors
     *
     */
    rejectionReasons?: PierApi.RejectionReason[];
    /**
     * If the borrower requests an amount in their application, the requested  loan or credit line amount in cents (e.g. 500000 for $5,000)
     *
     */
    requestedAmount?: number;
    status: PierApi.ApplicationStatus;
}
