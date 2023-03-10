/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const LoanAgreementId: core.serialization.Schema<serializers.LoanAgreementId.Raw, PierApi.LoanAgreementId> =
    core.serialization.string();

export declare namespace LoanAgreementId {
    type Raw = string;
}
