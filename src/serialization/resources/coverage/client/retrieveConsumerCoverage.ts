/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.coverage.retrieveConsumerCoverage.Response.Raw,
    Record<string, PierApi.ConsumerCoverage>
> = core.serialization.record(
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).ConsumerCoverage)
);

export declare namespace Response {
    type Raw = Record<string, serializers.ConsumerCoverage.Raw>;
}
