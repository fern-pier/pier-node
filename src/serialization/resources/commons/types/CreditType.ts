/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const CreditType: core.serialization.Schema<serializers.CreditType.Raw, PierApi.CreditType> =
    core.serialization.enum_(["installment_loan", "revolving_line_of_credit", "closed_line_of_credit"]);

export declare namespace CreditType {
    type Raw = "installment_loan" | "revolving_line_of_credit" | "closed_line_of_credit";
}