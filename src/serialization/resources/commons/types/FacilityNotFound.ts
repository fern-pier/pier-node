/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const FacilityNotFound: core.serialization.ObjectSchema<
    serializers.FacilityNotFound.Raw,
    PierApi.FacilityNotFound
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseErrorBody));

export declare namespace FacilityNotFound {
    interface Raw extends serializers.BaseErrorBody.Raw {}
}