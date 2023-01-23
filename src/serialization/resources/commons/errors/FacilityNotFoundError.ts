/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const FacilityNotFoundError: core.serialization.Schema<
    serializers.FacilityNotFoundError.Raw,
    PierApi.FacilityNotFound
> = core.serialization.lazyObject(async () => (await import("../../..")).FacilityNotFound);

export declare namespace FacilityNotFoundError {
    type Raw = serializers.FacilityNotFound.Raw;
}