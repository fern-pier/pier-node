/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PierApi } from "@fern-api/pier";

/**
 * @example
 *     {
 *         status: PierApi.LoanAgreementStatus.PendingSignature,
 *         id: "doc_43da3b3f95c745e1985a71e9a00d6c27",
 *         applicationId: "app_a9d2f388030d4f4296f80fc327e08d0d",
 *         documentUrl: "https://production-formapi-docs.s3.amazonaws.com/store/acc_QqdcDH47A63qKZbK3S/templates/tpl_4zqGxezHzrfqDaxGr2/submissions/sub_J9PbHbXYbL4jzRxc3R.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJESVN6QC4ACN3XSQ%2F20221231%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221231T204739Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=cf0c6429ef72ca06d861cb912f5d1cf376a5c26c7f904aaa9bf08f10103785bd",
 *         createdOn: "2022-12-31T20:47:38.152Z"
 *     }
 */
export interface LoanAgreement {
    id: PierApi.LoanAgreementId;
    /** The `application_id` of the corresponding loan application the agreement is for */
    applicationId: string;
    /** Timestamp the loan agreement object is created on */
    createdOn: string;
    /** Url where the loan agreement document is hosted */
    documentUrl: string;
    /** Timestamp of when e-signature is completed */
    signatureTimestamp?: string;
    /** The status of the document */
    status: PierApi.LoanAgreementStatus;
}
