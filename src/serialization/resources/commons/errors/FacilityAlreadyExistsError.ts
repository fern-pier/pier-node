/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const FacilityAlreadyExistsError: core.serialization.Schema<
    serializers.FacilityAlreadyExistsError.Raw,
    PierApi.FacilityAlreadyExists
> = core.serialization.lazyObject(async () => (await import("../../..")).FacilityAlreadyExists);

export declare namespace FacilityAlreadyExistsError {
    type Raw = serializers.FacilityAlreadyExists.Raw;
}
