/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const CommercialCoverage: core.serialization.ObjectSchema<
    serializers.CommercialCoverage.Raw,
    PierApi.CommercialCoverage
> = core.serialization.object({
    maxApr: core.serialization.property("max_apr", core.serialization.number().optional()),
    businessTypes: core.serialization.property(
        "business_types",
        core.serialization
            .list(core.serialization.lazy(async () => (await import("../../..")).BussinessType))
            .optional()
    ),
    limit1: core.serialization.property(
        "limit_1",
        core.serialization.lazyObject(async () => (await import("../../..")).CoverageLimit)
    ),
});

export declare namespace CommercialCoverage {
    interface Raw {
        max_apr?: number | null;
        business_types?: serializers.BussinessType.Raw[] | null;
        limit_1: serializers.CoverageLimit.Raw;
    }
}
