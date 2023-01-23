/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const CreateApplicationRequest: core.serialization.ObjectSchema<
    serializers.CreateApplicationRequest.Raw,
    PierApi.CreateApplicationRequest
> = core.serialization.object({
    borrowerId: core.serialization.property("borrower_id", core.serialization.string()),
    creditType: core.serialization.property("credit_type", core.serialization.string()),
    requestedAmount: core.serialization.property("requested_amount", core.serialization.number().optional()),
});

export declare namespace CreateApplicationRequest {
    interface Raw {
        borrower_id: string;
        credit_type: string;
        requested_amount?: number | null;
    }
}
