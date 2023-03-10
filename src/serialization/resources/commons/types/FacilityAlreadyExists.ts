/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const FacilityAlreadyExists: core.serialization.ObjectSchema<
    serializers.FacilityAlreadyExists.Raw,
    PierApi.FacilityAlreadyExists
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseErrorBody));

export declare namespace FacilityAlreadyExists {
    interface Raw extends serializers.BaseErrorBody.Raw {}
}
