/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<serializers.loans.get.Response.Raw, PierApi.LoanAgreement> =
    core.serialization.lazyObject(async () => (await import("../../..")).LoanAgreement);

export declare namespace Response {
    type Raw = serializers.LoanAgreement.Raw;
}