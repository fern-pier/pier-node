/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const ApplicationNotFound: core.serialization.ObjectSchema<
    serializers.ApplicationNotFound.Raw,
    PierApi.ApplicationNotFound
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseErrorBody));

export declare namespace ApplicationNotFound {
    interface Raw extends serializers.BaseErrorBody.Raw {}
}
