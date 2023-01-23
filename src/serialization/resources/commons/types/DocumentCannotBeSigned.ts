/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const DocumentCannotBeSigned: core.serialization.ObjectSchema<
    serializers.DocumentCannotBeSigned.Raw,
    PierApi.DocumentCannotBeSigned
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseErrorBody));

export declare namespace DocumentCannotBeSigned {
    interface Raw extends serializers.BaseErrorBody.Raw {}
}