/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ApplicationStatus =
    /**
     * the application is pending a decision */
    | "pending"
    /**
     * the application is approved with an offer */
    | "approved"
    /**
     * the application offer has been accepted by the borrower */
    | "accepted"
    /**
     * the application is rejected */
    | "rejected"
    /**
     * the application has expired */
    | "expired";

export const ApplicationStatus = {
    Pending: "pending",
    Approved: "approved",
    Accepted: "accepted",
    Rejected: "rejected",
    Expired: "expired",
} as const;
