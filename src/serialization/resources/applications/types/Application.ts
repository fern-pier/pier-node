/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const Application: core.serialization.ObjectSchema<serializers.Application.Raw, PierApi.Application> =
    core.serialization.object({
        id: core.serialization.lazy(async () => (await import("../../..")).ApplicationId).optional(),
        borrowerId: core.serialization.property(
            "borrower_id",
            core.serialization.lazy(async () => (await import("../../..")).ConsumerBorrowerId).optional()
        ),
        createdOn: core.serialization.property("created_on", core.serialization.date().optional()),
        creditType: core.serialization.property(
            "credit_type",
            core.serialization.lazy(async () => (await import("../../..")).CreditType).optional()
        ),
        decisionedOn: core.serialization.property("decisioned_on", core.serialization.date().optional()),
        offer: core.serialization.lazy(async () => (await import("../../..")).Offer).optional(),
        rejectionReasons: core.serialization.property(
            "rejection_reasons",
            core.serialization
                .list(core.serialization.lazy(async () => (await import("../../..")).RejectionReason))
                .optional()
        ),
        requestedAmount: core.serialization.property("requested_amount", core.serialization.number().optional()),
        status: core.serialization.lazy(async () => (await import("../../..")).ApplicationStatus),
    });

export declare namespace Application {
    interface Raw {
        id?: serializers.ApplicationId.Raw | null;
        borrower_id?: serializers.ConsumerBorrowerId.Raw | null;
        created_on?: string | null;
        credit_type?: serializers.CreditType.Raw | null;
        decisioned_on?: string | null;
        offer?: serializers.Offer.Raw | null;
        rejection_reasons?: serializers.RejectionReason.Raw[] | null;
        requested_amount?: number | null;
        status: serializers.ApplicationStatus.Raw;
    }
}
