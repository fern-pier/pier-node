/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.coverage.retrieveCommercialCoverage.Response.Raw,
    Record<string, PierApi.CommercialCoverage>
> = core.serialization.record(
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).CommercialCoverage)
);

export declare namespace Response {
    type Raw = Record<string, serializers.CommercialCoverage.Raw>;
}
